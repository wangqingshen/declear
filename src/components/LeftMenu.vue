<template> 
  <div class="leftMenu">
    <div class="title" @click="goLink">{{pageTitle}}</div>
    <div class="leftMenuList">
      <div class="leftMenuItem" v-for="(item, index) in leftMenuList" :key="index" :class="leftMenuIndex == index?'active':''">
        <router-link :to="item.url">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        name: 'left-menu',
        props: {
          pageTitle:{
            type:String,
          },
          leftMenuList: {
            type: Array
          },
          leftMenuIndex: {
            type: Number
          },
          link: {
            type: String
          }
        },
        data() {
            return {
              
            }
        },
        methods: {
           goLink(){
            this.$router.push({name: this.link})
           }
        },
        created() {
          
        }        
    }
</script>
<style lang="less">
  .leftMenu{
    width: 100%;
    padding: 70px 50px 70px 40px;
    text-align: left;
    .title{
      font-size: 32px;
      font-weight: bold;
      line-height: 32px;
      color: #333;
      margin-bottom: 30px;
      cursor: pointer;
    }
    .leftMenuList{
      .leftMenuItem{
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