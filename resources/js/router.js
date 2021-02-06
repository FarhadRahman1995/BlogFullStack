import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage'
import newRoutePage from './components/pages/newRoutePage'


///project pages...
import home from './components/pages/home'
import tags from './components/pages/tags'


const routes = [

    ///Project routs....
    {
        path: '/',
        component: home
    },
    {
        path: '/tags',
        component: tags
    },



























    ///Basic tutorial routes...
    {
        path: '/my-new-vue-route',
        component: firstPage
    },
    {
        path: '/newRoutePage',
        component: newRoutePage
    }
]

export default new Router({
    mode:'history',
    routes
})