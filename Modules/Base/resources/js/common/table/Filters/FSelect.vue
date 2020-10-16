<template>
    <b-form-group :id="`input-${filter.slug}`" :label="title" :label-for="filter.slug">
        <treeselect
            :options="options"
            v-model="value"
            @change="onChange($event, filter.slug)"
            v-bind="attributes"
        />
    </b-form-group>
</template>

<script>
    import Treeselect from "@riophae/vue-treeselect";
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import {props,data,watch,methods,created,computed} from "./partials/select";

    export default {
        components: { Treeselect },
        props,
        data,
        watch,
        methods,
        computed,
        created
    }
</script>

<style scoped>

</style>
