import header from '../components/commen/header';
import menu from '../components/commen/menu';
import footer from '../components/commen/footer';
const Components = {
    install(Vue) {
        Vue.component('xmHeader',header);
        Vue.component('xmMenu',menu);
        Vue.component('xmFooter',footer);
    }
};
export default Components;