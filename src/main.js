import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from './api/index'
import Regs from './reg/index'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import 'muse-ui-progress/dist/muse-ui-progress.css'
import 'muse-ui-message/dist/muse-ui-message.css'
import './assets/scss/reset.less'
import 'typeface-roboto'
import Loading from 'muse-ui-loading'
import Toast from 'muse-ui-toast'
import NProgress from 'muse-ui-progress'
import Message from 'muse-ui-message'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import Helpers from 'muse-ui/lib/Helpers';

Vue.use(MuseUI)
Vue.use(Loading)
Vue.use(Toast, {
  position: 'top',
  close: false
})
Vue.use(Message)
Vue.use(NProgress)
Vue.use(VideoPlayer)
Vue.use(Helpers)
Vue.config.productionTip = false
Vue.prototype.$regs = Regs
Vue.prototype.$api = Api
Vue.prototype.$loading = Loading
Vue.prototype.$toast = Toast
Vue.prototype.$progress = NProgress
Vue.prototype.$message = Message

router.beforeEach(async (to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let member_id = localStorage.getItem('member_id')
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (member_id) {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
        next({
          path: '/account',
          query: {redirect: to.fullPath}
      })
      
    }
  } else if(to.matched.some(res => res.meta.requireLogin)){ 
    if(member_id) {
      //登录了则跳转index页面
      next({
          path: '/index',
          query: {redirect: to.fullPath}
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
