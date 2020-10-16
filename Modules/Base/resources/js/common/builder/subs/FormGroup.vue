<template>
    <div>
        <!-- START FIELD LABEL -->
        <b-label :value="component$.label" v-if="__hasLabel" :rules="__rules"/>
        <!-- END FIELD LABEL -->
        <!-- START FIELD -->
        <field :component="component$" :values="values"/>
        <!-- END FIELD -->
    </div>
</template>
<script>
    import Base from '@/mixins/Builder/Field'

    export default {
        mixins: [Base],
        props: {
            /**
             * component's object
             *
             * @author Amr
             */
            component: {
                required: true
            },
            /**
             * form fields' values
             *
             * @author Amr
             */
            values: {
                required: false,
                default: function () {
                    return {};
                }

            }
        },
        computed: {
            /**
             * return the passed component
             * @return {default.props.component|{required}}
             * @author Amr
             */
            component$() {
                return this.component;
            },
            /**
             * check if the passed component has label
             *
             * @return {boolean}
             * @private
             * @author Amr
             */
            __hasLabel() {
                return this.component$.hasOwnProperty('label');
            }
        }
    }
</script>