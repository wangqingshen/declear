<template>
  <div class="main">
    <div class="left category-left">
      <Nav :curIndex="curIndex" />
      <SecondLeftMenu :pageTitle="pageTitle" :secondTitle="secondTitle" :secondLeftMenuList="homeNavList" :secondLeftMenuIndex="homeNavIndex"/>
    </div>
    <div class="right" ref="scrollBox">
      <mu-fade-transition>
        <div class="category-select" v-show="selectedStatus">
          
        </div>
      </mu-fade-transition>
      <div class="category-top">
        <h1>{{secondTitle}}</h1>
        <p class="mark">年屠宰数量参照环境影响评价文件，并核实行业类别及代码，根据<a href="">《固定污染源排污许可分类管理名录》</a>确定企业所属的管理类别。</p>
        <div class="category-label">
          <div class="label-item">
            <div class="label-inner">
              <div class="label-head">重点管理</div>
              <div class="label-content">年屠宰禽类1000万只及以上的</div>
            </div>
          </div>
          <div class="label-item">
            <div class="label-inner">
              <div class="label-head">简化管理</div>
              <div class="label-content">年屠宰禽类1000万只以下的</div>
            </div>
          </div>
          <div class="label-item">
            <div class="label-inner">
              <div class="label-head">登记管理</div>
              <div class="label-content nodata">暂无说明</div>
            </div>
          </div>
        </div>
        <p class="tips">注：核实管理类别后，在“分类”目录中选择企业所属的管理类别。</p>
        <div class="category-list">
          <h1>分类</h1>
          <div class="category-inner">
            <div class="category-item">
              <div class="category-title">所在城市：</div>
              <div class="category-content">
                <div class="content-item"  v-for="(item, index) in areaList">
                  <div class="content-item-inner">
                    <span>{{item}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-item">
              <div class="category-title">管理类别：</div>
              <div class="category-content">
                <div class="content-item" v-for="(item, index) in labelList">
                  <div class="content-item-inner">
                    <mu-button color="#002C5A" >{{item}}</mu-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-item">
              <div class="category-title">燃料类别：</div>
              <div class="category-content">
                <div class="content-item" v-for="(item, index) in oliList">
                  <div class="content-item-inner">
                    <mu-button color="#002C5A" >{{item}}</mu-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="category-tip">
            <p>所在城市：企业实际生产经营场地所属的管辖城市；</p>
            <p>燃气锅炉（其他）指：使用单台出力10吨/小时（7兆瓦）以上且合计出力20吨/小时（14兆瓦）以上的气体燃料锅炉请选择此项；</p>
            <p>燃气锅炉（简化）指：使用单台出力10吨/小时（7兆瓦）以下且合计出力20吨/小时（14兆瓦）以下的气体燃料锅炉请选择此项；</p>
            <p>燃油锅炉：油气混烧的锅炉请选择燃油锅炉、采用醇基液体燃料的锅炉请选择燃油锅炉。</p>
          </div>
        </div>
      </div>
      <mu-fade-transition>
        <router-view  @emitInit="init"></router-view>
      </mu-fade-transition>
      <GotoTop></GotoTop>
    </div>
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
      areaList: ['成都','绵阳','广元','遂宁','广安','德阳','新都','简阳','华阳','高新区','天府新区'],
      labelList: ['重点管理','简化管理'],
      oliList: ['燃油锅炉','燃气锅炉（简化）','燃气锅炉（重化）'],
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
.category-top{
  padding: 0 20px 0 50px;
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
  .category-label{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    margin: 70px 0 30px;
    .label-item{
      flex: 1;
      width: calc(100% / 3);
      .label-inner{
        position: relative;
        width: 180px;
        height: 250px;
        border:1px solid rgba(233, 233, 233, 1);
        box-shadow:0px 2px 6px 0px rgba(191,200,209,0.3);
        margin: auto;
        transition: all 0.5s;
        .label-head{
          position: absolute;
          top: -18px;
          left: 36px;
          width: 108px;
          height: 36px;
          line-height: 36px;
          background:rgba(247,245,245,1);
          border:1px solid rgba(204, 204, 204, 1);
          border-radius:4px;
        }
        .label-content{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content:center;
          padding: 0 25px;
          font-size: 14px;
          text-align: center;
        }
        &:hover{
          transform: translateY(-4px);
          box-shadow:0px 2px 6px 0px rgba(191,200,209,0.5);
        }
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
      .category-item{
        min-height: 54px;
        display: flex;
        justify-content: space-between;
        height: auto;
        &:not(:last-child){
          border-bottom: 1px dashed #ccc;
        }
        .category-title{
          min-height: 54px;
          width: 110px;
          background: #F7F5F5;
          font-size: 14px;
          color: #333;
          height: 100%;
          line-height: 54px;
          text-align: left;
          padding-left: 15px;
          box-sizing: border-box;
        }
        .category-content{
          min-height: 54px;
          width: calc(100% - 110px);
          padding-left: 15px;
          .content-item{
            display: inline-block;
            line-height: 54px;
            sapn{
              font-size: 14px;
              color: #666;
            }

          }
        }
      }
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
