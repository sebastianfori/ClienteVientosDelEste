import { environment } from "src/environments/environment";
import { fromPromise } from "../timed-promise";
import { APIPayload } from "../types/api-payload.type";
import { Diagram } from "../types/diagram.type";
import { UserFilter } from "../types/user-filter.type";
import { User, UserType } from "../types/user.type";
import { getMe } from "./auth";
import { DIAGRAMS } from "./diagrams";
import { USERS } from "./users";

const users: User[] = USERS;
const diagrams: Diagram[] = DIAGRAMS;
const delayMS = environment.requestDelay;
const timeoutMS = environment.requestTimeout;

export async function getMany(filter: UserFilter, token: any): Promise<APIPayload<User[]>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let userActive = getMe(token);
            if (!userActive || userActive.type !== UserType.Administrador) {
                reject(new Error('Unauthorized'));
            }
            else {
                let result = users.filter(user => {
                    if (filter.id_usu && user.id_usu !== filter.id_usu) {
                        return false;
                    }
                    if (filter.nick_usu && !user.nick_usu.toLowerCase().includes(filter.nick_usu.toLowerCase())) {
                        return false;
                    }
                    if (filter.mail_usu && !user.mail_usu.toLowerCase().includes(filter.mail_usu.toLowerCase())) {
                        return false;
                    }
                    if (filter.type && user.type !== filter.type) {
                        return false;
                    }
                    if (user.delete_by > 0 && filter.deleted === false) {
                        return false;
                    }
                    return true;
                });
                result.forEach(user => {
                    user.password = '';
                });
                resolve(new APIPayload<User[]>(result, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function getOne(id: number, token: any): Promise<APIPayload<User>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let userActive = getMe(token);
            if (!userActive || userActive.type !== UserType.Administrador) {
                reject(new Error('Unauthorized'));
            }
            else {
                const user = users.find(user => user.id_usu === id);
                if (user) {
                    user.password = '';
                    resolve(new APIPayload<User>(user, token));
                }
                reject(new Error('User not found'));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function create(user: User, token: any): Promise<APIPayload<User>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let userActive = getMe(token);
            if (!userActive || userActive.type !== UserType.Administrador) {
                reject(new Error('Unauthorized'));
            }
            else {
                const maxId = users.reduce((max, user) => user.id_usu > max ? user.id_usu : max, 0);
                user.id_usu = maxId + 1;
                user.delete_by = 0;
                users.push(user);
                resolve(new APIPayload<User>(user, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function update(user: User, token: any): Promise<APIPayload<User>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let userActive = getMe(token);
            if (!userActive || userActive.type !== UserType.Administrador) {
                reject(new Error('Unauthorized'));
            }
            else {
                const index = users.findIndex(u => u.id_usu === user.id_usu);
                if (index >= 0) {
                    if (!user.password) {
                        user.password = users[index].password;
                    }
                    users[index] = user;
                    resolve(new APIPayload<User>(user, token));
                }
                reject(new Error('User not found'));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function remove(id: number, token: any): Promise<APIPayload<number>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let userActive = getMe(token);
            if (!userActive || userActive.type !== UserType.Administrador) {
                reject(new Error('Unauthorized'));
            }
            else {
                const index = users.findIndex(u => u.id_usu === id);
                if (index >= 0) {
                    users[index].delete_by = 1;
                    resolve(new APIPayload<number>(id, token));
                }
                reject(new Error('User not found'));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function total(token: any): Promise<APIPayload<number>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let userActive = getMe(token);
            if (!userActive || userActive.type !== UserType.Administrador) {
                reject(new Error('Unauthorized'));
            }
            else {
                resolve(new APIPayload<number>(users.length, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}