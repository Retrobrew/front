import 'mdb-vue-ui-kit/css/mdb.min.css';
import Vue3MobileDetection from "vue3-mobile-detection";
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
import FindFriendsVue from "@/components/user/list/FindFriendsVue.vue";
import PostDetailsVue from "@/components/post/post-details/PostDetailsVue.vue";
import FindGroupsVue from "@/components/group/list/FindGroupsVue.vue";
import MobileHomeVue from "@/components/home/MobileHomeVue.vue";

const app = createApp(App)
const routes = [
    { path: '/', component: Home, name: 'home', meta: { requiresAuth: false } },
    { path: '/find-friends', component: FindFriendsVue, meta: { requiresAuth: true } },
    { path: '/find-groups', component: FindGroupsVue, meta: { requiresAuth: true } },
    { path: '/group/creation', component: GroupCreationVue, meta: { requiresAuth: true } },
    { path: '/group/:uuid', component: GroupHomeVue, name: 'group', params: true },
    { path: '/login', component: UserLogin, name: 'login' },
    { path: '/mobile', component: MobileHomeVue },
    { path: '/post/:uuid', component: PostDetailsVue, name: 'post', params: true },
    { path: '/profile', component: UserProfileHomeVue, name:'profile', meta: { requiresAuth: true } },
    { path: '/project/:projectId/edit/:file', component: IDEVue, params: true, meta: { requiresAuth: true } },
    { path: '/register', component: UserRegister, name: 'register' },
    { path: '/user/:uuid', component: UserHomeVue, name: 'friend', params: true },
    { path: '/:pathMatch(.*)*', component: Error404 },
];

document.title = "Retrobrew";

const router = createRouter({
    history: createWebHistory(),
    routes,
})
let user: User | undefined = undefined;

if(APIController.isLogged()){
    user = await APIController.getCurrentUser()
        .then(json => {
            return new User(
                json.uuid,
                json.email,
                json.username,
                new Date(json.dateOfBirth),
                json.country,
                json.sexe,
                json.picture
            );
        })
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !user) {
        next({ name: 'login' })
    }else if ((to.name === 'login' || to.name === 'register') && user) {
        next({ name: 'home' })
    } else {
        next()
    }
})

app.provide('user', user);
app.use(router);
app.use(Vue3MobileDetection);
app.mount("#app");

