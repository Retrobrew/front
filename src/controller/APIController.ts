import {Friend} from "@/object/Friend";
import {provide} from "vue";
import {User} from "@/object/User";

class APIController {
    constructor() {
    }

    static register = async (
        email: String,
        username: String,
        birthdate: String,
        sexe: String,
        country: String,
        password: String,
        picture: String
    ) => {
        await fetch(`${process.env.VUE_APP_AUTH_API_URL}/users`, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                username: username,
                dateOfBirth: birthdate.split("-").reverse().join("/"),
                sexe: sexe,
                country: country,
                password: password,
            }),
            headers: { "Content-type": "application/json" }
        })
            .then(response => {
                if (response.status !== 201) {
                    throw new Error("Registration failed")
                }
                return response.json()
            })
            .then(json => {
                sessionStorage.setItem('access_token', json.access_token);
                window.location.pathname = '/';
            })
            .catch(err => {
                alert(err);
            });
    }

    static login = async (email: String, password: String) => {
        await fetch(`${process.env.VUE_APP_AUTH_API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: { "Content-type": "application/json" }
        })
            .then(response => {
                if (response.status !== 201) {
                    throw new Error("Connexion failed");
                }
                return response.json();
            })
            .then(json => {
                sessionStorage.setItem('access_token', json.access_token);
                window.location.pathname = '/';
            })
            .catch(err => {
                console.error(err);
                alert("Connexion failed");
            });
    }

    static logout(): void {
        sessionStorage.removeItem('access_token');
        provide('user', undefined);
        window.location.pathname = "/";
    }

    static isLogged(): boolean {
        return !!sessionStorage.getItem('access_token');
    }

    static getCurrentUser(): Promise<any> {
        const token = sessionStorage.getItem('access_token');
        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/profile`, {
            headers: { Authorization: "Bearer " + token }
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("Connexion expired");
                }
                return response.json();
            })
            .catch(err => console.error(err));
    }

    static getUserProfile(userUuid: string): Promise<User> {
        const token = sessionStorage.getItem('access_token');
        return fetch(
            `${process.env.VUE_APP_AUTH_API_URL}/users/${userUuid}`,
            {
                headers: { Authorization: "Bearer " + token }
            }
        ).then(response => {
            return response.json()
        }).then(json => {
            let picture =  '/assets/avatar-placeholder.png';
            if(json.picture){
                picture = json.picture;
            }
            return new User(
                json.uuid,
                json.mail,
                json.username,
                json.dateOfBirth,
                json.country,
                json.sexe,
                picture
            );
        })
    }

    static getMyFriends(): Promise<Array<Friend>> {
        const token = sessionStorage.getItem('access_token');
        const friends: Array<Friend> = [];

        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/my/friends`, {
            headers: { Authorization: "Bearer " + token }
        })
            .then(response => {
                if(response.status !== 200) {
                    throw new Error("Error while trying to fetch posts");
                }

                return response.json();
            })
            .then(json => {
                json.forEach((item: any) => {
                    let picture =  '/assets/avatar-placeholder.png';
                    if(json.picture){
                        picture = json.picture;
                    }
                    const friend = new Friend(
                        item.username,
                        item.country,
                        picture,
                        item.userUuid
                    );
                    friends.push(friend);
                })
                return friends
            })
    }

    static unfriend(friendUuid: string): Promise<any> {
        const token = sessionStorage.getItem('access_token');
        return fetch(`${process.env.VUE_APP_AUTH_API_URL}/friends/${friendUuid}/unfriend`, {
            method: "POST",
            headers: { Authorization: "Bearer " + token }
        });
    }
}

export default APIController;
