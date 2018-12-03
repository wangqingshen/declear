<template>
    <div class="verify-component">
        <mu-button round class="verify" @click="getVerify" v-show="sendAuthCode">{{verifyText}}</mu-button>
        <span v-show="!sendAuthCode" class="verifyTime">{{verifyTime}}s</span>
    </div>
</template>
<script>
    export default{
        name: 'verifyCode',
        props: {
            mob: {
              type: String
            },
            type: {
              type: Number
            }
        },
        data() {
            return {
              sendAuthCode: true,
              verifyTime: 60,
              verifyText: '发送验证码',
              disabled: true
            }
        },
        methods: {
            getVerify(){
              // if(this.mob.length < 11) return
              if(!this.$regs.isPhone.test(this.mob)){
                this.$emit('emitSend', true, '请输入正确的手机号')
                return 
              }
              this.$emit('emitSend', false, '')
              this.$api.mobileVerifyCode({
                  cmd:{member:'mobileVerifyCode'},
                  data:{
                    mobile: this.mob,
                    type: this.type
                  }
              }).then(res=>{
                  console.log(res)
                  if(res.code===1){
                    this.verifyTime = 60
                    this.countDown()
                  }else{
                    this.$emit('emitSend', true, res.msg)
                  }
              }).catch(err=>{

              })
           },

           countDown(){
              this.sendAuthCode = false;
              var auth_timetimer =  setInterval(()=>{
                  this.verifyTime--;
                  if(this.verifyTime<=0){
                      this.verifyText='重新获取'
                      this.sendAuthCode = true;
                      clearInterval(auth_timetimer);
                  }
              }, 1000);
           }
        },
        created() {
        }        
    }
</script>
<style lang="less">
    .mu-button{
      &.verify{
        border: 1px solid #002C5A;
        border-radius: 4px;
        color: #002C5A;
        padding: 0;
        width: 100px;
        height: 32px;
        line-height: 32px;
        box-sizing: border-box;
        font-size:12px;
        background: transparent;
        margin: 0;
        &.hover:before{
          background: transparent;
        }
      }
    }
    .verifyTime{
        display: block;
        border:1px solid #ccc;
        border-radius: 4px;
        color: #999;
        padding: 0;
        width: 100px;
        height: 32px;
        line-height: 32px;
        font-size:12px;
        box-sizing: border-box;
    }
</style>