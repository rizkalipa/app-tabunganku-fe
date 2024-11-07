import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/App.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'animate.css'
import Helper from "@/util/Helper";

const app = createApp(App)

app.config.globalProperties.$helper = Helper

app.use(store).use(router).mount('#app')
