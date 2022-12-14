export class Category {
    [key: string]: any

    id_cat: number;
    name_cat: string;

    constructor() {
        this.id_cat = 0;
        this.name_cat = '';
    }

    // set received property to value if it exists
    public set(property: string, value: any): Category {
        if (this.hasOwnProperty(property)) {
            try {
                let type = typeof this[property];
                let typedValue = <typeof type>value;
                this[property] = typedValue;
                return this;
            } catch (error) {
                throw new Error(`Category.set: ${error}`);
            }
        }
        else {
            throw new Error(`Category.set: property ${property} does not exist`);
        }
    }

    static fromJSON(json: any): Category {
        let category = new Category();
        category.id_cat = json.id_cat;
        category.name_cat = json.name_cat;
        return category;
    }

    public toJson(): any {
        return {
            id_cat: this.id_cat,
            name_cat: this.name_cat
        };
    }

    public clone(): Category {
        return Category.fromJSON(this.toJson());
    }
}