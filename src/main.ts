import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import {User} from "@/object/User";
import APIController from "@/controller/APIController";
import Home from "@/components/home/HomeVue.vue";
import UserProfileHomeVue from "@/components/user/profile/UserProfileHomeVue.vue";
import UserHomeVue from "@/components/user/user/UserHomeVue.vue";
import {createRouter, createWebHistory} from 'vue-router';
import UserLogin from "@/components/user/login/UserLogin.vue";
import UserRegister from "@/components/user/register/UserRegister.vue";
import Error404 from "@/components/error/Error404.vue";
import GroupHomeVue from "@/components/group/home/GroupHomeVue.vue";
import IDEVue from "@/components/ide/IDEVue.vue";
import GroupCreationVue from "@/components/group/creation/GroupCreationVue.vue";

const app = createApp(App)
const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: UserProfileHomeVue },
    { path: '/user/:uuid', component: UserHomeVue },
    { path: '/login', component: UserLogin },
    { path: '/register', component: UserRegister },
    { path: '/group/creation', component: GroupCreationVue },
    { path: '/group/:uuid', component: GroupHomeVue },
    { path: '/ide', component: IDEVue },
    { path: '/:pathMatch(.*)*', component: Error404 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

})

app.provide('user', undefined);
app.use(router);

if(APIController.isLogged()){
    APIController.getCurrentUser()
        .then(json => {
            const user = new User(
                json.uuid,
                json.email,
                json.username,
                new Date(json.dateOfBirth),
                json.country,
                json.sexe,
                json.picture
            )

            app.provide('user', user);
            app.mount("#app")
        })
}else {
    app.mount("#app")
}
