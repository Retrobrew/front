import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import {User} from "@/object/User";
import APIController from "@/controller/APIController";

const app = createApp(App)
app.provide('user', undefined);

if(APIController.isLogged()){
    APIController.getUser()
        .then(json => {
            const user = new User(
                json.email,
                json.username,
                new Date(json.dateOfBirth),
                json.country,
                json.sexe,
                ""
            )

            app.provide('user', user);
            app.mount("#app")
        })
}else {
    app.mount("#app")
}
