import SideAnchor from './components/SideAnchor.vue'
import ChildTable from './components/ChildTable.vue'
export default ({ Vue }) => {
    // eslint-disable-next-line vue/match-component-file-name
    Vue.component('SideAnchor', SideAnchor);
    Vue.component('ChildTable', ChildTable)
};