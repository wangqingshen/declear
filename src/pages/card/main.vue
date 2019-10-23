<template>
  <div id="scrollContent" class="content">
    <header ref="header">
      我是顶部
    </header>
    <div class="desc">
        
    </div>
    <div class="rows">
      <h1>排污许可证常见问题</h1>
      <mu-container>
        <mu-expansion-panel>
          <div slot="header">什么是排污许可制度？</div>
          排污许可制度是生态环境部门依据排污单位的申请和承诺，通过发放排污许可证来规范和限制排污行为，并依证监管的环境管理制度。
          持证排污单位应持证排污，在排污许可证规定的许可排放浓度和许可排放量的范围内排放污染物，并应开展自行监测、建立台账记录、编写执行
          报告，严格落实排污许可证的相关要求。
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">排污许可证的内容？</div>
          <p>排污许可证由正本和副本构成，正本载明基本信息，副本包括基本信息、登记事项、许可事项、承诺书等内容。</p>
          <p>设区的市级以上地方环境保护主管部门可以根据环境保护地方性法规，增加需要在排污许可证中载明的内容。</p>
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">什么情形办理不了排污许可证？</div>
          <p>•位于法律法规规定禁止建设区域内的；</p>
          <p>•属于国务院经济综合宏观调控部门会同国务院有关部门发布的产业政策目录中明令淘汰或者立即淘汰的落后生产工艺装备、落后产品的；</p>
          <p>•法律法规规定不予许可的其他情形。</p>

        </mu-expansion-panel>
      </mu-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardIndex',
  components:{
   
  },
  data () {
    return {
     
    }
  },
  methods: {

  },
  computed: {
   
  },
  created() {
    console.log(21212)
    $('#scrollContent').scroll(function() {
      console.log(111)
    });
  }
}
</script>

<style lang="less" scoped>
.content{
  background: #f7f7f7;
  padding-bottom: 80px;
  header{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 60px;
    background: #25283D;
    color: #FFF;
    line-height: 60px;
    transition: transform .5s;
    transform: translateZ(0);
    &.is-hide{
      transform: translateY(-100%);
    }
  }
  .desc{
    width: 100%;
    height: 60vh;
    background-image: url(../../assets/images/banner/card.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .rows{
    padding-top: 70px;
    width: 800px;
    margin: auto;
    >h1{
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      color: #333;
      margin-bottom: 40px;
    }
    .container{
      padding: 0;
    }
  }
}
</style>
