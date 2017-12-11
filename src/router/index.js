import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Vertical from '@/components/Vertical'
import Home from '@/components/Home'
=======
import HelloWorld from '@/components/HelloWorld'
>>>>>>> 22454c44f461832fff12762a2ef045953abb7a56

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'home',
      component: Home
    },
    {
      path: '/vertical',
      name: 'vertical',
      component: Vertical
=======
      name: 'Hello',
      component: HelloWorld
>>>>>>> 22454c44f461832fff12762a2ef045953abb7a56
    }
  ]
})
