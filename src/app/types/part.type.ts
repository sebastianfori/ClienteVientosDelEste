export class Part {
    [key: string]: any

    id_piez: number;
    id_cat: number;
    name_piez: string;
    url_img: string;
    height: number;
    resis_wind: number;
    material: string;
    create_by: number;
    edit_by: number;
    delete_by: number;

    constructor() {
        this.id_piez = 0;
        this.id_cat = 0;
        this.name_piez = '';
        this.url_img = '';
        this.height = 0;
        this.resis_wind = 0;
        this.material = '';
        this.create_by = 0;
        this.edit_by = 0;
        this.delete_by = 0;
    }

    // set received property to value if it exists
    public set(property: string, value: any): Part {
        if (this.hasOwnProperty(property)) {
            try {
                let type = typeof this[property];
                let typedValue = <typeof type>value;
                this[property] = typedValue;
                return this;
            } catch (error) {
                throw new Error(`Part.set: ${error}`);
            }
        }
        else {
            throw new Error(`Part.set: property ${property} does not exist`);
        }
    }

    static fromJSON(json: any): Part {
        let part = new Part();
        part.id_piez = json.id_piez;
        part.id_cat = json.id_cat;
        part.name_piez = json.name_piez;
        part.url_img = json.url_img;
        part.height = json.height;
        part.resis_wind = json.resis_wind;
        part.material = json.material;
        part.create_by = json.create_by;
        part.edit_by = json.edit_by;
        part.delete_by = json.delete_by;
        return part;
    }

    public toJson(): any {
        return {
            id_piez: this.id_piez,
            id_cat: this.id_cat,
            name_piez: this.name_piez,
            url_img: this.url_img,
            height: this.height,
            resis_wind: this.resis_wind,
            material: this.material,
            create_by: this.create_by,
            edit_by: this.edit_by,
            delete_by: this.delete_by
        };
    }

    public clone(): Part {
        return Part.fromJSON(this.toJson());
    }
}