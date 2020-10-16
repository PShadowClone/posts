<template>
    <a href="" @click.prevent="doAction">
        <b-icon v-bind="attributes"></b-icon>
    </a>
</template>

<script>
    export default {
        props: ['action','columns'],
        computed:{
            attributes(){
                return this.action.attributes
            }
        },
        created(){

        },
        methods:{
            doAction(){
                try {
                    this.action.callback(this)
                }catch (e) {
                    console.error('callback must be a function')
                }
            }
        }
    }
</script>

<style scoped>

</style>
