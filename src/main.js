import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './common/common.less'
import './perssion'
createApp(App)
  .use(store)
  .use(router)
  .directive('preventReClick', {
    // When the bound element is mounted into the DOM...
    mounted(el, binding) {
      el.addEventListener('click', () => {
        if (!el.disabled) {
          el.disabled = true
          setTimeout(() => {
            el.disabled = false
          }, binding.value || 1000)
        }
      })
    }
  })
  .mount('#app')
