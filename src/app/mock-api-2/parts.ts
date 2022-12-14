import { Part } from "../types/part.type";

// Windmill parts
export const PARTS: Part[] = [
    new Part()
        .set('id_piez', 1)
        .set('id_cat', 1)
        .set('name_piez', 'Body 1')
        .set('height', 1.5)
        .set('resis_wind', 1.5)
        .set('material', 'Material 1')
        .set('create_by', 1)
        .set('edit_by', 0)
        .set('delete_by', 0)
        .set('url_img', 'https://www.moldedfiberglass.com/wp-content/uploads/2020/01/application_WindComponents-1024x512.jpg'),
    new Part()
        .set('id_piez', 2)
        .set('id_cat', 2)
        .set('name_piez', 'Base 1')
        .set('height', 1.5)
        .set('resis_wind', 1.5)
        .set('material', 'Material 1')
        .set('create_by', 1)
        .set('edit_by', 0)
        .set('delete_by', 0)
        .set('url_img', 'https://www.moldedfiberglass.com/wp-content/uploads/2020/01/application_WindBladesGround-1024x512.jpg'),
    new Part()
        .set('id_piez', 3)
        .set('id_cat', 3)
        .set('name_piez', 'Blade 1')
        .set('height', 1.5)
        .set('resis_wind', 1.5)
        .set('material', 'Material 1')
        .set('create_by', 1)
        .set('edit_by', 0)
        .set('delete_by', 0)
        .set('url_img', 'https://www.moldedfiberglass.com/wp-content/uploads/2020/01/application_WindBlade-1-1024x512.jpg'),
];