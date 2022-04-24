import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import {User} from "@/object/User";

const user: User | undefined = undefined;

const app = createApp(App)

app.provide('user', user);

app.mount("#app")
