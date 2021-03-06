import Vue from 'vue'

import './plugins'
import './components'

import { sync } from 'vuex-router-sync'

import App from './App'
import store from './store'
import router from './router'

import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

sync(store, router);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

