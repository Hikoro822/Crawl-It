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
import {authService} from "@/services/auth.js";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routes = [
    {
        path: '/', component: Home,
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
            layout: "AppLayout",
            requiresAuth: true
        }
    },
    {
        path: '/courses', component: Courses,
        meta: {
            layout: "AppLayout",
            requiresAuth: true
        }
    },
    {
        path: '/profile', component: Profile,
        meta: {
            layout: "AppLayout",
            requiresAuth: true
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
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage,
        meta: {
            layout: "BaseLayout"
        }
    }
];

const router = createRouter({
    history: createWebHistory(), routes,
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!authService.isAuthenticated()) {
            next({
                path: '/auth',
                query: {redirect: to.fullPath}
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;