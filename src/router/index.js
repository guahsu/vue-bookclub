import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'ProductList',
      path: '/',
      component: () => import('@/components/ProductList')
    },
    {
      name: 'CheckOut',
      path: '/checkout',
      component: () => import('@/components/CheckOut')
    }
  ]
})
