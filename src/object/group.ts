export class Group {
    public uuid: String;
    public name: String;
    public description: String;
    public picture: any;
    public banner: any;


    constructor(
        uuid: String,
        name: String,
        description: String
    ) {
        this.uuid = uuid;
        this.name = name;
        this.description = description;
    }

    static emptyGroup() : Group {
        return new Group(
            "",
            "",
            ""
        )
    }
}