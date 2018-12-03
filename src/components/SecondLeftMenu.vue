<template> 
  <div class="secondLeftMenu">
    <div class="title" @click="back"><img src="../assets/images/ico_back.png"/>{{pageTitle}}</div>
    <div class="secondTitle">{{secondTitle}}</div>
    <div class="secondLeftMenuList">
      <div class="secondLeftMenuItem" v-for="(item, index) in secondLeftMenuList" :key="index" :class="secondLeftMenuIndex == index?'active':''">
        <router-link :to="item.url">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        name: 'second-left-menu',
        props: {
          pageTitle:{
            type:String,
          },
          secondTitle:{
            type:String,
          },
          secondLeftMenuList: {
            type: Array
          },
          secondLeftMenuIndex: {
            type: Number
          }
        },
        data() {
            return {
              
            }
        },
        methods: {
          back(){
            this.$router.go(-1)
          }
        },
        created() {
          
        }        
    }
</script>
<style lang="less">
  .secondLeftMenu{
    width: 100%;
    padding: 70px 0 0 20px;
    text-align: left;
    .title{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 20px;
      line-height: 20px;
      color: #333;
      cursor: pointer;
      img{
        width: 15px;
        height: 18px;
        margin-right: 7px;
      }
    }
    .secondTitle{
      font-size: 24px;
      color: #333;
      font-weight: 600;
      margin: 20px 0 30px 22px;
    }
    .secondLeftMenuList{
      padding-left: 22px;
      .secondLeftMenuItem{
        margin-bottom: 24px;
        display: -webkit-box;
        white-space: normal;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        a{
          color: #333;
          font-size: 14px;
          line-height: 14px;
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
</style>