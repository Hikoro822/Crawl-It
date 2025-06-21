import './assets/main.scss'
import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css';

const app = createApp(App)
app.use(VueToast, {
    position: 'top',
    duration: 3000,
})
app.use(router)
app.mount('#app')
