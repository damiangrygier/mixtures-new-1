import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import router from './router'
import 'animate.css/animate.min.css'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
