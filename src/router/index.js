import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home.vue'], resolve),
      redirect: '/item',
      children: [
        {
          path: '/main',
          name: 'main',
          redirect: '/item',
          component: resolve => require(['@/components/main.vue'], resolve),
          children: [
            {
              path: '/item',
              name: 'item',
              component: resolve => require(['@/components/item.vue'], resolve)
            },
            {
              path: '/content',
              name: 'content',
              component: resolve => require(['@/components/content.vue'], resolve)
            }
          ]
        }
      ]
    }
  ]
})
