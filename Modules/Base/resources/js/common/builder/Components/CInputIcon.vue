<template>
    <ValidationProvider :rules="__rules" :name="__field" v-slot="{ errors }">
        <div class="input-group">
            <b-form-input type="text" v-model="model$" class="form-control" v-bind="__extra"/>
            <div class="input-group-append">
			<span class="input-group-text" v-html="icon$">
			</span>
            </div>
        </div>
        <v-error :errors="errors"/>
    </ValidationProvider>
</template>
<script>
    import Base from '@/mixins/Builder/InputIcon.js'

    export default {
        mixins: [Base]
    }
</script>