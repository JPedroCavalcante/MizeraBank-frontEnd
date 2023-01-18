import {createRouter, createWebHistory} from "vue-router";
import Login from "../components/Login.vue";
import Holders from "../views/Holders/Holders.vue";
import Guard from "../services/middleware";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/holders',
            name: 'Holders',
            component: Holders,
            // beforeEnter: Guard.auth,
        },
    ],
});

export default router;
