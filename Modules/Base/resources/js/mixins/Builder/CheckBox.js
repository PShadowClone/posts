import Base from './OptionsBase'

/**
 * this mixin just for c-check-box component
 * @author Amr
 */
export default {
    name: 'check-box-mixin',
    mixins: [Base],
    methods: {
        /**
         * this function returns the extra checkbox
         * data that should be pushed with another through Bus
         * @return {{}}
         */
        extra() {
            if (!this.model$)
                return undefined;
            return this.__options.filter((val) => {
                return this.model$.includes(val.id);
            });
        },
        __reAssignModel$() {
            if (!this.model$)
                return undefined;
            this.model$ = this.__getModel$Ids();
            this.model$ = !this.extra().length ? this.model$ : this.extra()
        },
        __getModel$Ids() {
            return this.model$.map((el) => {
                return this.isObject(el) ? el.id : el;
            })

        }
    }
}