import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Frame from '@/components/Frame'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'frame',
      path: '/frame',
      component: Frame
    },
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
