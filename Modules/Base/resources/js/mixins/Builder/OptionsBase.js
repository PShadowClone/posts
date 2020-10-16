import Base from './base'

export default {

    name: 'Options-Name',
    /**
     * the used mixins
     * @author Amr
     */
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
    data() {
        return {
            defaultParsable: {
                id: 'id',
                label: 'name'
            },
            options$$: [],
            serviceOptions$$: [],
            staticOptions$$: []
        };
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
         * check if the select is multiple
         * @return {*}
         * @author Amr
         */
        isMultiple() {
            return this.component$.multiple;
        },
        /**
         * returns the parsable object
         * @return {defaultParsable|{id, label}|*}
         * @private
         * @author Amr
         */
        __parsable() {
            let hasParsable = this.component$.hasOwnProperty('parsable')
            if (hasParsable)
                return this.component$.parsable
            return this.defaultParsable;

        },
        /**
         * component's options
         * @author Amr
         */
        __options: {
            get() {
                return this.parse([].concat(this.__serviceOptions, this.__staticOptions))
            },
            set(options) {
                this.options$$ = options;
            }
        },
        /**
         * component's options
         * @author Amr
         */
        __serviceOptions: {
            get() {
                return this.serviceOptions$$;
            },
            set(options) {
                this.serviceOptions$$ = options;
            }
        },
        /**
         * component's options
         * @author Amr
         */
        __staticOptions: {
            get() {
                return this.staticOptions$$;
            },
            set(options) {
                this.staticOptions$$ = options;
            }
        },
        filter() {
            let filter = this.component$.filter;
            if (filter && filter instanceof Function)
                return filter;
            throw new Error('Not filter passed')
        },
        __hasRelations() {
            return this.component$.hasOwnProperty('relations');
        },
        __relations() {
            if (!this.__hasRelations)
                throw new Error('Has no relation');
            let relations = [];
            let isObject = this.isObject(this.component$.relations);
            if (isObject) {
                relations.push(this.component$.relations);
            } else
                relations.concat(this.component$.relations)
            return this.component$.relations;

        }
    },
    methods: {
        prepareRelationParams(relation, value) {
            let bindedAttributes = relation.bind;
            let field = relation.field;
            if (!value)
                return;
            let attr = {}
            bindedAttributes.forEach((key) => {
                let keyValue = value[key];
                if (keyValue)
                    attr[`${field}${this.ucfirst(key)}`] = keyValue
            })
            return attr;

        },
        __pushRelationChanges(values) {
            FormRelations.$emit('form-relations', this.__field, values)
            FormRelations.$emit(this.__field, values)
        },
        listenToRelations() {
            try {
                let relations = this.__relations;
                relations.forEach((relation) => {
                    FormBuilder.$on(relation.field, (value) => {
                        if (!value)
                            return;
                        let queries = this.prepareRelationParams(relation, value)
                        this.__pushRelationChanges(queries)
                    })
                })
            } catch (e) {
                return;
            }

        },
        /**
         * walk through the objects
         *
         * @param object
         * @return {{id: *, label: *}}
         * @author Amr
         */
        mapParsing(object) {
            return {
                id: object[this.__parsable.id],
                label: object[this.__parsable.label],
                ...object
            }
        },
        /**
         * parse object accordin' to the given
         * parsable object
         *
         * @param options
         * @return {*}
         * @author Amr
         */
        parse(options) {
            return options.map(this.mapParsing)
        },
        /**
         * prepare request's params
         *
         * @param params
         * @return {{select: boolean}|any}
         * @private
         * @author Amr
         */
        __getParams(params = {}) {
            let $params = {
                type: 'select'
            }
            if (params == undefined || params == null)
                return $params;
            return Object.assign($params, params)
        },
        /**
         * returns request's queries
         *
         * @param query
         * @return {*|{}}
         * @private
         * @author ¬Amr
         */
        __getQueries(query) {
            return query ?? {};
        },
        /**
         * prepare the request's instance
         * @param link
         * @return {*|Promise<unknown>}
         * @private
         * @author Amr
         */
        __optionRequest(link) {
            return this.request(link);
        },
        /**
         * prepare request's link
         *
         * @param service
         * @return {*}
         * @private
         * @author Amr
         */
        __prepareLink(service) {
            let params = this.__getParams(service.params)
            let queries = this.__getQueries(service.query)
            return this.route(service.route, queries, params)
        },
        /**
         * fetch data from the backend
         * @param service
         * @return {*|*|Promise<unknown>}
         * @author Amr
         */
        fetchOptions(service) {
            let link = this.__prepareLink(service);
            return this.__optionRequest(link);
        },
        /**
         * append new options to the options$$
         * global var
         * @param options
         * @private
         * @author Amr
         */
        __concatWithNewOptions(options) {
            try {
                options = options.filter(this.filter)
            } catch (e) {
            } finally {
                let $options = this.parse(options)
                this.__options = this.__options.concat($options)
            }
        },
        /**
         * track options attribute' changes
         * @param newVal
         * @param oldVal
         * @return {*}
         * @private
         * @author Amr
         */
        __optionsWatcher(newVal, oldVal) {
            this.__fetchOptions(newVal, (payload) => {
                this.__reAssignModel$();
            })


        },
        __reAssignModel$() {
        },
        __fetchService(newVal, handel = () => {
        }) {
            this.fetchOptions(newVal).then((result) => {
                this.__serviceOptions = result.payload
                handel(result);
            });
        },
        __fetchOptions(options, handler = () => {
        }) {
            if (!Array.isArray(options))
                return options;
            this.__staticOptions = options;
            handler(options);
        },
        /**
         * watch endpoint changes
         * @param newVal
         * @param oldVal
         * @private
         * @author Amr
         */
        __serviceWatcher(newVal, oldVal) {
            // console.log('__serviceWatcher-' + this.__field, newVal, oldVal)
            // if (JSON.stringify(newVal) === JSON.stringify(oldVal))
            //     return;
            if (!newVal)
                return;
            this.__fetchService(newVal, (payload) => {
                this.__reAssignModel$();
            })
        },
        __hasReAssigned(val) {
            return parseInt(val, 10) || !this.isArrayOfObject(val);
        },
        /**
         * publish model's value via FormBuilder Bus
         * @param newVal
         * @param oldVal
         * @author Amr
         */
        model$Watcher(newVal, oldVal) {
            if (newVal && this.__hasReAssigned(newVal) && this.__options.length)
                this.__reAssignModel$();
            this.publish(this.model$);
        },
    },

    watch: {
        'component$.service': {
            deep: true,
            immediate: true,
            handler: '__serviceWatcher'
        },
        'component$.options': {
            deep: true,
            immediate: true,
            handler: '__optionsWatcher'
        }
    },
    created() {
        this.listenToRelations();
    },


}