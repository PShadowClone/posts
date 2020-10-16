export default {
    data() {
        return {redirectTo: null}
    },
    methods: {
        /**
         * redirect to the given link
         * @private
         * @author Amr
         */
        __redirectLink(link) {
            if (!link)
                link = this.redirectTo;
            try {
                this.$router.replace(link)
            } catch (e) {

            }

        },
        /**
         * predicate redirected link
         * @return {string}
         * @author Amr
         */
        predicateRedirectTo() {
            if (this.redirectTo)
                return;
            let links = this.$route.path.split('/');
            links.pop();
            return links.join('/')
        },
        creationLink() {
            return this.predicateCreateLink();
        },
        /**
         * predicate redirected link
         * @return {string}
         * @author Amr
         */
        predicateCreateLink() {
            let links = this.$route.path.split('/');
            links.pop();
            return links.join('/') + '/create'
        },
    }
}