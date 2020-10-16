import Settings from '@/utils/builder'

export default {
    name: 'Base-Mixin',
    props: {
        /**
         * component's object
         * @author Amr
         */
        component: {
            require: true,
            default: function () {
                return {};
            }
        },
        /**
         * builder's values
         * @author Amr
         */
        values: {
            require: false,
            default: function () {
                return {};
            }
        }
    },
    data() {
        return {
            /**
             * static classes
             * @author Amr
             */
            classes: Settings.classes,
            /**
             * field's model
             * @author Amr
             */
            model$: null,
            /**
             * field should not has the default classes
             * 'cause it affects on its style
             * @author Amr
             */
            filedHasDefaultClass: Settings.filedHasDefaultClass //['b-form-input'],//['c-select', 'c-check-box', 'c-radio', 'c-date-picker', 'c-text-area']
        }
    },
    computed: {
        classes$() {
            if (this.filedHasDefaultClass.includes(this.component$.component))
                return this.classes;
            return [];
        },
        /**
         * get the passed component
         *
         * @return {default.props.component|{require}}
         * @author Amr
         */
        component$() {
            return this.component;
        },
        /**
         * predicate component's name by using the names
         * of bootstrap components
         *
         * @return {string}
         * @private
         * @author Amr
         */
        __predicatedName() {
            return Settings.customComponents.includes(this.component$.component) ? 'c-' + this.component$.component : 'b-form-' + this.component$.component;
        },
        /**
         * return the real name of component after checking the
         * existence of the predicated name
         * @return {*}
         * @private
         * @author Amr
         */
        __name() {
            let name = this.capitalize(this.__predicatedName, ' ')
            return this.isValidComponent(name) ? this.__predicatedName : this.component$.component;
        },
        /**
         * returns the extra attributes to be binded with field
         * @return {*}
         * @private
         * @author Amr
         */
        __extra() {
            return this.component$.hasOwnProperty('extra') ? this.component$.extra : {}
        },
        /**
         * return the field of component
         *
         * @return {*}
         * @private
         * @author Amr
         */
        __field() {
            return this.component$.field;
        },
        __hasRules() {
            return this.component$.hasOwnProperty('rules')
        },
        __rules() {
            if (!this.__hasRules)
                return {};
            return this.component$.rules;
        },
    },
    methods: {
        /**
         * publish field's data to the component that
         * called builder
         *
         * @param newVal
         * @param oldVal
         * @author Amr
         */
        publish(newVal, oldVal) {
            FormBuilder.$emit('form-builder', this.__field, newVal)
            FormBuilder.$emit(this.__field, newVal)
        },
        /**
         * this function returns the extra
         * data that should be pushed with another through Bus
         * @return {{}}
         */
        extra() {
            if (!this.model$)
                return undefined;
            return {};
        },
        /**
         * listen to the changes of values and
         * get the suitable value
         * @param newVal
         * @param oldVal
         * @author Amr
         */
        valuesWatcher(newVal, oldVal) {
            try {
                this.model$ = newVal[this.__field]
            } catch (e) {
            }
        },
        /**
         * gets the model new value
         * @author Amr
         */
        modelNewValue(newVal, oldVal) {

        },
        /**
         * publish model's value via FormBuilder Bus
         * @param newVal
         * @param oldVal
         * @author Amr
         */
        model$Watcher(newVal, oldVal) {
        },
        /**
         * this function just for the new component
         * which maybe added later
         *
         * @param data
         * @private
         * @author Amr
         */
        __export(data) {
            this.publish(data, undefined);
        },
    },
    watch: {
        deep: true,
        immediate: true,
        /**
         * watch model$'s changes
         * @author Amr
         */
        model$: 'model$Watcher',
        /**
         * deep watcher to values attribute's changes
         * @author Amr
         */
        values: {
            deep: true,
            immediate: true,
            handler: 'valuesWatcher'
        }
    }
}