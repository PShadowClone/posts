<template>
    <div>
        <component v-if="is_component" :is="column.field" :columns="columns" :row="row"></component>
        <span v-else>
           {{row[column.field]}}
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            columns: {
                type: Object,
                required: true
            },
        },
        data(){
          return {
          }
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
        ,
        computed:{
            row(){
                return this.columns.formattedRow
            },
            column(){
                return this.columns.column
            },
            /**
             * @author khalid
             * @returns {boolean}
             * check if components include field to render a field component
             */
            is_component(){
                return this.getColumnComponents().includes(this.column.field)
            }
        }
    }
</script>

<style scoped>

</style>
