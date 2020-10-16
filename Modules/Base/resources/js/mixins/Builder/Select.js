import Base from './OptionsBase'

/**
 * this mixin just for c-select component
 * @author Amr
 */
export default {
    name: 'select-mixin',
    mixins: [Base],
    methods: {
        /**
         * this function returns the extra
         * data that should be pushed with another through Bus
         * @return {{}}
         */
        extra() {
            if (!this.model$)
                return undefined;
            try {
                let method = this.getExtraMethod();
                return this.__options[method]((val) => {
                    return this.checkExtra(val);
                });
            } catch (e) {
                throw new Error('[select exception] : check your select data')
            }
        },
        checkExtra(val) {
            let checkedOptions = this.model$;
            try {
                if (!this.isMultiple)
                    return checkedOptions.id == val.id
                checkedOptions = checkedOptions.map(({id}) => id)
                return checkedOptions.includes(val.id)
            } catch (e) {
                console.error('[select exception] : invalid data')
            }
        },
        getExtraMethod() {
            return this.isMultiple ? 'filter' : 'find'
        },
        __reAssignModel$() {
            if ((this.isMultiple && this.isArray(this.model$)) ||
                (!this.isMultiple && this.isObject(this.model$)))
                this.model$ = this.extra()
        },
        __hasReAssigned(val) {
            return parseInt(val, 10) || this.isObject(val) || !this.isArrayOfObject(val)
        }
    }
}