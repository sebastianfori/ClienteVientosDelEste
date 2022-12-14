import { User, UserType } from "../types/user.type";

export const USERS: User[] = [
    new User()
        .set('id_usu', 1)
        .set('nick_usu', 'admin')
        .set('mail_usu', 'admin@localhost')
        .set('type', UserType.Administrador)
        .set('password', 'admin') // TODO: Encriptar contraseña
        .set('create_by', 0)
        .set('edit_by', 0)
        .set('delete_by', 0),
    new User()
        .set('id_usu', 2)
        .set('nick_usu', 'user')
        .set('mail_usu', 'user@localhost')
        .set('type', UserType.Operario)
        .set('password', 'user') // TODO: Encriptar contraseña
        .set('create_by', 1)
        .set('edit_by', 0)
        .set('delete_by', 0),
    new User()
        .set('id_usu', 3)
        .set('nick_usu', 'user2')
        .set('mail_usu', 'user2@localhost')
        .set('type', UserType.Auditor)
        .set('password', 'user2') // TODO: Encriptar contraseña
        .set('create_by', 1)
        .set('edit_by', 0)
        .set('delete_by', 0)
];
