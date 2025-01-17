import './assets/main.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')

AOS.init ({
    duration: 1500,
    mirror: true,
    once: false,
})
