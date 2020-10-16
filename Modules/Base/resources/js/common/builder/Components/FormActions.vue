<template>
    <div>
        <b-button type="submit" variant="primary" :disabled="validationObserver.invalid"
                  @click="submit">Save
        </b-button>
        <b-button variant="primary" :disabled="validationObserver.invalid" @click="addMore">Add more</b-button>
        <b-button type="reset" variant="danger" @click="cancel">Cancel</b-button>
    </div>
</template>
<script>
    export default {
        props: {
            validationObserver: {
                type: Object,
                required: true,
                default: function () {
                    return {}
                }
            }
        },
        methods: {
            submit() {
                this.$emit('submit')
            },
            cancel() {
                this.$emit('cancel')
            },
            addMore() {
                this.$emit('add-more')
            }
        }
    }
</script>