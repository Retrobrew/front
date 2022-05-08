import {User} from "@/object/User";
import {inject, provide} from "vue";

class APIController {
    constructor() {
    }

    static register = async (email: String, username: String, birthdate: String, sexe: String, country: String, password: String, picture: String) => {
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
                console.log(json);
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

    static isLogged = async (): Promise<boolean> => {
        let isLoginValid = false;
        let user = inject('user');

        const token = sessionStorage.getItem('access_token');
        if (token === undefined) {
            return isLoginValid;
        } else {
            fetch(`${process.env.VUE_APP_AUTH_API_URL}/profile`, {
                headers: { Authorization: "Bearer " + token }
            })
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error("Connexion expired");
                    }
                    return response.json();
                })
                .then(json => {
                    fetch(`${process.env.VUE_APP_AUTH_API_URL}/users/${json.userId}`, {
                        headers: { Authorization: "Bearer " + token }
                    })
                        .then(response => response.json())
                        .then(json => {
                            user = new User(json.email, json.username, new Date(), "", "", "")
                            provide('user', user);
                            isLoginValid = true;
                            console.log(user)
                        })
                })
                .catch(err => console.error(err));
        }
        return isLoginValid;
    }
}

export default APIController;
