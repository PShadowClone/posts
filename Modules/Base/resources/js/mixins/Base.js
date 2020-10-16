export default {
    methods: {
        /**
         * set the attribute of object with keeping the reactivity
         * of that object
         *
         * this function serves both types Array and Object
         * @param object
         * @param name or index
         * @param value
         * @author Amr
         */
        set(object, name, value) {
            this.$set(object, name, value)
        },
        /**
         * delete attribute from object
         *
         * this function serves both types Array and Object
         *
         * @param object
         * @param name
         * @author Amr
         */
        delete(object, name) {
            this.$delete(object, name)
        },
        /**
         * check if arg is array
         * @param arg
         * @return {((arg: any) => arg is Array<any>) | arg is Array<any>}
         * @author Amr
         */
        isArray(arg) {
            return Array.isArray && Array.isArray(arg);
        },
        /**
         * check if arg is object
         * @param arg
         * @return {boolean|*}
         * @author Amr
         */
        isObject(arg) {
            return typeof arg === 'object' && !this.isArray(arg)
        },
        /**
         * check if arg's elements are object
         * @param arg
         * @return {boolean|*}
         * @author Amr
         */
        isArrayOfObject(arg) {
            return arg.every(el => this.isObject(el))
        },
        /**
         * check if arg var has int value
         * @param arg
         * @return {boolean|*}
         * @author Amr
         */
        isInt(arg) {
            return parseInt(arg, 10)
        },

        /**
         * upper case first letter
         * @param word
         * @return {string|*}
         * @author Amr
         */
        ucfirst(word) {
            return word.charAt(0).toUpperCase() + word.substring(1);
        },

        /**
         * check if the passed value
         * is an empty object
         * @param word
         * @return {string|*}
         * @author Amr
         */
        isEmptyObject(arg) {
            return !arg || Object.keys(arg) == 0
        },

    }
}