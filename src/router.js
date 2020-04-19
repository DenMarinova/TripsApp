import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/shared/Home'

Vue.use(VueRouter);

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
            component: () => import( /* webpackChunkName: "Create" */ './components/trip/Create')
        }, 
        {
            path: '/list',
            props:true,
            component: () => import( /* webpackChunkName: "TripList" */ './components/trip/TripList'),
            children: [
                {
                    path: 'details/:id',
                    component: () => import( /* webpackChunkName: "Details" */ './components/trip/Details'),
                    props: true
                }

            ]
        },
        {
            path: '*',
            component: () => import( /* webpackChunkName: "NotFound" */ './components/shared/NotFound')
        },
    ]
});