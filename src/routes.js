/**
 * Created by Rock on 2019/7/1.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

var router = new VueRouter({
    mode: 'history',
    routes: [

    ]
});

router.beforeEach((to, from, next) => {

});

router.afterEach((to, from, next) => {

});

export default router;