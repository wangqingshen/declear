<template> 
<mu-container class="sugges-container">
  <div class="sugges-btn" @click="openState = true">
    <img src="../assets/images/ico_suggest.png" />
  </div>
  <mu-dialog :open.sync="openState" transition="slide-top">
    <div class="sugges-title" slot="title">
        <span>意见反馈</span>
        <span class="close"  @click="openState=false">关闭</span>
    </div>
    <div class="sugges-content">
        <textarea placeholder="请填写您的问题或建议（限200字以内）" maxlength="200" v-model="suggestion"></textarea>
    </div>
    <div class="btn-wrap">
      <mu-button color="#002C5A" class="submit" @click.native="submit" v-loading="submitLoading" data-mu-loading-size="26" data-mu-loading-color="#002C5A">提交</mu-button>
    </div>
  </mu-dialog>
</mu-container>
</template>
<script>
    export default{
        name: 'sugges-dialog',
        props: {
          
        },
        data() {
            return {
              submitLoading: false,
              openState: false,
              suggestion: ''
            }
        },
        methods: {
          submit(){

          }
        },
        mounted(){
         
        },
        created() {
          
        }        
    }
</script>
<style lang="less">
 .sugges-container{
    .sugges-btn{
      position: fixed;
      right: 10px;
      bottom: 60px;
      width: 40px;
      height: 40px;
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
      }
    }
 }
 .mu-dialog-wrapper{
  .mu-dialog{
    box-shadow:0px 2px 6px 0px rgba(51,51,51,0.2);
    border-radius:4px;
    width: 450px;
    max-width: 450px;
    height: 400px;
    max-height: 400px;
    .mu-dialog-title{
      padding: 20px;
      line-height: 16px;
      border-bottom: 1px solid #e6e6e6;
      .sugges-title{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          font-size: 16px;
          color: #333;
          &.close{
            cursor: pointer;
            font-size: 0;
            background-image: url(../assets/images/ico_close_norm.png);
            width: 13px;
            height: 13px;
            background-size: cover;
            background-repeat: no-repeat;
            &:hover{
              background-image: url(../assets/images/ico_close_selected.png);
            }
          }
        }
      }
    }
    .mu-dialog-body{
      padding: 30px 20px 0;
      .sugges-content{
          width: 100%;
          textarea{
            width: 100%;
            height: 190px;
            border: 1px solid #ccc;
            padding: 20px;
            overflow-y: auto;
            font-size: 14px;
            resize:none;
          }
      }
      .btn-wrap {
        margin-top: 40px;
        .submit{
          width: 200px;
          height: 40px;
        }
      }
    }
  }
}
</style>