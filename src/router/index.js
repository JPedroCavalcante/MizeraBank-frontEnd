import {createRouter, createWebHistory} from "vue-router";
import LoginView from "../views/LoginView.vue";
import Guard from "../services/middleware";
import RegisterView from "../views/RegisterView.vue";
import HoldersView from "../views/HoldersView.vue";
import IndexView from "../views/IndexView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexView,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/holders',
            name: 'holders',
            component: HoldersView,
            beforeEnter: Guard.auth,
        },
    ],
});

export default router;
