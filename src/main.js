import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

import naive from "naive-ui"
import 'vant/lib/index.css'
import vant from "vant"
import { Icon } from 'vant';


const app = createApp(App)
const pinia = createPinia()
app.use(Icon);
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.use(naive)
app.use(vant)
app.use(Icon)

app.mount('#app')
