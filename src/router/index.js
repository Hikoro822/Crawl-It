import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/HomePage.vue';
import LearnMore from '@/pages/InfoPage.vue';
import Auth from "@/pages/AuthPage.vue";
import Tasks from "@/pages/TasksPage.vue";
import Courses from "@/pages/CoursesPage.vue";
import Agreement from "@/pages/AgreementPage.vue";
import Privacy from "@/pages/PrivacyPage.vue";
import Profile from "@/pages/ProfilePage.vue";
import ForgotPage from "@/pages/ForgotPage.vue";
import ResetPage from "@/pages/ResetPage.vue";

const routes = [
    {
        path: '/home', component: Home,
        meta: {
            layout: "LandingLayout"
        }
    },
    {
        path: '/more', component: LearnMore,
        meta: {
            layout: "LandingLayout"
        }
    },
    {
        path: '/agreement', component: Agreement,
        meta: {
            layout: "LandingLayout"
        }
    },
    {
        path: '/privacy', component: Privacy,
        meta: {
            layout: "LandingLayout"
        }
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
    },
    {
        path: '/profile', component: Profile,
        meta: {
            layout: "AppLayout"
        }
    },
    {
        path: '/auth', component: Auth,
        meta: {
            layout: "BaseLayout"
        }
    },
    {
        path: '/forgot', component: ForgotPage,
        meta: {
            layout: "BaseLayout"
        }
    },
    {
        path: '/reset', component: ResetPage,
        meta: {
            layout: "BaseLayout"
        }
    }
];

const router = createRouter({
    history: createWebHistory(), routes,
});

export default router;