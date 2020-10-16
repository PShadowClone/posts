import EndPoints from '@/mixins/Builder/endPoints'
import BasicOperations from '@/mixins/Builder/mainOperations'
import Listeners from '@/mixins/Builder/Listeners'
import Redirect from '@/mixins/Builder/redirect'

export default {
    mixins: [EndPoints, BasicOperations, Listeners, Redirect],
    data() {
        return {
            form$: {},
            fields: [],
            values: {},


        }
    },
    methods: {

        onCreated() {
        },

        settings() {
            this.__listeners();
            this.redirectTo = this.predicateRedirectTo();
            this.id = this.$route.params.id;

        }
    },

    created() {
        this.settings();
        this.onCreated();
    }
}