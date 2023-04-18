import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Settings from '../pages/Settings.vue';

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/settings',
    component: Settings,
  },
  {
    path: '/',
    redirect: '/settings',
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
