<template>
  <div class="main">
    <div class="left">
      <Nav :curIndex="curIndex" />
      <LeftMenu :pageTitle="pageTitle" :link="linkName" :leftMenuList="homeNavList" :leftMenuIndex="homeNavIndex"/>
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
      pageTitle: '我的环保',
      linkName: 'home',
      curIndex: 0,
      homeNavList: [
        {name:'热门精选',url:'/index/hot'},
        {name: '排污许可证', url:'/card'},
        {name: '环境影响评价', url:'/hot'},
        {name: '环境工程治理', url:'/hot'},
        {name: '环境保护税', url:'/hot'},
        {name: '环境保护验收', url:'/hot'},
        {name: '环境监测', url:'/index/notFound'},
      ],
      homeNavIndex: -1,
    }
  },
  methods: {
    
  },
  computed: {
   
  },
  mounted() {
  },
  created() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
