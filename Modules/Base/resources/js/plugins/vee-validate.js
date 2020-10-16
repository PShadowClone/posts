import Vue from 'vue'
import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

/**
 * register Validation Provider
 * @author Amr
 */
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

// with typescript
for (let [rule, validation] of Object.entries(rules)) {
    extend(rule, {
        ...validation
    });
}
