export class Group {
    public uuid: string;
    public name: string;
    public description: string;
    public picture: any;
    public banner: any;
    public isProject: boolean;


    constructor(
        uuid: string,
        name: string,
        description: string,
        picture: string,
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