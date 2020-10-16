<template>
    <div class="h5 mb-0">
        <b-row>
            <b-col v-for="(action, index) in _actions.getActions" :key="index"
                   cols="auto" >
                <component
                    v-if="is_component(action.component)"
                    :is="action.component"
                    :columns="columns"
                    :action="action">
                </component>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        props: ['columns', 'row'],
        inject: ['_actions'],
        data() {
            return {
            }
        },
        methods: {
            is_component(component) {
                return this.getActionComponents().includes(component)
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
