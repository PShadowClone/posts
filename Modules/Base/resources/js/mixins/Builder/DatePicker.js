import Base from './base'

export default {
    mixins: [Base],
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
         * publish model's value via FormBuilder Bus
         * @param newVal
         * @param oldVal
         * @author Amr
         */
        model$Watcher(newVal, oldVal) {
            this.publish(this.$moment(newVal).format('YYYY-MM-DD'), oldVal);
        },
    }
}