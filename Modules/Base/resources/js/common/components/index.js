import Vue from 'vue'
import Container from "./container";
import GTable from "../table/GTable";
import Actions from "../table/column/Actions";
import No from "../table/column/No"
import Icon from "../table/actions/Icon";
import Dropdown from "../table/actions/BSDropdown";
import BVDropdown from "../table/actions/BVDropdown";
import GStatus from '../table/column/Status'
import BReferenceActions from "../table/actions/BReferenceActions";

Vue.component('container', Container)
Vue.component('g-table', GTable)
Vue.component('g-actions',Actions)
Vue.component('g-no', No)
Vue.component('bv-icon', Icon)
Vue.component('bs-dropdown', Dropdown)
Vue.component('bv-dropdown', BVDropdown)
Vue.component('g-status', GStatus)
Vue.component('b-reference-actions', BReferenceActions)
require('../../template/subs/menu')
