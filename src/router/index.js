import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import LearnMore from '@/pages/LearnMore.vue';
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/more', component: LearnMore},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;