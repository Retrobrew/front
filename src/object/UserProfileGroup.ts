export class UserProfileGroup {
    public uuid: string;
    public name: string;
    public userIsGroupCreator: boolean;

    constructor(uuid: string, name: string, userIsGroupCreator: boolean) {
        this.uuid = uuid;
        this.name = name;
        this.userIsGroupCreator = userIsGroupCreator;
    }
}