import { Category } from "../types/category.type";

export const CATEGORIES: Category[] = [
    new Category()
        .set('id_cat', 1)
        .set('name_cat', 'Body'),
    new Category()
        .set('id_cat', 2)
        .set('name_cat', 'Base'),
    new Category()
        .set('id_cat', 3)
        .set('name_cat', 'Blade'),
];