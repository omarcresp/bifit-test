import { RouteConfig } from 'vue-router';
import HomeComponent from '../components/home/home.vue';

export const routes: RouteConfig[] = [
    { path: '/', component: HomeComponent, name: 'home' },
    { path: '', component: () => import(/* webpackPrefetch: true, webpackChunkName: "class" */ '../components/class/index.vue') , children: [
        { path: '/signup', component: () => import(/* webpackChunkName: "class" */ '../components/class/auth/signup.vue'), name: 'signup' },
        { path: '/login', component: () => import(/* webpackChunkName: "class" */ '../components/class/auth/login.vue'), name: 'login' },
        { path: '/reserve', component: () => import(/* webpackChunkName: "class" */ '../components/class/day.vue'), name: 'reserve' },
        { path: '/class', component: () => import(/* webpackChunkName: "class" */ '../components/class/class.vue'), name: 'class' },
        { path: '/finish', component: () => import(/* webpackChunkName: "class" */ '../components/class/finish.vue'), name: 'finish' },
    ]},
];
