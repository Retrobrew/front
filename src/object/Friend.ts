export class Friend {
    public uuid: string;
    public username: string;
    public country: string;
    public picture: string;


    constructor(
        username: string,
        country: string,
        picture: string,
        uuid: string
    ) {
        this.uuid    = uuid;
        this.username = username;
        this.country = country;
        this.picture = picture;
    }
}