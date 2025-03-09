import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/global.scss'
import components from './components/UI'

const app = createApp(App)


components.forEach(component =>{
    app.component(component.name, component)
})


app
    .use(createPinia())
    .use(router)
    .mount('#app')
