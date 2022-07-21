export class LibItem {
    public id: string;
    public description: string;
    public name: string;

    constructor(
        id: string,
        description: string,
        name: string,
    ) {
        this.id = id;
        this.description = description;
        this.name = name;
    }
}
