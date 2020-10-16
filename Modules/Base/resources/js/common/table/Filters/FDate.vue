<template>
    <b-form-group :label="title">
        <b-form-input type="date" :id="`datepicker-${filter.slug}`"
                      v-model="date"
                      placeholder="please_select" class="mb-2" locale="ar"></b-form-input>
    </b-form-group>
</template>

<script>
    export default {
        props: {
            filter: {
                type: Object,
                required: true
            },
        },
        data(){
          return {
              date: null
          }
        },
        watch:{
            /**
             * @author khalid
             * @param val
             * update route query
             */
            date(val){
                if (!val) {
                    this.dropQuery(this.filter.slug)
                    return
                }
                this.pushQuery(this.filter.slug, val)
            }
        },
        methods:{
        },
        computed:{
            title(){
                return this.filter.hasOwnProperty('title') ? this.$t(this.filter.title) : ''
            }
        }
    }
</script>

<style scoped>

</style>
