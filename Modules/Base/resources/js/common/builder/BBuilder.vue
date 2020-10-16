<template>
    <ValidationObserver v-slot="data">
        <form @submit.prevent="submit">
            <!-- START FORM GROUP -->
            <form-group v-if="!__hasChunk" v-for="(field , index) in fields$" :component="field"
                        :key="`form-group-${index}`"
                        :values="values" class="form-group"/>
            <!-- END FORM GROUP -->
            <chunks-fields v-if="__hasChunk" :chunks="chunks" :fields="chunkedField" :values="values"/>
            <form-action v-if="__showActions"
                         @cancel="cancel"
                         @add-more="addMore"
                         :validationObserver="data"/>
        </form>
    </ValidationObserver>
</template>
<script>
    import FormAction from './Components/FormActions'
    import ChunksFields from './Components/ChunksFields'

    export default {
        components: {FormAction, ChunksFields},
        props: {
            /**
             * form's fields
             * @author Amr
             */
            fields: {
                required: true,
                default: function () {
                    return []
                }
            },
            /**
             * form fields' values
             * @author Amr
             */
            values: {
                required: false,
                default: function () {
                    return {}
                }
            },
            options: {
                required: false,
                default: function () {
                    return {}
                }
            },
            chunks: {
                required: false,
                default: 1
            }
        },
        computed: {
            /**
             * return the given fields, to avoid any arbitrary changes on it
             * in addition to making fields easy to maintain
             *
             * @return {default.props.fields|{default, required}}
             * @author Amr
             */
            fields$() {
                return this.fields;
            },
            __hasChunk() {
                return this.chunks && this.chunks > 1;
            },
            __chunks() {
                return this.chunks;
            },
            __showActions() {
                return this.options.hasOwnProperty('showActions') ? this.options.showActions : true;
            },
            __chunkClass() {
                return 'col-' + (12 / this.__chunks);
            },
            chunkedField() {
                return _.chunk(this.fields, this.__chunks);
            },
        },
        methods: {
            submit() {
                this.$parent.submit()
            },
            cancel() {
                this.$parent.cancel()
            },
            addMore() {
                this.$parent.addMore()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col- * {
        float: left;
    }
</style>