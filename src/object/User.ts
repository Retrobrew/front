export class User {
    public mail: String;
    public name: String;
    public birthday: Date;
    public country: String;
    public sex: String;
    public picture: String;

    constructor(
        mail: String,
        name: String,
        birthday: Date,
        country: String,
        sex: String,
        picture: String
    ) {
        this.mail = mail;
        this.name = name;
        this.birthday = birthday;
        this.country = country;
        this.sex = sex;
        this.picture = picture;
    }
}
