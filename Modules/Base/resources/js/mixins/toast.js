export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        popDefaultToast(text, variant = 'info') {
            this.$bvToast.toast('text', {
                title: `Variant ${variant || 'default'}`,
                variant: variant,
                solid: true,
                toaster: 'b-toaster-bottom-right',
            })
        }
    }
}
