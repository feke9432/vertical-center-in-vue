import Vue from 'vue'
import Router from 'vue-router'
import Vertical from '@/components/Vertical'
import SaveRight from '@/components/SaveRight'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vertical',
      name: 'vertical',
      component: Vertical
    },
    {
      path: '/SaveRight',
      name: 'SaveRight',
      component: SaveRight
    }
  ]
})
