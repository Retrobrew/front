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

    getAge(): number {
        const today = new Date();
        const birthday = new Date(this.birthday);
        let age = today.getFullYear() - birthday.getFullYear();

        const month = today.getMonth() - birthday.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }

        return age;
    }
}
