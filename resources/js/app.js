import {createApp} from 'vue'

require('./bootstrap')

import Index from "./components/index.vue"
import axios from "axios"
import router from "./router"
import store from "./store"

const app = createApp(Index)
app.config.globalProperties.$axios = axios
app.use(router)
app.use(store)
app.mount('#App')
