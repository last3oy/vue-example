import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import BaseIcon from '@/components/BaseIcon'
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'
import BaseButton from '@/components/BaseButton'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.mixin({
  mounted() {
    console.log('I am mixed into every component.')
  }
})

Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseInput', BaseInput)
Vue.component('BaseSelect', BaseSelect)
Vue.component('BaseButton', BaseButton)

Vue.config.productionTip = false

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
