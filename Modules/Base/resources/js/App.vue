<template>
    <layout :key="vuex_defaultLanguage.locale"/>
</template>
<script>

    import layout from '@/template/layout'

    export default {
        components: {layout}
    }
</script>