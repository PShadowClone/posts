
    let props = {
        filter: {
            type: Object,
            required: true
        }
    }

    let data = () => {
            return {
                value: null,
                options: []
            }
    }

    let watch = {
        /**
         * @author khalid
         * @param val
         * update or delete route query
         */
        value(val) {
            if (!val) {
                this.dropQuery(this.filter.slug)
                return
            }
            this.pushQuery(this.filter.slug, val)
        },
    }

    let methods = {

        checkParams(endPoint) {
            return endPoint.params ?? {}
        },

        /**
         * @author khalid
         * @param endPoint
         * @returns {{}}
         * check if endpoint has query property then prepare query if it exists
         */
        checkQuery(endPoint) {
            if (endPoint.hasOwnProperty('query'))
                return this.prepareParams(endPoint.query)
            return {}
        },

        /**
         * @author khalid
         * prepare endpoint options
         */
        prepareEndPointOptions(endPoint = {}) {
            let self = this
            return new Promise(resolve => {
                resolve(
                    this.request(this.route(endPoint.route, self.checkParams(endPoint), self.checkQuery(endPoint)))
                        .then(
                            (response) => {
                                self.options = self.options.concat(response.payload)
                            }
                        ).catch(
                        (error) => {
                        }
                    )
                );

            });
        },

        /**
         * @author khalid
         * push nullable option
         */
        prepareNullableOption(nullable = false) {
            if (!nullable)
                return
            let _nullable = {id: null, label: ''}
            this.options = this.options.concat(_nullable)
        },

        prepareDefaultOptions(options = []) {
            this.options = this.options.concat(options)
        },

        /**
         * @author khalid
         * return filter type method
         */
        filterTypes() {
            return {
                endPoint: 'prepareEndPointOptions',
                nullable: 'prepareNullableOption',
                default: 'prepareDefaultOptions'
            }
        },

        /**
         * @author khalid
         * prepare options
         */
        async prepareOptions() {
            let options = this.filter.options
            let self = this
            for (var key in options) {
                await self[self.filterTypes()[key]](options[key])
            }
        }
    }

    let computed = {
        attributes(){
            return this.filter.attributes ?? {}
        },
        title(){
            return this.filter.hasOwnProperty('title') ? this.$t(this.filter.title) : ''
        }
    }

    let created = function () {
        this.prepareOptions()
    }


    export {props, data, watch, methods, computed, created}
