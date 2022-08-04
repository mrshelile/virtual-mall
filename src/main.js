// import './plugins/axios'
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'


// createApp(App).use(store).use(router).mount('#app')
// import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import './assets/aboutHeader.css';
import 'flowbite';
import './axios'
//  <script src="../path/to/flowbite/dist/flowbite.js"></script> 
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

createApp(App).use(store).use(router).mount("#app");

// import "bootstrap/dist/js/bootstrap.js"