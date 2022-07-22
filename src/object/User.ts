export class User {
    public uuid: string;
    public mail: string;
    public username: string;
    public birthday: Date;
    public country: string;
    public gender: string;
    public picture: string;

    constructor(
        uuid: string,
        mail: string,
        name: string,
        birthday: Date,
        country: string,
        gender: string,
        picture: string
    ) {
        this.uuid = uuid;
        this.mail = mail;
        this.username = name;
        this.birthday = birthday;
        this.country = country;
        this.gender = gender;
        this.picture = picture;
    }

    static newUser(): User {
        return new User(
            "",
            "",
            "",
            new Date(),
            "",
            "",
            ""
        );
    }

    generateRegisterFormData(): FormData {

        const formData = new FormData();
        let birthday: string;
        if(typeof this.birthday === 'string'){
            birthday = this.birthday
        } else {
            birthday = this.birthday.toUTCString();
        }
        formData.append('email', this.mail);
        formData.append('username', this.username);
        formData.append('dateOfBirth', birthday );
        formData.append('sexe', this.gender);
        formData.append('country', this.country);

        return formData;
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
