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
    },
    methods: {
        /**
         * show the picker of colors if user click on
         * the readonly input
         * @author Amr
         */
        click() {
            this.$refs[this.__field].click();
        }
    }
}