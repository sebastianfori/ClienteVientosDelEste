import { APIPayload } from "../types/api-payload.type";
import { User } from "../types/user.type";
import { TOKENS } from "./tokens";
import { USERS } from "./users";

export async function login(username: string, password: string): Promise<APIPayload<boolean>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = USERS.find(user => user.nick_usu === username && user.password === password);
            if (user) {
                let r = (Math.random() + 1).toString(36).substring(7);
                TOKENS.push({
                    token: r,
                    user: user.id_usu
                });
                resolve(new APIPayload(true, r));
            }
            reject(new Error('Invalid username or password'));
        }, 1000);
    });
}

export async function logout(token: any): Promise<APIPayload<boolean>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = TOKENS.findIndex(t => t.token === token);
            if (index > -1) {
                TOKENS.splice(index, 1);
                resolve(new APIPayload(true, token));
            }
            reject(new Error('Invalid token'));
        }, 1000);
    });
}

export function getMe(token: any): User | null {
    const tokenFound = TOKENS.find(t => t.token === token);
    if (tokenFound) {
        let user = USERS.find(u => u.id_usu === tokenFound.user);
        if (user) {
            return user;
        }
    }
    return null;
}