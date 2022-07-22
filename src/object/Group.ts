export class Group {
    public creator: string;
    public uuid: string;
    public name: string;
    public description: string;
    public picture: any;
    public banner: any;
    public isProject: boolean;
    public members: Array<any>;
    public langage: string;


    constructor(
        creator: string,
        uuid: string,
        name: string,
        description: string,
        picture: string,
        isProject: boolean,
        members: Array<any>,
        langage: string,
    ) {
        this.creator = creator;
        this.uuid = uuid;
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.isProject = isProject;
        this.members = members;
        this.langage = langage;
    }

    static emptyGroup() : Group {
        return new Group(
            "",
            "",
            "",
            "",
            "",
            false,
            [],
            ""
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
            [],
            ""
        )
    }

    static createFromApi(json: any): Group {
        let picture = "/assets/vector-gameboy.png";
        if(json.picture) {
            picture = json.picture;
        }

        return new Group(
            json.createdBy.uuid,
            json.uuid,
            json.name,
            json.description,
            picture,
            json.isProject,
            json.members,
            json.langage,
        );
    }

    public hasMember(userUuid: string): boolean {
        return this.members.find((item) => {
            return item.user === userUuid;
        }) !== undefined;
    }
}
