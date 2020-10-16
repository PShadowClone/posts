<template>
    <div class="dropdown">
        <a href="" type="text" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <b-icon v-bind="iconAttributes"></b-icon>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a href="" v-for="(item, index) in action.items" class="dropdown-item" @click.prevent="doAction(item)">
                <b-icon v-if="item.icon" v-bind="item.icon.attributes"></b-icon> &nbsp;&nbsp;
                <span class="h6 mb-0">{{item.title}}</span>
            </a>
        </div>
    </div>
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
            }
        },
        created(){

        },
        methods:{
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
