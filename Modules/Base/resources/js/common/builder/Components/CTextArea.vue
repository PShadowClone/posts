<template>
    <ValidationProvider :rules="__rules" :name="__field" v-slot="{ errors }">
        <editor
                :api-key="apiKey$"
                initial-value=""
                v-model="model$"
                :init="options$"
        />
        <v-error :errors="errors"/>
    </ValidationProvider>
</template>
<script>
    import Base from '@/mixins/Builder/TextArea.js'

    export default {
        mixins: [Base]
    }
</script>