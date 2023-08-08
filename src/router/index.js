import {createRouter, createWebHistory } from 'vue-router';

import Home     from "../views/Home.vue"
import About    from "../views/About.vue"
import Contact  from "../views/Contact.vue"
import Service  from "../views/Service.vue"
import Login  from "../views/Login.vue"
// import Register  from "../views/Register.vue"
import  App  from '../App.vue';



const routes = [
    { path: '/home',        name: 'home',       component: Home },
    { path: '/about',       name: 'about',      component: About },
    { path: '/contact',     name: 'contact',    component: Contact },
    { path: '/service',     name: 'service',    component: Service },
    { path: '/login',       name: 'login',      component: Login },
    // { path: '/register',    name: 'register',   component: Register },
    { path: '/',    name: 'register',   component: App },


];
const router = createRouter({
    history:createWebHistory(),
    routes,
})


export default router;