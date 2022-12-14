import { APIPayload } from "../types/api-payload.type";
import { CategoryFilter } from "../types/category-filter.type";
import { Category } from "../types/category.type";
import { CATEGORIES } from "./categories";
import { getMe } from "./auth";
import { User, UserType } from "../types/user.type";
import { fromPromise } from "../timed-promise";
import { environment } from "src/environments/environment";

const categories: Category[] = CATEGORIES;
const delayMS = environment.requestDelay;
const timeoutMS = environment.requestTimeout;

export async function getMany(filter: CategoryFilter, token: any): Promise<APIPayload<Category[]>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                let result = categories.filter(category => {
                    if (filter.name_cat && !category.name_cat.toLowerCase().includes(filter.name_cat.toLowerCase())) {
                        return false;
                    }
                    return true;
                })
                resolve(new APIPayload(result, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function getOne(id: number, token: any): Promise<APIPayload<Category>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = getMe(token);
            if (!user) {
                reject(new Error('Unauthorized'));
            }
            else {
                const category = categories.find(category => category.id_cat === id);
                if (category) {
                    resolve(new APIPayload(category.clone(), token));
                }
                reject(new Error('Category not found'));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function create(category: Category, token: any): Promise<APIPayload<Category>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user: User | null = getMe(token);
            if (!user || user.type !== UserType.Administrador) {
                reject(new Error('Unauthorized'));
            }
            else {
                const maxId = categories.reduce((max, category) => category.id_cat > max ? category.id_cat : max, 0);
                category.id_cat = maxId + 1;
                categories.push(category);
                resolve(new APIPayload(category.clone(), token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function update(category: Category, token: any): Promise<APIPayload<Category>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user: User | null = getMe(token);
            if (!user || user.type !== UserType.Administrador) {
                reject(new Error('Unauthorized'));
            }
            else {
                const index = categories.findIndex(c => c.id_cat === category.id_cat);
                if (index >= 0) {
                    categories[index] = category;
                    resolve(new APIPayload(category.clone(), token));
                }
                reject(new Error('Category not found'));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}

export async function remove(id: number, token: any): Promise<APIPayload<number>> {
    return fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => {
            let user: User | null = getMe(token);
            if (!user || user.type !== UserType.Administrador) {
                reject(new Error('Unauthorized'));
            }
            else {
                const index = categories.findIndex(c => c.id_cat === id);
                if (index >= 0) {
                    categories.splice(index, 1);
                    resolve(new APIPayload(id, token));
                }
                reject(new Error('Category not found'));
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
                resolve(new APIPayload(categories.length, token));
            }
        }, delayMS);
    }),
    timeoutMS,
    new Error('Request timed out'));
}