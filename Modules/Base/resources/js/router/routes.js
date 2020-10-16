import ModulesRoutes from '../structure/RegisterRoutes'
import index from '@/template/index'

let routes = [
    {
        path: '/admin',
        component: index,
        children: []
    },
];

/**
 * merge base with modules' routes
 *
 * @type {*[]}
 * @author Amr
 */
routes[0].children = routes[0].children.concat(ModulesRoutes)
/**
 * publish routes
 * @author Amr
 */
export default routes;
