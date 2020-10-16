<template>
    <span>
        {{ (paginator.per_page * (paginator.current_page - 1)) + (columns.index + 1)}}
    </span>
</template>

<script>
    export default {
        inject: ['paginate'],
        props: ['columns','row'],
        computed:{
            paginator(){
                return this.paginate.getAttributes
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
