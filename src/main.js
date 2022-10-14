import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$filters = {
  number(value) {
    return value.toLocaleString()
  },
  operator(value) {
    switch (value) {
      case '+':
        return '＋'
      case '-':
        return '−'
      case '*':
        return '×'
      case '/':
        return '÷'
    }
  },
}

app.mount('#app')
