import Base from './base'
import ModelWatcher from './ModelWatcher'

export default {
    mixins: [Base, ModelWatcher],
    /**
     * field's component
     * @author Amr
     */
    props: {
        field: {
            required: true,
            default: () => {
                return {}
            }
        }
    },
    computed: {
        /**
         * get the passed component
         *
         * @return {default.props.component|{require}}
         * @author Amr
         */
        component$() {
            return this.field;
        },
        /**
         * get the passed component
         *
         * @return {default.props.component|{require}}
         * @author Amr
         */
        icon$() {
            return this.__extra.icon;
        },
    }
}