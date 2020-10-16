<template>
    <div>
        <div class="row" v-for="(fields , chunkedIndex) in fields$"
             :key="`global-chunk-${chunkedIndex}`">
            <div v-for="(nestedField , nestIndex) in fields"
                 :key="`nested-chunk-${nestIndex}`"
                 :class="__chunkClass">
                <!-- START FORM GROUP -->
                <form-group :component="nestedField"
                            :key="`form-group-${nestIndex}`"
                            :values="values" class="form-group">
                </form-group>
                <!-- END FORM GROUP -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
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
            chunks: {
                required: false,
                default: 1
            },
            fields: {
                required: true,
                default: function () {
                    return {}
                }
            }
        },
        computed: {
            fields$() {
                return this.fields;
            },
            __chunks() {
                return this.chunks;
            },
            __chunkClass() {
                return 'col-' + (12 / this.__chunks);
            },
        }
    }
</script>