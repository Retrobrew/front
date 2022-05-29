export class Group {
    public uuid: String;
    public name: String;
    public description: String;
    public picture: any;
    public banner: any;
    public isProject: boolean;


    constructor(
        uuid: String,
        name: String,
        description: String,
        picture: String,
        isProject: boolean
    ) {
        this.uuid = uuid;
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.isProject = isProject;
    }

    static emptyGroup() : Group {
        return new Group(
            "",
            "",
            "",
            "",
            false
        )
    }

    static createFromApi(json: any): Group {
        return new Group(
            json.uuid,
            json.name,
            json.description,
            json.picture,
            json.isProject
        );
    }
}