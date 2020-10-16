export default {
    data(){
        return{

        }
    },
    methods:{
        /**
         * @author khalid
         * @param param
         * drop query param from url
         */
        dropQuery(param){
            let query = Object.assign({}, this.$route.query);
            if(!query.hasOwnProperty(param))
                return
            delete query[param];
            this.$router.replace({ query });
        },

        /**
         * @author khalid
         * @param param
         * @param val
         * push query param to url
         */
        pushQuery(param, val){
            this.$router
                .push({
                    query: {
                        ...this.$route.query,
                        [param]: encodeURIComponent(val)
                    }
                }).catch(()=>{})
        }
    }
}
