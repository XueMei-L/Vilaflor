import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

//createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
// createApp(App).use(ElementUI)


// import Vue from 'vue';
// import BootstrapVue from 'bootstrap-vue';
// import App from './App';
// import router from './router';

// Vue.use(BootstrapVue);

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   render: h => h(App),
// });