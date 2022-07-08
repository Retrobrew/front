export class UserProfileGroup {
    public uuid: string;
    public name: string;
    public userIsGroupCreator: boolean;
    public picture: string;

    constructor(
        uuid: string,
        name: string,
        userIsGroupCreator: boolean,
        picture: string = "/assets/vector-gameboy.png"
    ) {
        this.uuid = uuid;
        this.name = name;
        this.userIsGroupCreator = userIsGroupCreator;
        this.picture = picture;
    }
}