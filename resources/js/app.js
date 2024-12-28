import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { setupVbenAdmin } from './bds/src/setup'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./bds/src/views/**/*.vue', { eager: true })
      return pages[`./bds/src/views/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
    app.use(plugin)
    
    // Setup Vben Admin
    setupVbenAdmin(app).then(() => {
      app.mount(el)
    })
  },
})