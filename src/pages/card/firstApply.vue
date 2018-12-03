<template>
  <div class="container">
    <p class="mark">查阅环境影响评价文件，根据<a href="">《固定污染源排污许可分类管理名录》</a>核实企业的行业类别及代码。</p>
    <section>
        <div class="category-item" v-for="(item,index) in category" :key="index">
            <h1>{{item.title}}</h1>
            <div class="next">
              <div class="next-item" v-for="(_item, _index) in item.next" :key="_index" >
                <mu-tooltip :open.sync="_item.state">
                  <div slot="content">
                    <h1>说明</h1>
                    <p>{{_item.tip}}</p>
                  </div>
                  <div class="next-item-inner" :class="_item.disabled? 'disabled': _item.hot?'hot':''" @click="goPage(_item)">
                    <span>{{_item.title}}</span>
                  </div>
                </mu-tooltip>
              </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'firstApply',
  components:{
   
  },
  data () {
    return {
      category: [
        {
          id: '03',
          title: '畜牧业A03',
          next: [
            {
              id: '031',
              title: '牲畜饲养（A031）',
              tip: '肉禽类罐头制造（猪肉、牛肉、羊肉、兔肉）、其他畜类及杂碎罐头（鸡、鸭、鹅）、其他禽类罐头、猪肚汤、牛尾汤罐头执行C145行业',
              state: false,
              next: []
            },
            {
              id: '032',
              title: '家禽饲养（A032）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              disabled: true,
              state: false,
              next: []
            },
          ]
        },
        {
          id: '13',
          title: '农副食品加工业C13',
          next: [
            {
              id: '031',
              title: '谷物磨制（C131）',
              tip: '谷物类产品轻松的就是靠的见识到了',
              state: false,
              next: []
            },
            {
              id: '032',
              title: '饲料加工（C132）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              state: false,
              next: []
            },
            {
              id: '032',
              title: '鱼糜制品及水产品干腌制加工（C1362）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              state: false,
              hot: true,
              next: []
            },
            {
              id: '032',
              title: '水产品冷冻加工（C1361）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              state: false,
              next: []
            },
            {
              id: '032',
              title: '蔬菜、菌类、水果和坚果加工（C137）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              state: false,
              next: []
            },
          ]
        },
        {
          id: '03',
          title: '畜牧业A03',
          next: [
            {
              id: '031',
              title: '牲畜饲养（A031）',
              tip: '肉禽类罐头制造（猪肉、牛肉、羊肉、兔肉）、其他畜类及杂碎罐头（鸡、鸭、鹅）、其他禽类罐头、猪肚汤、牛尾汤罐头执行C145行业',
              next: []
            },
            {
              id: '032',
              title: '家禽饲养（A032）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              disabled: true,
              next: []
            },

          ]
        },
        {
          id: '13',
          title: '农副食品加工业C13',
          next: [
            {
              id: '031',
              title: '谷物磨制（C131）',
              tip: '谷物类产品轻松的就是靠的见识到了',
              next: []
            },
            {
              id: '032',
              title: '饲料加工（C132）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              next: []
            },
            {
              id: '032',
              title: '鱼糜制品及水产品干腌制加工（C1362）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              hot: true,
              next: []
            },
            {
              id: '032',
              title: '水产品冷冻加工（C1361）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              next: []
            },
            {
              id: '032',
              title: '蔬菜、菌类、水果和坚果加工（C137）',
              tip: '蛋品加工（干蛋品、冰蛋品、再制蛋、乱清蛋白）请按1393行业执行',
              next: []
            },
          ]
        },
      ]
    }
  },
  methods: {
    goPage(item){
      item.state = false
      this.$router.push({name: 'category', params:{secondTitle: item.title}})
    }
  },
  computed: {
   
  },
  created() {
    
  },
}
</script>

<style lang="less" scoped>
.container{
  padding: 30px 50px 0;
  box-sizing: border-box;
  p.mark{
    text-align: left;
    font-size: 14px;
    color: #333;
    line-height: 14px;
    a{
      color: #002C5A;
    }
  }
  section{
    .category-item{
      width: 100%;
      h1{
        font-size: 14px;
        color: #333;
        font-weight: bold;
        text-align: left;
        margin: 40px 0 30px;
      }
      .next {
        border-bottom: 1px solid #E6E6E6;
        text-align: left;
        .next-item{
          display: inline-block;
          width: calc(100% / 3);
          height: 48px;
          line-height: 48px;
          margin-bottom: 20px;
          text-align: center;
          .next-item-inner{
            position: relative;
            cursor: pointer;
            width: 250px;
            height: 100%;
            border:1px solid rgba(204, 204, 204, 1);
            box-shadow:0px 2px 8px 0px rgba(191,200,209,0.5);
            border-radius:4px;   
            transition: all 0.5s;        
            span{
              display: -webkit-box;
              white-space: normal;
              word-break: break-all;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              text-overflow: ellipsis;
              padding: 0 10px;
              box-sizing: border-box;
              text-align: center;
              font-size: 12px;
              color: #333;
              width: 100%;
              height: 100%;
            }
            &.disabled{
              position: relative;
              border-color: #e6e6e6;
              span{
                color: #999;
              }
              &:after{
                width: 40px;
                height: 18px;
                content: '';
                position: absolute;
                top: -10px;
                right: -8px;
                background-image: url('../../assets/images/ico_daiding.png');
                background-size: contain;
              }
            }
            &.hot{
              position: relative;
              &:after{
                width: 40px;
                height: 18px;
                content: '';
                position: absolute;
                top: -10px;
                right: -8px;
                background-image: url('../../assets/images/ico_hot.png');
                background-size: contain;
              }
            }
            &:hover{
              transform: translateY(-4px);
            }
          }
        }
      }
    }
  }
}
</style>
