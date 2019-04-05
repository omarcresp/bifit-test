import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
    { path: '/', component: () => import('../components/home/home.vue'), name: 'home' },
    { path: '/login', component: () => import('../components/class/auth/login.vue'), name: 'login' },
    { path: '/signup', component: () => import('../components/class/auth/signup.vue'), name: 'signup' },
];
