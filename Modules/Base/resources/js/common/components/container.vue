<template>
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <div class="kt-portlet">
            <div class="kt-portlet__head">
                <div class="kt-portlet__head-label">
                    <h3 class="kt-portlet__head-title">
                        {{header}}
                    </h3>
                </div>
            </div>
            <div class="kt-portlet__body">
                <slot/>
            </div>
            <div class="kt-portlet__foot">
                <div class="kt-form__actions">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            header: {
                required: false
            }
        }
    }
</script>

<style scoped>

</style>
