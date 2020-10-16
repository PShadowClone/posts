
export default {
    data(){
        return{}
    },
    methods:{
        getGlobalActions(slug, refs){
            switch (slug) {
                case 'edit':
                    return {
                        component: 'bv-icon',
                        refs: refs,
                        attributes: {
                            title: 'star',
                            icon: "pencil-square",
                            'font-scale': "1",
                            variant: "success"
                        },
                        callback: (event) => {
                            console.log('callback 1 edit', refs())
                            refs(event).callback()
                        }
                    }
                case 'delete':
                    return {
                        component: 'bv-icon',
                        refs: refs,
                        attributes: {
                            title: 'star',
                            icon: "x-circle",
                            'font-scale': "1",
                            variant: "danger"
                        },
                        callback: (event) => {
                            console.log('callback 1 delete', refs())
                            refs().callback(event)
                        }
                    }
                case 'info':
                    return {
                        component: 'bv-icon',
                        refs: refs,
                        attributes: {
                            title: 'info',
                            icon: "arrow-clockwise",
                            'font-scale': "1.4",
                            variant: "secondary",
                            animation: "spin"
                        },
                        callback: (event) => {
                            console.log('callback 1 info')
                        }
                    }
            }
        },

        getStatusCallback(event){
            let self = this
            return new Promise((resolve, reject) => {
                this.popSwalConfirm('Are you sure ?', 'are you sure to change status ?')
                    .then(() => {
                        let params = []
                        event.column.endpoint.params.map((val) => {
                            params.push({[val]: event.row[val]})
                        })
                        self.request(self.route('users.status', ...params), event.val)
                            .then(
                                (response) => {
                                    self.popSwalToast('success',response.message)
                                    resolve(response)
                                }
                            ).catch(
                            (error) => {
                                self.popSwalToast('error',error.message)
                                reject(error)
                            }
                        )
                    })

            });

        }
    },
    computed:{

    },
    watch:{

    }
}
