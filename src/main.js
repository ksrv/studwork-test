import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import components from './components';
import * as filters from './filters';

/**
 * Регистрация фильтров
 */
Object.keys(filters).forEach(name => Vue.filter(name, filters[name]));


/**
 * Регистрация компонентов приложения
 */
Object.keys(components).forEach(name => Vue.component(name, components[name]));


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
