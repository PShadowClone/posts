<template>
    <ValidationProvider :rules="__rules" :name="__field" v-slot="{ errors }">
        <datepicker v-model="model$" input-class="form-control" format="yyyy-MM-dd"/>
        <v-error :errors="errors"/>
    </ValidationProvider>
</template>
<script>
    import Datepicker from 'vuejs-datepicker';
    import Base from '@/mixins/Builder/DatePicker.js'

    export default {
        components: {Datepicker},
        mixins: [Base]
    }
</script>