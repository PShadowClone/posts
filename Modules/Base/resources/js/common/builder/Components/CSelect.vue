<template>
    <ValidationProvider :rules="__rules" :name="__field" v-slot="{ errors }">
        <div id="app">
            <tree-select v-model="model$" :multiple="isMultiple" :options="__options" value-format='object'/>
        </div>
        <v-error :errors="errors"/>
    </ValidationProvider>
</template>
<script>
    import TreeSelect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import Base from '@/mixins/Builder/Select.js'


    export default {
        components: {TreeSelect},
        mixins: [Base]
    }
</script>