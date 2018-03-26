import Vue from 'vue'
import Router from 'vue-router'
import HelloNik from '@/components/HelloNik'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloNik',
      component: HelloNik
    }
  ],
  mode: 'history'
})
