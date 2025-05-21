import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import LearnMore from '@/pages/LearnMore.vue';
import Auth from "@/pages/Auth.vue";
import Tasks from "@/pages/Tasks.vue";
import Courses from "@/pages/Courses.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/more', component: LearnMore},
    {path: '/auth', component: Auth},
    {path: '/tasks', component: Tasks},
    {path: '/courses', component: Courses},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;