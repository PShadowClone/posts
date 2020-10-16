import Base from './base'
import Tinymce from '@/utils/tinymce'

export default {
    mixins: [Base],
    data() {
        return {
            apiKey$: Tinymce.apiKey,
            options$: {
                height: this.height$,
                plugins: this.plugins$,
                toolbar: this.toolbar$
            }
        };
    },
    /**
     * field's component
     * @author Amr
     */
    props: {
        field: {
            required: true,
            default: () => {
                return {}
            }
        },
        plugins: {
            required: false,
            default: null
        },
        toolbar: {
            required: false,
            default: null
        },
        height: {
            required: false,
            default: null
        }
    },
    computed: {
        /**
         * get the passed component
         *
         * @return {default.props.component|{require}}
         * @author Amr
         */
        component$() {
            return this.field;
        },
        /**
         * returns the plugins of editor
         *
         * @return {*}
         * @author Amr
         */
        plugins$() {
            let globalPlugins = Tinymce.plugins;
            let plugins = this.plugins;
            if (plugins)
                globalPlugins.push(plugins);
            return globalPlugins;
        },
        /**
         * returns the toolbar of editor
         * @return {*}
         * @author Amr
         */
        toolbar$() {
            let globalToolBar = Tinymce.plugins;
            let toolbar = this.toolbar;
            if (toolbar)
                globalToolBar += ' ' + toolbar;
            return globalToolBar;
        },
        /**
         * returns the height of editor
         * @return {*}
         * @author Amr
         */
        height$() {
            return this.height ?? Tinymce.height
        },
    },
    methods: {
        /**
         * publish model's value via FormBuilder Bus
         * @param newVal
         * @param oldVal
         * @author Amr
         */
        model$Watcher(newVal, oldVal) {
            this.publish(newVal, oldVal);
        },
    }
}