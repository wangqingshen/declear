<template> 
  <mu-popover cover placement="bottom" :open="popupStatus" class="popup-menu">
    <div class="inner">
      <div class="popup-header">
        <div class="logo">
          <img src="../assets/images/logo_header.png" />
        </div>
        <div class="close-popup" @click="close" title=""></div>
      </div>
      <div class="popup-content">
        <div class="popupMenuList">
          <div class="popupMenuItem" v-for="(item, index) in popupMenuList" :key="index">
            <router-link :to="item.url">{{item.name}}</router-link>
          </div>
        </div>
      </div>
      <div class="popup-footer">
        <p>服务协议</p>
        <p>© 2018 青溪 蜀ICP备14018979号</p>
      </div>
    </div>
  </mu-popover>
</template>
<script>
    export default{
        name: 'popup-menu',
        props: {
          popupStatus:{
            type: Boolean
          }
        },
        data() {
            return {
              popupMenuList: [
                {name:'行业动态',url:'/account'},
                {name: '关于我们', url:'/account/register'},
                {name: '帮助中心', url:'/more/us'},
              ],
              
            }
        },
        methods: {
           close(){
            this.$emit('emitClose')
           }
        },
        mounted(){
         
        },
        created() {
          
        }        
    }
</script>
<style lang="less">
  .popup-menu{
    left: 0;
    top: 0;
    min-width: 350px;
    width: 28%;
    min-height: 100%;
    overflow: auto!important;
    box-shadow:none!important;
    padding: 22px 20px 25px 30px;
    height: 100%;
    .popup-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo{
          width: 36px;
          height: 36px;
          border-radius: 50%;
          img{
            width: 100%;
            height: 100%;
          }
      }
      .close-popup{
        cursor: pointer;
        width: 18px;
        height: 18px;
        background-image: url(../assets/images/ico_close_norm.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        &:hover{
          background-image: url(../assets/images/ico_close_selected.png);
        }
      }
    }
    .popup-content{
      width: 100%;
      padding: 70px 50px 70px 40px;
      text-align: left;
      .popupMenuList{
        .popupMenuItem{
          margin-bottom: 24px;
          a{
            color: #333;
            font-size: 14px;
            line-height: 16px;
            &.router-link-exact-active {
              color: #002c5a;
              font-weight: 600;
            }
          }
          &:hover{
            a{
              color: #002c5a;
            }
          }
        }
      }
    }
    .popup-footer{
      position: absolute;
      width: 100%;
      font-size: 14px;
      color: #999;
      padding-left: 70px;
      left: 0;
      bottom: 60px;
      text-align: left;
      p {
        margin-bottom: 5px;
      }
    }
  }
</style>