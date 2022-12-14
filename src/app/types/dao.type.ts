import { Observable } from "rxjs";

export interface DAO<T, K> {
    getMany(filter: K): Observable<T[]>;
    getOne(id: number): Observable<T>;
    create(item: T): Observable<T>;
    update(item: T): Observable<T>;
    remove(id: number): Observable<number>;
    total(): Observable<number>;
}