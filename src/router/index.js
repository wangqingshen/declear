import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import home from '@/pages/index/home'
import notFound from '@/pages/404'
import accountRouter from './account'
import moreRouter from './more'
import cardRouter from './card'
import categoryRouter from './category'
import hot from '@/pages/index/hot'

Vue.use(Router)

export default new Router({
  routes: [
    {
         path:"*",
         redirect:'/index'
     },
     {
         path: '/index',
         component: index,
         meta:{
            title: '环保管家网'
        },
        children: [
            {         
              path: '/',
              name: 'home',
              component: home,
              meta: { 
                title: '青溪首页'
              },
            },
            {         
              path: 'hot',
              name: 'hot',
              component: hot,
              meta: { 
                title: '热门精选'
              },
            },
            {
               path: '*',
               name: 'notFound',
               component: notFound,
               meta:{
                  title: '青溪404页面'
              }
           },

        ]
    },
     
     ...accountRouter,
     ...moreRouter,
     ...cardRouter,
     ...categoryRouter
  ],
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else {
          return { x: 0, y: 0 }
      }
  }
})
