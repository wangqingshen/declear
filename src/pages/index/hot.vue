<template>
  <div class="content">
    <div class="banner one">
      
    </div>
    <div class="rows">
      <h1>{{industry.title}}</h1>
      <div class="inner">
        <div class="row" v-for="(item,index) in industry.list">
          <span>{{item}}</span>
        </div>
      </div>
      <div class="more">
        <span>其他行业<img src="../../assets/images/ico_right.png" /></span>
      </div>
    </div>
    <div class="banner two">
     
    </div>
    <div class="rows">
      <h1>{{area.title}}</h1>
      <div class="inner">
        <div class="row" v-for="(item,index) in area.list">
          <span>{{item}}</span>
        </div>
      </div>
      <div class="more">
        <span>其他城市<img src="../../assets/images/ico_right.png" /></span>
      </div>
    </div>
    <div class="banner three">
     
    </div>
  </div>
</template>

<script>
export default {
  name: 'hot',
  components:{
    
  },
  data () {
    return {
      industry: {
        title: '正在申请与核发的行业',
        list: ['屠宰与肉类加工工业', '淀粉工业', '陶瓷砖瓦工业', '屠宰与肉类加工工业', '淀粉工业', '陶瓷砖瓦工业']
      },
      area: {
        title: '合作城市',
        list: ['成都市','合肥市','重庆市','资阳市','德阳市','绵阳市']
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
  .banner{
    width: 100%;
    height: 340px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    &.one{
      background-image: url(../../assets/images/banner/hot_1.jpg);
    }
    &.two{
      background-image: url(../../assets/images/banner/hot_2.jpg);
    }
    &.three{
      background-image: url(../../assets/images/banner/hot_3.jpg);
    }
  }
  .rows{
    width: 100%;
    padding: 60px 50px 70px 110px;
    box-sizing: border-box;
    h1{
      font-size: 28px;
      font-weight: bold;
      color: #333;
      line-height: 28px;
    }
    .inner{
      padding: 50px 0 10px;
      text-align: left;
      .row {
        cursor: pointer;
        display: inline-block;
        width: 200px;
        height: 48px;
        border:1px solid rgba(233, 233, 233, 1);
        box-shadow:0px 2px 6px 0px rgba(191,200,209,0.3);
        border-radius:4px;
        text-align: center;
        line-height: 48px;
        margin: 0;
        margin-right: 40px;
        margin-bottom: 30px;
        transition: all 0.5s ease;
        span{
          font-size: 14px;
          color: #333;
        }
        &:hover{
          transform: translateY(-4px);
          border:1px solid rgba(188, 196, 207, 1);
          box-shadow:0px 2px 8px 0px rgba(191,200,209,0.5);
          span{
            color: #002C63;
          }
        }
      }
    }
    .more{
      padding-right: 40px;
      span{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #002C63;
        img {
          width: 10px;
          height: 10px;
          margin-left: 6px;
        }
        
      }
    }
  }
}
</style>
