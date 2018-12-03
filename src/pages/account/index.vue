<template>
  <div class="main">
    <div class="left">
      <Nav :curIndex="curIndex" />
      <LeftMenu :pageTitle="pageTitle" :link="linkName" :leftMenuList="leftMenuList" :leftMenuIndex="leftMenuIndex"/>
    </div>
    <div class="right" ref="scrollBox">
      <mu-fade-transition>
        <router-view></router-view>
      </mu-fade-transition>
      <GotoTop></GotoTop>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import LeftMenu from '@/components/LeftMenu'
import GotoTop from '@/components/GotoTop'
export default {
  name: 'index',
  components:{
    Nav,
    LeftMenu,
    GotoTop
  },
  data () {
    return {
      pageTitle: '我的账户',
      linkName: 'login',
      curIndex: 1,
      leftMenuList: [
        {name:'登录',url:'/account'},
        {name: '注册', url:'/account/register'},
        {name: '关于青溪联盟', url:'/account/about'},
      ],
      leftMenuIndex: 0,
    }
  },
  methods: {
    
  },
  computed: {
   
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.leftMenu {
  padding-top: 160px;
}
</style>
