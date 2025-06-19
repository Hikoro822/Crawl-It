import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/HomePage.vue';
import LearnMore from '@/pages/InfoPage.vue';
import Auth from "@/pages/AuthPage.vue";
import Tasks from "@/pages/TasksPage.vue";
import Courses from "@/pages/CoursesPage.vue";
import Agreement from "@/pages/AgreementPage.vue";
import Privacy from "@/pages/PrivacyPage.vue";
import Profile from "@/pages/ProfilePage.vue";

const routes = [
    {
        path: '/home', component: Home,
    },
    {
        path: '/more', component: LearnMore,
    },
    {
        path: '/auth', component: Auth,
    },
    {
        path: '/agreement', component: Agreement
    },
    {
        path: '/privacy', component: Privacy
    },
    {
        path: '/tasks', component: Tasks,
        meta: {
            layout: "AppLayout"
        }
    },
    {
        path: '/courses', component: Courses,
        meta: {
            layout: "AppLayout"
        }
    }, {
        path: '/profile', component: Profile,
        meta: {
            layout: "AppLayout"
        }
    }
];

const router = createRouter({
    history: createWebHistory(), routes,
});

export default router;