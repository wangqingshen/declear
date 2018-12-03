<template>
  <div class="container">
    <h1>{{secondTitle}}</h1>
    <p class="mark">查阅企业环境影响评价文件，核实行业类别及代码，根据<a href="">《固定污染源排污许可分类管理名录》</a>确定企业所属的管理类别。</p>
    <div class="table-desc">
      <div class="table-item">
        <span>年屠宰生猪10万头及以上、肉牛1万头及以上、肉羊15万头及以上的属于“重点管理”</span>
        <span>重点管理</span>
      </div>
      <div class="table-item">
        <span>年屠宰生猪10万头以下、肉牛1万头以下、肉羊15万头以下的属于“简化管理”</span>
        <span>简化管理</span>
      </div>
    </div>
    <p class="tips">
      注：年屠宰数量参照环境影响评价文件。
    </p>
    <div class="category-list">
      <h1>分类</h1>
      <div class="category-inner">
        <div class="category-item">
          <div class="category-title">所在城市：</div>
          <div class="category-content"></div>
        </div>
        <div class="category-item">
          <div class="category-title">管理类别：</div>
          <div class="category-content"></div>
        </div>
        <div class="category-item">
          <div class="category-title">燃料类别：</div>
          <div class="category-content"></div>
        </div>
      </div>
      <div class="category-tip">
        <p>所在城市：企业实际生产经营场地所属的管辖城市；</p>
        <p>燃气锅炉（其他）指：使用单台出力10吨/小时（7兆瓦）以上且合计出力20吨/小时（14兆瓦）以上的气体燃料锅炉请选择此项；</p>
        <p>燃气锅炉（简化）指：使用单台出力10吨/小时（7兆瓦）以下且合计出力20吨/小时（14兆瓦）以下的气体燃料锅炉请选择此项；</p>
        <p>燃油锅炉：油气混烧的锅炉请选择燃油锅炉、采用醇基液体燃料的锅炉请选择燃油锅炉。</p>
      </div>
    </div>
    <SuggesDialog />
  </div>
</template>

<script>
import SuggesDialog from '@/components/SuggesDialog'
export default {
  name: 'cardIndex',
  components:{
    SuggesDialog
  },
  data () {
    return {
      secondTitle: ''
    }
  },
  methods: {

  },
  computed: {
   
  },
  created() {
    this.secondTitle = this.$route.params.secondTitle
    this.$emit('emitInit', this.secondTitle)
  }
}
</script>

<style lang="less" scoped>
.container{
  padding: 0 50px;
  box-sizing: border-box;
  >h1{
    font-size: 30px;
    line-height: 30px;
    padding: 34px 0 30px;
    text-align: left;
    font-weight: bold;
  }
  p.mark{
    text-align: left;
    font-size: 14px;
    color: #333;
    line-height: 14px;
    a{
      color: #002C5A;
    }
  }
  .table-desc{
    background: #F7F5F5;
    width: 100%;
    margin: 30px 0 20px;
    .table-item {
      display: flex;
      height: 55px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      span{
        display: flex;
        align-items: center;
        padding: 0 10px;
        flex: 9;
        font-size: 14px;
        color: #333;
        text-align: left;
        height: 100%;
        
        &:last-child{
          color:#002C5A;
          flex: 3;
          justify-content: center;
          border-left: 1px solid #ccc;
        }
      }
      &:not(:first-child){
        border-top: 0;
      }
    }
  }
  .tips{
    font-size: 12px;
    color: #666;
    line-height: 12px;
    text-align: left;
  }
  .category-list{
    margin-top: 40px;
    >h1{
      font-size: 20px;
      color: #333;
      text-align: left;
      line-height: 20px;
    }
    .category-inner{
      margin: 15px 0 20px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    .category-tip{
      font-size: 12px;
      color: #666;
      text-align: left;
      >p{
        margin-bottom: 2px;
      }
    }
  }
}
</style>
