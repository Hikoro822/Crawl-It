import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/Home.vue'; 
import LearnMore from '@/pages/LearnMore.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/more', component: LearnMore},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;