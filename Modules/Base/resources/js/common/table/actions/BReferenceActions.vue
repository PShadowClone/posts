<template>
    <div class="h5 mb-0">
        <b-row>
            <b-col v-for="(act, index) in actions" :key="index"
                   cols="auto" >
                <component
                           v-if="is_component(act.component)"
                           :is="act.component"
                           :columns="columns"
                           :action="act">
                </component>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        props: ['action','columns'],
        data() {
            return {}
        },
        methods: {
            is_component(component) {
                return this.getActionComponents().includes(component)
            }
        },
        computed: {
            actions(){
                let self = this
                let acts = []
                this.action.references.map(function (act) {
                    acts.push(self.getGlobalActions(act.slug, act.refs ?? {}))
                })
                return acts
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
