import Base from './OptionsBase'

/**
 * this mixin just for c-radio component
 * @author Amr
 */
export default {
    mixins: [Base],
    methods: {
        /**
         * this function returns the extra
         * data that should be pushed with another through Bus
         * @return {{}}
         */
        extra() {
            if (!this.model$)
                return this.model$;
            return this.__options.find((val) => {
                return this.checkExtra(val);
            });
        },
        __reAssignModel$() {
            this.model$ = this.extra()
        },
        checkExtra(val) {
            let isIntVal = this.isInt(this.model$);
            if (isIntVal)
                return this.model$ == val.id;
            return this.model$.id == val.id;
        },
        __hasReAssigned(val) {
            return this.isInt(val);
        },
    }
}