import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/shared/Home'
import globalStore from '@/store/global';


Vue.use(VueRouter);

function authGuard(to, from, next) {
    if (!globalStore.isLogged) {
        next('/signin');
    } else {
        next();
    }
}

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/signin',
            component: () => import( /* webpackChunkName: "Signin" */ './components/auth/Signin')
        },
        {
            path: '/signup',
            component: () => import( /* webpackChunkName: "Signup" */ './components/auth/Signup')
        },
        {
            path: '/create',
            component: () => import( /* webpackChunkName: "Create" */ './components/trip/Create'),
            beforeEnter: authGuard
        },
        {
            path: '/edit/:id',
            name: 'edit',
            props: true,
            component: () => import( /* webpackChunkName: "Create" */ './components/trip/Edit'),
            beforeEnter: authGuard
        },
        {
            path: '/list',
            props: true,
            component: () => import( /* webpackChunkName: "TripList" */ './components/trip/TripList'),
            beforeEnter: authGuard,
            children: [{
                    path: 'details/:id',
                    component: () => import( /* webpackChunkName: "Details" */ './components/trip/Details'),
                    props: true,
                    beforeEnter: authGuard
                }

            ]
        },
        {
            path: '*',
            component: () => import( /* webpackChunkName: "NotFound" */ './components/shared/NotFound')
        },
    ]
});