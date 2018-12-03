<template>
  <div class="content">
    <div class="desc">
        <h1>青溪简介</h1>
        <p>青溪联盟泛指所有为生态环境做出贡献的朋友们，可以来自政府部门、
        NGO组织，也可以来自专业环保服务机构、生产型企业等等。</p>
    </div>
    <div class="rows">
      <mu-container>
        <mu-expansion-panel>
          <div slot="header">我们是谁？</div>
          <p>我们是一群把青春奉献给生态环境的疯子，</p>
          <p>美其名曰：青溪联盟。</p>
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">我们从哪里来？</div>
            <p>我们默默无闻的从事着改善环境的工作，</p>
            <p>也许是注册环保工程师、环境影响评价师、环境监理工程师，</p>
            <p>也许是环保主义爱好者、设计师、梦想家、慈善者，</p>
            <p>我们来自于NGO组织、政府部门、商业企业……</p>
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">我们到哪里去？</div>
            <p>2035年！生态环境根本好转，美丽中国目标基本实现！</p>
            <p>我们的使命：“用心改善环境”。</p>
            <p>留给我们的时间不多了……</p>

        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">联系我们</div>
          <p>电话：15718058823</p>
          <p>QQ：2163415167</p>
        </mu-expansion-panel>
      </mu-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'us',
  components:{
   
  },
  data () {
    return {
      form: {
        mob: ''
      }
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

<style lang="less" scoped>
.content{
  padding-bottom: 80px;
  .desc{
    width: 100%;
    height: 340px;
    background-image: url(../../assets/images/banner/about-us.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    h1{
      font-size: 32px;
      color: #000;
      margin-bottom: 14px;
    }
    p{
      width: 500px;
      font-size: 16px;
      color: #666;
      line-height: 28px;
    }
  }
  .container{
    padding: 0;

  }
  .rows{
    padding-top: 60px;
    width: 800px;
    margin: auto;
    p{
      margin-bottom: 3px;
    }
  }
}
</style>
