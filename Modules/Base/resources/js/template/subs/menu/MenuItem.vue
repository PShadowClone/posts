<template>
    <li class="kt-menu__item" :class="active" aria-haspopup="true">
        <router-link exact :to="{name: section.route}" class="kt-menu__link ">
            <i class="kt-menu__link-icon">
            <b-icon :icon="icon" scale="0.8"></b-icon>
            </i>
            <span class="kt-menu__link-text">{{section.title}}</span>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: ['section'],
        computed:{
            icon(){
                return this.section.icon ?? 'stop'
            },
            active(){
                return this.$route.name === this.section.route ? 'kt-menu__item--active' : ''
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
