<template>
  <div class="content">
    <div class="banner">
      广告位
    </div>
    <div class="home-md">
      <div class="home-md-l">
        <h1>青溪联盟</h1>
        <p class="b">埋头苦干，为生态环境创造真正的价值！</p>
        <p>加入我们，<router-link to="/">了解更多></router-link></p>
      </div>
      <div class="home-md-r">
        <div class="img">
          <img src="../../assets/images/blue_logo.png" />
        </div>
        <div class="home-md-info">
          <p class="txt">环保管家网</p>
          <p class="link">2E2C.COM</p>
        </div>
      </div>
    </div>
    <div class="home-jx">
      <div class="home-jx-t">
        <h1>管家精选</h1>
        <h2>在环保管家网发现更多有价值的服务</h2>
      </div>
      <div class="content">
          <div class="jx-item">
              <div class="jx-item-top">
                <img src="../../assets/images/icon_card.png">
              </div>
              <div class="jx-item-content">
                  <h1>排污许可证</h1>
                  <p class="b">最新申请与核发</p>
                  <p>正在进行中</p>
                  <router-link to="/">了解更多></router-link>
              </div>
          </div>
          <div class="jx-item">
              <div class="jx-item-top">
                <img src="../../assets/images/icon_serve.png">
              </div>
              <div class="jx-item-content">
                  <h1>环保服务</h1>
                  <p class="b">不同的城市</p>
                  <p>有不同的要求</p>
                  <router-link to="/">了解更多></router-link>
              </div>
          </div>
          <div class="jx-item">
              <div class="jx-item-top">
                <img src="../../assets/images/icon_news.png">
              </div>
              <div class="jx-item-content">
                  <h1>最新动态</h1>
                  <p class="b">青溪生活</p>
                  <p>从这里开始</p>
                  <router-link to="/">了解更多></router-link>
              </div>
          </div>
      </div>
    </div>
    <div class="home-hf">
      <div class="home-hf-t">
        <h1>排污许可证的申请与核发</h1>
        <p>涉及200多个国民经济行业分类的排污许可证申请与核发，这里提供了场景化的解决方案，根据不同行业的申请与核发技术规范，
        不同污染物的排放限值执行标准，不同地区的自由裁量要求，你会享受到专业、贴心的帮助</p>
      </div>
      <section>
        <div class="video">我是视频播放占位符</div>
      </section>
    </div>
    <div class="home-b">
      <h1>其他环保服务的办理</h1>
      <div class="line"></div>
      <div class="home-b-desc">
         <p>新建、改建、扩建、已建等生产型企业，全生命周期内环境影响评价、环境工程治理、竣工环境保护验收、
      环境保护设施运营、自行监测、环境保护税、排污权交易等环保工作，这里提供了流程化的解决方案，
      相信我们，你会在这里寻找到本地化的专业服务</p>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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
    
  }
}
</script>

<style lang="less" scoped>
.content{
  padding-bottom: 80px;
  .banner{
    width: 100%;
    height: 430px;
    background-image: url(../../assets/images/banner/home.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .home-md{
    padding: 60px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .home-md-l{
      text-align: left;
      h1{
        font-size: 26px;
        color: #333;
        line-height: 26px;
        margin-bottom: 20px;
      }
      p{
        font-size: 16px;
        color: #666;
        line-height: 16px;
        &.b{
          margin-bottom: 12px;
        }
        a{
          color: #002c5a;
        }
      }
    }
    .home-md-r{
      display: flex;
      align-items: center;
      .img{
        width: 60px;
        height: 60px;
        background: #002c5a;
        border-radius: 50%;
        margin-right: 20px;
      }
      .home-md-info{
        color: #333;
        line-height: 36px;
        .txt{
          font-size: 28px;
          font-weight: bold; 
        }
        .link{
          font-size: 26px;
        }
      }
    }
  }
  .home-jx{
    width: 100%;
    height: 557px;
    background: #f6f6f6;
    padding: 50px 110px;
    .home-jx-t{
      margin-bottom: 50px;
      h1{
        font-size: 28px;
        line-height: 28px;
        margin-bottom: 17px;
      }
      h2{
        font-size: 16px;
        line-height: 16px;
      }
    }
    .content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .jx-item{
        width: 200px;
        transition: all 0.2s ease;
        &:hover{
          transform: translate3d(0,-4px,0);
        }
        .jx-item-top{
          position: relative;
          z-index: 10;
          width: 90px;
          height: 90px;
          background: #fff;
          border-radius: 50%;
          margin: auto;
          img{
            width: 100%;
          }
        }
        .jx-item-content{
          width: 100%;
          height: 300px;
          background: #fff;
          border:1px solid rgba(230, 230, 230, 1);
          box-shadow:0px 1px 4px 0px rgba(51,51,51,0.2);
          padding-top: 94px;
          margin-top: -45px;
          h1{
            font-size: 16px;
            line-height: 36px;
            margin-bottom: 30px;
          }
          p{
            font-size: 14px;
            color: #666;
            line-height: 14px;
            margin-bottom: 60px;
            &.b {
              margin-bottom: 10px;
            }
          }
          a{
            color: #002c5a;
            font-size: 12px;
          }

        }
      }
    }
  }
  .home-hf{
    padding: 60px 50px 0;
    background: #fff;
    .home-hf-t{
      h1{
        font-size: 28px;
        line-height: 28px;
        margin-bottom: 40px;
      }
      p{
        font-size: 14px;
        line-height: 25px;
      }
      margin-bottom:50px;
    }
    section{
      padding-bottom: 60px;
      border-bottom: 1px solid #e6e6e6;
      .video{
        background: #f5f5f5;
        font-size: 20px;
        color: #ccc;
        height: 450px;
        line-height: 450px;
      }
    }
  }
  .home-b{
    padding: 60px 50px 0;
    h1{
        font-size: 28px;
        line-height: 28px;
    }
    .line{
      width: 50px;
      height: 5px;
      background: #002C5A;
      margin: 30px auto 60px;
    }
    .home-b-desc{
      padding-bottom: 80px;
      border-bottom: 1px solid #e6e6e6;
      p{
        padding: 0 70px;
        font-size: 14px;
        line-height: 25px;
      }
    }
    
  }
}
</style>
