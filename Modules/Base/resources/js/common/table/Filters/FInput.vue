<template>
    <b-form-group :id="`input-${filter.slug}`" :label="title" :label-for="filter.slug">
        <b-form-input
            :id="filter.slug"
            :placeholder="placeholder"
            v-model="value"
        ></b-form-input>
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
        data() {
            return {
                timeout: null,
                value: null
            }
        },
        watch: {
            /**
             * @author khalid
             * @param val
             * update or delete route query
             */
            value(val) {

                clearTimeout(this.timeout);

                let self = this;
                this.timeout = setTimeout(function () {
                    if (!val) {
                        self.dropQuery(self.filter.slug)
                        return
                    }
                    self.pushQuery(self.filter.slug, val)
                }, 1000);
            }
        },
        methods: {},
        created() {
        },
        mounted() {
        },
        computed: {
            placeholder() {
                return this.filter.placeholder ?? null
            },
            title(){
                return this.filter.hasOwnProperty('title') ? this.$t(this.filter.title) : ''
            }
        }
    }
</script>

<style scoped>

</style>
