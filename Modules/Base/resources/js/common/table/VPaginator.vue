<template>
    <b-col class="md-3">
        <b-pagination
            v-model="pagination.current_page"
            :total-rows="pagination.total"
            :per-page="pagination.per_page"
            @change="onChange"
            pills
            align="right">
        </b-pagination>
    </b-col>

</template>
<script>
    export default {
        props: {
            pagination:{
                type: Object,
                required: true
            }
        },
        watch: {
        },
        methods:{
            /**
             * @author khalid
             * @param val
             * update route query with new page
             */
            onChange(val){
                let self = this
                this.$router
                    .push({
                        query: {
                            ...self.$route.query,
                            page: val
                        }
                    })
                    .catch(() => {
                    });
            }
        }
    }
</script>
<style>

</style>
