<template>
    <ValidationProvider :rules="__rules" :name="__field" v-slot="{ errors }">
        <!-- START CALLING THE MEANT FIELD -->
        <component :is="__name" v-bind="__extra"
                   :class="classes$"
                   v-model="model$"
                   @export="__export"
                   :field="component$"
                   :values='values'/>
        <!-- END CALLING THE MEANT FIELD -->
        <v-error :errors="errors"/>
    </ValidationProvider>
</template>
<script>
    import Base from '@/mixins/Builder/Field'
    export default {
        mixins: [Base]
    }
</script>