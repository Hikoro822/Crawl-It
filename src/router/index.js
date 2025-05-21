import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import LearnMore from '@/pages/LearnMore.vue';
import Auth from "@/pages/Auth.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/more', component: LearnMore},
    {path: '/auth', component: Auth},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;