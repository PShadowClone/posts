<template>
    <ValidationProvider :rules="__rules" :name="__field" v-slot="{ errors }">
        <b-form-group>
            <b-form-radio v-model="model$" v-for="(option , index) in __options" :value="option"
                          :key="`form-group-radio-${index}`" :name="`form-radio-${component$}`">{{option.label}}
            </b-form-radio>
        </b-form-group>
        <v-error :errors="errors"/>
    </ValidationProvider>
</template>
<script>
    import Base from '@/mixins/Builder/Radio.js'

    export default {
        mixins: [Base]
    }
</script>