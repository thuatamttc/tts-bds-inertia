import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import BasicLayout from './bdstoanthinh/apps/web-antd/src/layouts/basic.vue'
import '../css/app.css'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./bdstoanthinh/apps/web-antd/src/views/**/*.vue', { eager: true })
    const page = pages[`./bdstoanthinh/apps/web-antd/src/views/${name}.vue`]
    
    page.default.layout = page.default.layout || BasicLayout
    
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})