<template>
  <div class="content">
    <div class="desc">
        
    </div>
    <div class="rows">
      <mu-container>
        <mu-expansion-panel>
          <div slot="header">青溪联盟</div>
          青溪联盟泛指所有为生态环境做出贡献的朋友们，可以来自政府部门、NGO组织，也可以来自专业环保服务机构、生产型企
          业等等。
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">为什么要注册青溪联盟？</div>
            “青溪联盟”围绕“全国排污许可证”打造有价值的专业服务，他们奉献自己的思想和行动，希望通过这个平台得到所有关
          心生态环境的朋友的认可。
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">注意事项</div>
            暂时不接受来自政府部门、NGO组织、环保企业、生产企业之外的游客注册，尽请谅解！
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
  name: 'about',
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
    background-image: url(../../assets/images/banner/about.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .rows{
    padding-top: 60px;
    width: 800px;
    margin: auto;
    .row{
      display: block;
      margin: 0;
      width: 100%;
      box-shadow:0px 1px 4px 0px rgba(51,51,51,0.2);
      margin-bottom: 14px;
      padding: 17px 20px 30px;
      box-sizing: border-box;
      text-align: left;
      color: #333;
      h1{
        font-size: 16px;
        margin-bottom: 22px;
      }
      section{
        p{
          font-size: 14px;
        }
      }
    }
  }
}
</style>
