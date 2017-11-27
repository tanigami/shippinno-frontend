import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import OrdersIndex from '@/pages/orders/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/orders',
      name: 'orders-index',
      component: OrdersIndex
    }
  ]
})
