// import {RouteRecordRaw} from "vue-router"

// import LoginPage from "../views/LoginView.vue";
// import HomePage from "../views/HomeView.vue"


// export const rol_routes: RouteRecordRaw[] = [
//     {
//         name: "LoginPage",
//         component: LoginPage,
//         path: "/",
//     },
//     {
//         name: "HomePage",
//         component: HomePage,
//         path: "/home"
//     }
// ];

import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

import { useAuthStore } from '../store/authorization';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
        meta: { requiresAuth: true }
    },
    {
        path : '/:catchAll(.*)',
        redirect:'/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
      next('/'); 
    } else {
      next(); 
    }
  });

export default router
