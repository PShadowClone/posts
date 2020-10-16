export default {
    methods: {
        /**
         * listen to attributes changes.
         * Append any coming values within form$
         *
         * @param model
         * @param newValue
         * @param extra
         * @private
         * @author Amr
         */
        __listenFormBuilder(model, newValue, extra) {
            console.log('form-attributes', this.form$, model, newValue)
            this.set(this.form$, model, newValue);
        },
        /**
         * listen to relation's query
         *
         * @param service
         * @param relationQuery
         * @return {*}
         * @private
         * @author Amr
         */
        __appendQuery(service, relationQuery) {
            let query = service.params;
            if (!query)
                query = {}
            query = {
                ...query,
                ...relationQuery
            }
            this.set(service, 'params', query)
            return service;

        },
        /**
         * listen to relations' of fields
         * @param model
         * @param query
         * @private
         * @author Amr
         */
        __listenFormRelations(model, query) {
            let field = this.__find(model);
            this.__appendQuery(field.service, query);
        },
        /**
         * find the field among the passed fields
         *
         * @param field
         * @return {*}
         * @private
         * @author Amr
         */
        __find(field) {
            return this.fields.find((el) => {
                return el.field === field;
            })
        },
        /**
         *listen ot form builder and their relations
         *
         * @private
         * @author Amr
         */
        __listeners() {
            FormBuilder.$on('form-builder', this.__listenFormBuilder)
            FormRelations.$on('form-relations', this.__listenFormRelations)
        }
    }
}