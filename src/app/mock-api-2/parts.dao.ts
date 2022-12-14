import { environment } from "src/environments/environment";
import { fromPromise } from "../timed-promise";
import { APIPayload } from "../types/api-payload.type";
import { PartFilter } from "../types/part-filter.type";
import { Part } from "../types/part.type";
import { getMe } from "./auth";
import { PARTS } from "./parts";

const parts: Part[] = PARTS;
const delayMS = environment.requestDelay;
const timeoutMS = environment.requestTimeout;

export async function getMany(filter: PartFilter, token: any): Promise<APIPayload<Part[]>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                let result = parts.filter(part => {
                    if (filter.id_piez && part.id_piez !== filter.id_piez) {
                        return false;
                    }
                    if (filter.id_cat && part.id_cat !== filter.id_cat) {
                        return false;
                    }
                    if (filter.height_over && part.height < filter.height_over) {
                        return false;
                    }
                    if (filter.height_under && part.height >= filter.height_under) {
                        return false;
                    }
                    if (filter.resis_wind_over && part.resis_wind < filter.resis_wind_over) {
                        return false;
                    }
                    if (filter.resis_wind_under && part.resis_wind >= filter.resis_wind_under) {
                        return false;
                    }
                    if (filter.name_piez && !part.name_piez.toLowerCase().includes(filter.name_piez.toLowerCase())) {
                        return false;
                    }
                    if (filter.material && !part.material.toLowerCase().includes(filter.material.toLowerCase())) {
                        return false;
                    }
                    if (part.delete_by > 0 && filter.deleted === false) {
                        return false;
                    }
                    return true;
                });
                resolve(new APIPayload(result, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function getOne(id: number, token: any): Promise<APIPayload<Part>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                const part = parts.find(part => part.id_piez === id);
                if (part) {
                    resolve(new APIPayload(part, token));
                }
                reject(new Error('Part not found'));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function create(part: Part, token: any): Promise<APIPayload<Part>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                const maxId = parts.reduce((max, part) => part.id_piez > max ? part.id_piez : max, 0);
                part.id_piez = maxId + 1;
                part.create_by = 1;
                part.edit_by = 0;
                part.delete_by = 0;
                parts.push(part);
                resolve(new APIPayload(part, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function update(part: Part, token: any): Promise<APIPayload<Part>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                const index = parts.findIndex(p => p.id_piez === part.id_piez);
                if (index >= 0) {
                    part.edit_by = 1;
                    parts[index] = part;
                    resolve(new APIPayload(part, token));
                }
                reject(new Error('Part not found'));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function remove(id: number, token: any): Promise<APIPayload<number>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                const index = parts.findIndex(p => p.id_piez === id);
                if (index >= 0) {
                    parts[index].delete_by = 1;
                    resolve(new APIPayload(id, token));
                }
                reject(new Error('Part not found'));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function total(token: any): Promise<APIPayload<number>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                resolve(new APIPayload(parts.length, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}