export class User {
    [key: string]: any

    id_usu: number;
    nick_usu: string;
    mail_usu: string;
    password: string;
    type: UserType;
    create_by: number;
    edit_by: number;
    delete_by: number;

    constructor() {
        this.id_usu = 0;
        this.nick_usu = '';
        this.mail_usu = '';
        this.password = '';
        this.type = UserType.Operario;
        this.create_by = 0;
        this.edit_by = 0;
        this.delete_by = 0;
    }

    // set received property to value if it exists
    public set(property: string, value: any): User {
        if (this.hasOwnProperty(property)) {
            try {
                let type = typeof this[property];
                let typedValue = <typeof type>value;
                this[property] = typedValue;
                return this;
            } catch (error) {
                throw new Error(`User.set: ${error}`);
            }
        }
        else {
            throw new Error(`User.set: property ${property} does not exist`);
        }
    }

    static fromJSON(json: any): User {
        let user = new User();
        user.id_usu = json.id_usu;
        user.nick_usu = json.nick_usu;
        user.mail_usu = json.mail_usu;
        user.password = json.password;
        user.type = json.type;
        user.create_by = json.create_by;
        user.edit_by = json.edit_by;
        user.delete_by = json.delete_by;
        return user;
    }

    public toJson(): any {
        return {
            id_usu: this.id_usu,
            nick_usu: this.nick_usu,
            mail_usu: this.mail_usu,
            password: this.password,
            type: this.type,
            create_by: this.create_by,
            edit_by: this.edit_by,
            delete_by: this.delete_by
        };
    }

    public clone(): User {
        return User.fromJSON(this.toJson());
    }
}

export enum UserType {
    Operario = "Operario",
    Auditor = "Auditor",
    Administrador = "Administrador"
}

export const UserTypeMapping: Record<UserType, string> = {
    [UserType.Operario]: "Operario",
    [UserType.Auditor]: "Auditor",
    [UserType.Administrador]: "Administrador",
}
