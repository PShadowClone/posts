<template>
    <b-dropdown v-bind="caretAttributes">
        <template v-slot:button-content>
            <b-icon v-bind="iconAttributes"></b-icon> <span>{{title}}</span>
        </template>
        <b-dropdown-item-button v-for="(item, index) in action.items"
                                :key="index" v-bind="itemAttributes(item)"
                                @click="doAction(item)">
            <b-icon v-if="item.icon" v-bind="item.icon.attributes"></b-icon>
            <span>{{item.title}}</span>
        </b-dropdown-item-button>
    </b-dropdown>
</template>

<script>
    export default {
        props: ['action','columns'],
        computed:{
            iconAttributes(){
                return this.action.icon.attributes
            },
            title(){
                return this.action.title ?? ''
            },
            caretAttributes(){
                return this.action.attributes ?? {}
            }
        },
        created(){

        },
        methods:{
            itemAttributes(item){
              return item.attributes ?? {}
            },
            doAction(item){
                try {
                    item.callback(this)
                }catch (e) {
                    console.error('callback must be a function')
                }
            }
        }
    }
</script>

<style scoped>

</style>
