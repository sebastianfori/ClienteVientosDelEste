import { environment } from "src/environments/environment";
import { fromPromise } from "../timed-promise";
import { APIPayload } from "../types/api-payload.type";
import { DiagramFilter } from "../types/diagram-filter.type";
import { Diagram } from "../types/diagram.type";
import { getMe } from "./auth";
import { DIAGRAMS } from "./diagrams";

const diagrams: Diagram[] = DIAGRAMS;
const delayMS = environment.requestDelay;
const timeoutMS = environment.requestTimeout;

export async function getMany(filter: DiagramFilter, token: any): Promise<APIPayload<Diagram[]>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                let result = diagrams.filter(diagram => {
                    if (filter.id_diag && diagram.id_diag !== filter.id_diag) {
                        return false;
                    }
                    if (filter.name_diag && !diagram.name_diag.toLowerCase().includes(filter.name_diag.toLowerCase())) {
                        return false;
                    }
                    if (filter.id_base && diagram.id_base !== filter.id_base) {
                        return false;
                    }
                    if (filter.id_body && diagram.id_body !== filter.id_body) {
                        return false;
                    }
                    if (filter.id_blade && diagram.id_blade !== filter.id_blade) {
                        return false;
                    }
                    if (filter.state && diagram.state !== filter.state) {
                        return false;
                    }
                    if (diagram.delete_by > 0 && filter.deleted === false) {
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

export async function getOne(id: number, token: any): Promise<APIPayload<Diagram>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                const diagram = diagrams.find(diagram => diagram.id_diag === id);
                if (diagram) {
                    resolve(new APIPayload(diagram, token));
                }
                reject(new Error('Diagram not found'));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function create(diagram: Diagram, token: any): Promise<APIPayload<Diagram>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                const maxId = diagrams.reduce((max, diagram) => diagram.id_diag > max ? diagram.id_diag : max, 0);
                diagram.id_diag = maxId + 1;
                diagram.create_by = 1;
                diagram.edit_by = 0;
                diagram.delete_by = 0;
                diagrams.push(diagram);
                resolve(new APIPayload(diagram, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function update(diagram: Diagram, token: any): Promise<APIPayload<Diagram>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                const index = diagrams.findIndex(d => d.id_diag === diagram.id_diag);
                if (index >= 0) {
                    diagram.edit_by = 1;
                    diagrams[index] = diagram;
                    resolve(new APIPayload(diagram, token));
                }
                reject(new Error('Diagram not found'));
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
                const index = diagrams.findIndex(d => d.id_diag === id);
                if (index >= 0) {
                    diagrams[index].delete_by = 1;
                    resolve(new APIPayload(id, token));
                }
                reject(new Error('Diagram not found'));
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
                resolve(new APIPayload(diagrams.length, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}