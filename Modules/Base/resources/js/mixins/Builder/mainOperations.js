export default {
    methods: {
        /**
         * empty method to be overridden later
         * @author Amr
         */
        beforeSubmit() {
            // @toDo you can override this function before submit request
        },
        /**
         * cancel save or update operation
         * @author Amr
         */
        cancel() {
            this.__redirectLink();
        },
        /**
         * submit form
         * @author Amr
         */
        submit() {
            this.beforeSubmit();
            this.__save();
        },
        /**
         * submit form and stay in the page
         * @author Amr
         */
        addMore() {
            this.beforeSubmit();
            this.__save(false);
        },
    }
}