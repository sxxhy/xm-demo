import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/base.css';
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
//import kui from 'kui-vue';
//import 'kui-vue/dist/k-ui.css';
Vue.config.productionTip = false;
//Vue.use(ElementUI);
//Vue.use(kui);

//全局组件注册
import Components from './plugins/components';
Vue.use(Components);


import vueResource from 'vue-resource'
Vue.use(vueResource)
//配置vue-resource常见属性
// 设置请求的根路径
Vue.http.options.root = "http://127.0.0.1:3000/";
//全局设置post 时候表单的数据组织格式为 application/x-www-form-urlencoded将提交的数据进行转码操作
Vue.http.options.emulateJSON = true;
//跨域访问保存session值选项
Vue.http.options.withCredentials=true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
