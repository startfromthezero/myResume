import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from "./store/index";
import './index.css'
import './assets/scss/index.scss'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
