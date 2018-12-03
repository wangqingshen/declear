<template>
  <div class="main">
    <div class="left category-left">
      <Nav :curIndex="curIndex" />
      <SecondLeftMenu :pageTitle="pageTitle" :secondTitle="secondTitle" :secondLeftMenuList="homeNavList" :secondLeftMenuIndex="homeNavIndex"/>
    </div>
    <div class="right">
      <router-view @emitInit="init"></router-view>
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
      pageTitle: '首次申请',
      secondTitle: '',
      curIndex: 0,
      homeNavList: [
        {name: '页1  排污单位基本情况',url:'/index/hot'},
        {name: '页2  排污单位登记信息-主要产品及产能', url:'/card/firstApply'},
        {name: '页3  排污单位登记信息-主要产品及产能补充', url:'/hot'},
        {name: '页4  排污单位登记信息-主要原辅材料及燃料', url:'/hot'},
        {name: '页5  排污单位登记信息-排污节点及污染治理设施', url:'/hot'},
        {name: '页6  大气污染物排放信息-排放口', url:'/hot'},
        {name: '页7  大气污染物排放信息-有组织排放信息', url:'/hot'},
        {name: '页8  大气污染物排放信息-无组织排放信息', url:'/hot'},
        {name: '页9  大气污染物排放信息-企业大气排放总许可量', url:'/hot'},
        {name: '页10 水污染物排放信息-排放口', url:'/hot'},
        {name: '页11 水污染物排放信息-申请排放信息', url:'/hot'},
      ],
      homeNavIndex: -1,
    }
  },
  methods: {
    init(res){
      this.secondTitle = res
    } 
  },
  computed: {
   
  },
  created() {
    
  }
}
</script>

<style lang="less">
.category-left .secondLeftMenu .secondLeftMenuList .secondLeftMenuItem a {
  font-size: 12px;
  line-height: 12px;
}
</style>
