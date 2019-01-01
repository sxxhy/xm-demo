import header from '../components/commen/Header';
import menu from '../components/commen/Menu';
import footer from '../components/commen/Footer';
const Components = {
    install(Vue) {
        Vue.component('xmHeader',header);
        Vue.component('xmMenu',menu);
        Vue.component('xmFooter',footer);
    }
};
export default Components;
