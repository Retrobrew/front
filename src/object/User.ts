export class User {
    public uuid: string;
    public mail: string;
    public username: string;
    public birthday: Date;
    public country: string;
    public sex: string;
    public picture: string;

    constructor(
        uuid: string,
        mail: string,
        name: string,
        birthday: Date,
        country: string,
        sex: string,
        picture: string
    ) {
        this.uuid = uuid;
        this.mail = mail;
        this.username = name;
        this.birthday = birthday;
        this.country = country;
        this.sex = sex;
        this.picture = picture;
    }
}
