import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: () => import('./components/shared/Home') },
        { path: '/signin', component: () => import('./components/auth/Signin')},
        { path: '/signup', component: () => import('./components/auth/Signup')},
        { path: '/create', component: () => import('./components/trip/Create')},
        { path: '/details', component: () => import('./components/trip/Details')},
        { path: '/edit', component: () => import('./components/trip/Edit')},



        // {
        //     path: '*', component: NotFound
        // }
    ]
});