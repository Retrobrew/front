export class Group {
    public creator: string;
    public uuid: string;
    public name: string;
    public description: string;
    public picture: any;
    public banner: any;
    public isProject: boolean;
    public members: Array<any>;


    constructor(
        creator: string,
        uuid: string,
        name: string,
        description: string,
        picture: string,
        isProject: boolean,
        members: Array<any>
    ) {
        this.creator = creator;
        this.uuid = uuid;
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.isProject = isProject;
        this.members = members;
    }

    static emptyGroup() : Group {
        return new Group(
            "",
            "",
            "",
            "",
            "",
            false,
            []
        )
    }

    static homeGroup() : Group {
        return new Group(
            "",
            "home",
            "home",
            "",
            "",
            false,
            []
        )
    }

    static createFromApi(json: any): Group {
        return new Group(
            json.createdBy,
            json.uuid,
            json.name,
            json.description,
            json.picture,
            json.isProject,
            json.members
        );
    }

    public hasMember(userUuid: string): boolean {
        return this.members.find((item) => {
            return item.user === userUuid;
        }) !== undefined;
    }
}