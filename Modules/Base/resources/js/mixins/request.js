import instance from "../common/axios";

export default {
    methods: {
        /**
         * @author khalid
         * @param route
         * @param params
         * @returns {Promise<unknown>}
         *
         */
        request(route, params = {}) {
            let self = this
            let request = this.fullRequest(route, params, {});
            this.blockPage();
            return new Promise((resolve, reject) => {
                instance(request).then(
                    (response) => {
                        console.log('response..', response)
                        // self.popSwalToast('success',response.data.message)
                        if (response.data)
                            resolve(response.data)
                        else
                            reject(response.statusText + ' ' + response.status)
                    },
                    (error) => {
                        console.log('error..', error)
                        // self.popSwalToast('error',error.data.message)
                        // reject(error.statusText + ' ' + error.status)
                        reject(error.data)
                    }).catch(
                    error => {
                        reject(error.data)
                    }
                ).finally(
                    response => {
                        this.unBlockPage();
                        resolve(response)
                    }
                );
            })
        },

        /**
         * @author khalid
         * @param route
         * @param params
         * @returns {{method: string, url: *}}
         * prepare body request
         */
        fullRequest(route, params) {
            let requestBody = {
                method: route.method.toLowerCase(),
                url: route.url
            }
            if (route.method.toLowerCase() !== 'get') {
                requestBody = {
                    ...requestBody,
                    data: params
                }
            }
            return requestBody;
        }
    }
}
