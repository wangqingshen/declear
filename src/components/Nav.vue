<template> 
  <div class="top-nav">
    <div class="logo" @click="goHome">
      <img src="../assets/images/logo_header.png" />
    </div>
    <div class="nav-list">
      <div class="nav-item" v-for="(item,index) in nav" :key="index" :class="index == curIndex?'active':''" @click="navChange(index)">
        <div class="nav-txt">{{item.name}}</div>
      </div>
    </div>
    <div class="nav-toggle" @click="popupEvt" ref="popupBtn"></div>
    <PopupMenu :popupStatus="popupStatus" @emitClose="popupClose"/>
  </div>
</template>
<script>
    import PopupMenu from '@/components/PopupMenu'
    export default{
        name: 'top-nav',
        props: {
          curIndex:{
            type:Number,
          }
        },
        components:{PopupMenu},
        data() {
            return {
              nav: [{
                name: '我的环保',
                url: 'home'
              },{
                name: '个人中心',
                url: 'login'
              }],
              popupStatus: false
            }
        },
        methods: {
           goHome(){
              this.$router.push({name: 'home'})
           },
           navChange(index){
              if(index == this.curIndex) return
              this.$router.push({name: this.nav[index].url})
           },
           popupEvt(){
              this.popupStatus = true
           },
           popupClose(){
            this.popupStatus = false
           }
        },
        mounted(){
        },
        created() {
          
        }        
    }
</script>
<style lang="less">
    .top-nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo{
          cursor: pointer;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          img{
            width: 100%;
            height: 100%;
          }
      }
      .nav-list{
        display: flex;
        font-size: 14px;
        color: #010101;
        font-weight: bold;
        flex: 1;
        .nav-item {
          padding-bottom: 8px;
          margin-left: 30px;
          &.active{
            position: relative;
            .nav-txt{
              color: #002c5a;
            }
            &:after{
              content: '';
              width: 100%;
              height: 2px;
              background: #002c5a;
              position: absolute;
              left: 0;
              bottom: 0;
            }

          }
          &:hover {
            transform: all 0.5s ease;
            color: #002c5a;
            &:not(.active){
              cursor: pointer;
            }
          }
        }
      }
      .nav-toggle{
        cursor: pointer;
        width: 20px;
        height: 20px;
        background: url(../assets/images/ico_fold.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
</style>