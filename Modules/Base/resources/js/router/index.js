import vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

/**
 * register router into vue instance
 * @author Amr
 */
vue.use(Router);
/**
 * init vue router
 * @type {VueRouter}
 * @author Amr
 */
const router = new Router({
    mode: 'history',
    routes,
    scrollBehavior: (to, from, savedPosition)  => {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return {x: 0, y: 0}
        }
    }
});
/**
 * public router instance
 * @author Amr
 */
export default router;
