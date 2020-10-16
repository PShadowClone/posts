/**
 * call bootstrap js file
 * @author Amr
 */
require('./bootstrap')
import Vue from 'vue';
import App from './App.vue'
import router from './router'
import i18n from './lang/i18n'
import store from './vuex'
import created from '@/app/created'


/**
 * initiate new vue instance
 * @author Amr
 */
window.$vue = new Vue({
    i18n,
    router,
    store,
    created,
    render: h => h(App)
}).$mount('#app');
