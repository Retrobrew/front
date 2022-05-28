export class User {
    public uuid: String;
    public mail: String;
    public username: String;
    public birthday: Date;
    public country: String;
    public sex: String;
    public picture: String;

    constructor(
        uuid: String,
        mail: String,
        name: String,
        birthday: Date,
        country: String,
        sex: String,
        picture: String
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
