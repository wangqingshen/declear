<template>
  <div class="main">
    <div class="left">
      <Nav :curIndex="curIndex" />
      <SecondLeftMenu :pageTitle="pageTitle" :secondTitle="secondTitle" :secondLeftMenuList="homeNavList" :secondLeftMenuIndex="homeNavIndex"/>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
    <GotoTop />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import SecondLeftMenu from '@/components/SecondLeftMenu'
import GotoTop from '@/components/GotoTop'
export default {
  name: 'index',
  components:{
    Nav,
    SecondLeftMenu,
    GotoTop
  },
  data () {
    return {
      pageTitle: '我的环保',
      secondTitle: '排污许可证',
      curIndex: 0,
      homeNavList: [
        {name:'注册账号',url:'/index/hot'},
        {name: '首次申请', url:'/card/firstApply'},
        {name: '补充申请', url:'/hot'},
        {name: '许可证变更', url:'/hot'},
        {name: '许可证延续', url:'/hot'},
        {name: '许可证补办', url:'/hot'},
        {name: '申请登记', url:'/hot'},
        {name: '台账记录', url:'/hot'},
        {name: '执行报告', url:'/hot'},
        {name: '监测记录', url:'/hot'},
        {name: '改正规定', url:'/hot'},
      ],
      homeNavIndex: -1,
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

</style>
