<template>
    <div>
        <v-filter v-if="filters" :filters="filters"></v-filter>
        <b-col md="12 mb-30">
            <vue-good-table
                    :rtl="direction"
                    :columns="columns"
                    :rows="rows"
                    styleClass="table table-hover table-bordered">
                <v-table-row slot="table-row" slot-scope="props" :columns="props"
                             :actions="actions">
                </v-table-row>
            </vue-good-table>
        </b-col>
        <v-paginator :pagination="paginator">
        </v-paginator>
    </div>
</template>

<script>
    import VPaginator from "./VPaginator";
    import VFilter from "./Filters/VFilter";
    import VTableRow from "./VTableRow";

    export default {
        props: {
            config: {
                type: Object,
                required: true
            }
        },
        components: {
            VPaginator,
            VFilter,
            VTableRow,
        },
        data() {
            return {
                paginator: {},
                rows: [],
                param: {},
            }
        },
        /**
         * @author khalid
         *
         */
        provide() {
            const paginate = {}
            Object.defineProperty(paginate, 'getAttributes', {
                enumerable: true,
                get: () => this.paginator,
            })

            const _actions = {}
            Object.defineProperty(_actions, 'getActions', {
                enumerable: true,
                get: () => this.config.actions,
            })

            return {paginate, _actions}
        },
        computed: {
            columns() {
                return this.config.columns ?? null
            },
            actions() {
                return this.config.actions ?? null
            },
            filters() {
                return this.config.filters ?? null
            },
            direction() {
                return false
            }
        },
        methods: {
            /**
             * @author khalid
             * get rows
             */
            fetch() {
                let self = this
                let endPoint = this.config.endpoint;
                this.request(this.route(endPoint.route, self._prepareParams(endPoint), self.param))
                    .then(
                        (response) => {
                            self.rows = response.payload.data
                            self.paginator = response.payload.paginator
                        }
                    ).catch(
                    (error) => {
                    }
                )

            },

            async getQueries() {
                return this.$route.query
            },

            /**
             * @author khalid
             * @param endPoint
             * @returns {*}
             * prepare route params
             */
            _prepareParams(endPoint) {
                if (endPoint.hasOwnProperty('params'))
                    return this.prepareParams(endPoint.params)
                return {}
            }
        },
        created() {
            /**
             * @author khalid
             * prepare url query then get rows
             */
            let self = this
            this.getQueries().then(result => {
                if (!result.page) {
                    self.param = Object.assign({}, {...result, page: 1})
                    self.$router.push({query: {...result, page: 1}})
                } else {
                    self.param = Object.assign({}, {...result})
                    self.fetch()
                }
            })
        },
        mounted() {
            let self = this
            this.$root.$on('reload-table', function (event) {
                self.fetch();
            })
        },
        watch: {
            /**
             * @author khalid
             * @param page
             * make request when $route query change
             */
            '$route.query': function (page) {
                let self = this
                this.getQueries().then(result => {
                    if (!result.page) {
                        self.$router.push({query: {...result, page: 1}})
                    }
                    self.param = Object.assign({}, {...result})
                    self.fetch()
                })
            }
        }

    }
</script>

<style scoped>
</style>
