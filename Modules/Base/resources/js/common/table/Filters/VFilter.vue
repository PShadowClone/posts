<template>
    <b-container class="">
        <b-card-group deck class="mb-1">
            <b-card border-variant="secondary" header="" header-class="text-center">
                <b-row>
                    <b-col cols="3" v-for="(filter,index) in filters" :key="index">
                        <component :is="filter.type" :filter="filter"></component>
                    </b-col>
                </b-row>
            </b-card>
        </b-card-group>
    </b-container>
</template>

<script>
    import FDate from "./FDate";
    import FInput from "./FInput";
    import FSelect from "./FSelect";

    export default {
        props: {
            filters: {
                type: Array,
                required: true
            },
        },
        components:{
            FDate,
            FSelect,
            FInput
        },
        methods: {
            resetFilters(){
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
