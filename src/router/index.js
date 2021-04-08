import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/url/:siteUrl",
        name: "SubmitedUrl",

        component: () =>
            import ( /* webpackChunkName: "Url" */ "../pages/SubmitedUrl.vue")
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router