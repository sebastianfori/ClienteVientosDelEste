/*
export class TimedPromise<T> extends Promise<T> {
    constructor(private timeout: number, private error: Error, executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) {
        super((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject(error);
            }, timeout);
            executor(
                value => {
                    clearTimeout(timeoutId);
                    resolve(value);
                },
                reason => {
                    clearTimeout(timeoutId);
                    reject(reason);
                }
            );
        });
    }
}

export function fromPromise2<T>(promise: Promise<T>, timeout: number, error: Error): TimedPromise<T> {
    return new TimedPromise<T>(timeout, error, (resolve, reject) => {
        promise.then(resolve, reject);
    });
}
*/
export async function fromPromise<T>(promise: Promise<T>, timeout: number, error: Error): Promise<T> {
    let timer: NodeJS.Timeout;
    return Promise.race([
        promise,
        new Promise<T>((resolve, reject) => {
            timer = setTimeout(
                reject,
                timeout,
                error
            );
        })
    ]).then(value => {
        clearTimeout(timer);
        return value;
    });
}