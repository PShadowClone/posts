<template>
    <ValidationProvider :rules="__rules" :name="__field" v-slot="{ errors }">
        <b-form-checkbox-group v-model="model$" stacked>
            <b-form-checkbox v-for="(option , index) in __options" :value="option"
                             :key="`form-group-checkbox-${__field}-${index}`"

            >{{option.label}}
            </b-form-checkbox>
        </b-form-checkbox-group>
        <v-error :errors="errors"/>
    </ValidationProvider>
</template>
<script>
    import Base from '@/mixins/Builder/CheckBox.js'

    export default {
        mixins: [Base]
    }
</script>