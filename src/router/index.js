import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
    },
    {
        path: '/about1',
        name: 'About1',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about1.vue'),
    },
    {
        path: '/about2',
        name: 'About2',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about2.vue'),
    },
    {
        path: '/about3',
        name: 'About3',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about3.vue'),
    },
    {
        path: '/sobre',
        name: 'Sobre',
        component: () => import(/* webpackChunkName: "about" */ '../views/sobre/index.vue'),
    },
    {
        path: '/education',
        name: 'Education',
        component: () => import(/* webpackChunkName: "about" */ '../views/education/index.vue'),
    },
    {
        path: '/education1',
        name: 'Education1',
        component: () => import(/* webpackChunkName: "about" */ '../views/education/education1.vue'),
    },
    {
        path: '/education2',
        name: 'Education2',
        component: () => import(/* webpackChunkName: "about" */ '../views/education/education2.vue'),
    },
    {
        path: '/education3',
        name: 'Education3',
        component: () => import(/* webpackChunkName: "about" */ '../views/education/education3.vue'),
    },
    {
        path: '/education4',
        name: 'Education4',
        component: () => import(/* webpackChunkName: "about" */ '../views/education/education4.vue'),
    },
    {
        path: '/partner',
        name: 'partner',
        component: () => import(/* webpackChunkName: "about" */ '../views/partner/index.vue'),
    },
    {
        path: '/portal',
        name: 'portal',
        component: () => import(/* webpackChunkName: "about" */ '../views/portal/index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
