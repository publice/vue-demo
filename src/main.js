/**
 * Created by Administrator on 2017/3/7.
 */
//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import App from './views/app.vue'
import iView from 'iView'
import router from './routes.js'

import 'iview/dist/styles/iview.css'
import './assets/styles/base.css'

Vue.config.debug = true;//开启错误提示

Vue.use(iView);

iView.LoadingBar.config({
    height: 5
});

iView.Notice.config({
    duration: 8
});

iView.Message.config({
    duration: 5
});

var vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

