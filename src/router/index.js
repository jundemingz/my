import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
import Index from '@/views/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
    // {
    //   path: '/hello',
    //   name: 'hello',
    //   component: HelloWorld
    // },
    // {
    //   path: '/tab',
    //   name: 'tab',
    //   component: Tab
    // }
  ]
})
