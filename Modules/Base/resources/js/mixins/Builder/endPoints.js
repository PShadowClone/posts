export default {
    data() {
        return {
            /**
             * endPint used to save new data
             * @author Amr
             */
            saveEndpoint: {},
            /**
             * endPint used to update resource
             * @author Amr
             */
            editEndpoint: {},
            /**
             * endPint used to fetch resource
             * @author Amr
             */
            findEndpoint: {},
            /**
             * id attribute of object
             * @author Amr
             */
            id: null
        }
    },
    computed: {
        /**
         * get the base name of CRUD
         * to predicate operations' urls
         *
         * @return {string}
         * @private
         * @author Amr
         */
        __baseName() {
            return this.name.toLowerCase();
        },
        /**
         * read id for route
         *
         * @return {string}
         * @private
         * @author Amr
         */
        __id() {
            return this.$route.params.id;
        },
        /**
         * this params passed with edit endPoint
         *
         * @return {{id: default.computed.__id}}
         * @author Amr
         */
        editParams() {
            return {
                id: this.__id
            }
        },
        /**
         * this params passed with fetch endPoint
         *
         * @return {{id: default.computed.__id}}
         * @author Amr
         */
        findParams() {
            return {
                id: this.__id
            }
        },
        /**
         * this params passed with store endPoint
         *
         * @return {{id: default.computed.__id}}
         * @author Amr
         */
        storeParams() {
            return {}
        },
        /**
         * returns the save endPoint
         * @return {default.data.saveEndpoint|{}|*}
         * @private
         * @author Amr
         */
        __saveEndPoint() {
            if (!this.isEmptyObject(this.saveEndpoint))
                return this.saveEndpoint;
            return this.route(this.__baseName + '.store');
        },
        /**
         * returns the edit endPoint
         * @return {default.data.editEndpoint|{}|*}
         * @private
         * @author Amr
         */
        __editEndPoint() {
            if (!this.isEmptyObject(this.editEndpoint))
                return this.editEndpoint;
            return this.route(this.__baseName + '.update', this.editParams);
        },
        /**
         * returns the fetch endPoint
         * @return {default.data.findEndpoint|{}|*}
         * @private
         * @author Amr
         */
        __findEndPoint() {
            if (!this.isEmptyObject(this.findEndpoint))
                return this.findEndpoint;
            return this.route(this.__baseName + '.find', this.findParams);
        },
        /**
         * determine save endPoint which may be edit or save accordin' to
         * id params in the router
         * @return {default.computed.__saveEndPoint|default.computed.__editEndPoint}
         * @author Amr
         */
        saveChosenEndpoint() {
            if (this.__id)
                return this.__editEndPoint
            return this.__saveEndPoint
        },
    },
    methods: {
        /**
         * prepare the request to backend
         *
         * @param route
         * @return {*|Promise<unknown>}
         * @private
         * @author Amr
         */
        __request(route) {
            return this.request(route, this.form$)
        },
        /**
         * save data or update it
         * @param justOnce
         * @private
         * @author Amr
         */
        __save(justOnce = true) {
            let link = this.saveChosenEndpoint;
            this.__request(link).then((payload) => {
                if (justOnce) {
                    this.__redirectLink();
                    return;
                }
                this.__redirectLink(this.creationLink());
                this.form$ = {}
                this.values = {}
            })
        },
        /**
         * fetch object accordin' to the router's id
         * @author Amr
         */
        fetchObject() {
            this.__request(this.__findEndPoint).then(({payload}) => {
                this.values = payload
            })
        },
        /**
         * watch id changes
         *
         * @param newVal
         * @param oldVal
         * @private
         * @author Amr
         */
        __idWatcher(newVal, oldVal) {
            if (!newVal)
                return;
            this.fetchObject();
        },
    },
    watch: {
        id: {
            handler: '__idWatcher'
        }
    },
}