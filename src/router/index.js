import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import LearnMore from '@/pages/LearnMore.vue';
import Auth from "@/pages/Auth.vue";
import Tasks from "@/pages/Tasks.vue";
import Courses from "@/pages/Courses.vue";
import Agreement from "@/pages/Agreement.vue";
import Privacy from "@/pages/Privacy.vue";
import Profile from "@/pages/Profile.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routes = [
    {
        path: '/', component: Home,
        meta: {
            layout: "Layout"
        }
    },
    {
        path: '/more', component: LearnMore,
        meta: {
            layout: "Layout"
        }
    },
    {
        path: '/auth', component: Auth,
        meta: {
            layout: "Layout"
        }
    },
    {
        path: '/tasks', component: Tasks,
        meta: {
            layout: "BaseLayout"
        }
    },
    {
        path: '/courses', component: Courses,
        meta: {
            layout: "BaseLayout"
        }
    },
    {
        path: '/profile', component: Profile,
        meta: {
            layout: "BaseLayout"
        }
    },
    {path: '/agreement', component: Agreement},
    {path: '/privacy', component: Privacy},

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage,
        meta: {
            layout: "BaseLayout"
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;