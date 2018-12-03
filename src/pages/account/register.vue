<template>
  <div class="content">
    <div class="desc">
    </div>
    <div class="form-filed">
      <mu-container>
        <mu-form :model="form">
          <mu-form-item>
            <mu-text-field v-model="form.true_name" ref="trueName" @change="inputChange(3)" placeholder="请输入姓名" underline-color="#002C5A" color="#ccc" max-length="8"></mu-text-field>
          </mu-form-item>
          <mu-form-item>
            <mu-text-field v-model="form.mobile" ref="mobile" @change="inputChange(1)" placeholder="请输入手机号" max-length="11" underline-color="#002C5A" color="#ccc"></mu-text-field>
          </mu-form-item>
          <mu-form-item class="input-verify">
            <mu-text-field v-model="form.verify_code" ref="verifyCode" @change="inputChange(2)" placeholder="请输入短信验证码" max-length="6" underline-color="#002C5A" color="#ccc">
              <label>验证码</label>
              <VerifyCode :mob="form.mobile" :type="2" @emitSend="verifySend"/>
            </mu-text-field>
          </mu-form-item>
          <mu-form-item>
            <mu-select v-model="curOption" full-width underline-color="#002C5A" color="#ccc" popover-class="#002C5A" @change="selectChange">
              <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
            </mu-select>
          </mu-form-item>
        </mu-form>
        <div class="tipTxt">这很重要，环保管家网将核实身份后开通相应权限！</div>
        <div class="btn-wrap">
          <mu-button color="#002C5A" class="login" @click.native="register" v-loading="loginLoading" data-mu-loading-size="26" data-mu-loading-color="#002C5A">注册</mu-button>
        </div>
        <div class="tip-wrap" v-show="errorState">
          <mu-alert color="#FFEBEB">
            {{errorTip}}
          </mu-alert>
        </div>
      </mu-container>
    </div>
  </div>
</template>

<script>
import VerifyCode from '@/components/VerifyCode'
export default {
  name: 'register',
  components:{
   VerifyCode
  },
  data () {
    return {
      form: {
        true_name: '',
        mobile: '',
        verify_code: '',
        from: 0
      },
      loginLoading: false,
      curOption: '请选择来自哪里',
      options: ['请选择来自哪里'],
      errorTip: '请输入正确的手机号',
      errorState: false
    }
  },
  methods: {
    selectChange(val){
      this.options.filter((item, index)=>{
        if(item == val){
          this.form.from = index
        }
      })
    },
    inputChange(type){
      if(type == 1){
        this.form.mobile.length == 11?this.errorState = false: ''
      }else if(type == 2){
        this.form.verify_code.length == 6?this.errorState = false:''
      }else if(type == 3){
        this.form.true_name.length?this.errorState=false:''
      }
    },
    register(){
      if(!this.form.true_name.length){
        this.$refs.trueName.$el.lastChild.children[0].focus()
        this.errorState = true
        this.errorTip = '请输入有效的姓名'
        return
      }
      if(!this.$regs.isPhone.test(this.form.mobile)){
        this.$refs.mobile.$el.lastChild.children[0].focus()
        this.errorState = true
        this.errorTip = '请输入正确的手机号'
        return
      }
      if(this.form.verify_code.length != 6){
        this.$refs.verifyCode.$el.lastChild.children[0].focus()
        this.errorState = true
        this.errorTip = '请输入六位验证码'
        return
      }
      if(!this.form.from) {
        this.errorState = true
        this.errorTip = '请选择来自哪里'
        return
      }
      this.errorState = false
      this.errorTip = ''
      this.loginLoading = true
      this.$api.register({
          cmd:{member:'register'},
          data:this.form
      }).then(res=>{
          console.log(res)
          this.loginLoading = false
          if(res.code == 1) {
            this.$toast.success('注册成功，跳转至登录页进行登录');
            this.$router.push({name: 'login'})
          }else{
            this.errorState = true
            this.errorTip = res.msg
          }
      }).catch(err=>{

      })
    },
    verifySend(state, txt){
      this.errorState = state
      this.errorTip = txt
    },
    getFrom(){
      this.$api.getFrom({
          cmd:{Sys:'getFrom'},
          data:{}
      }).then(res=>{
          if(res.code == 1) {
            Object.keys(res.data).map((item)=>{
              this.options.push(res.data[item])
            })
          }
      }).catch(res=>{

      })
    }
  },
  computed: {
    
  },
  created() {
    this.getFrom()
  }
}
</script>

<style lang="less" scoped>
.content{
  height: 100%;
  .desc{
    width: 100%;
    height: 200px;
    background-image: url(../../assets/images/banner/login.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .form-filed{
    display: flex;
    align-items: center;
    height: calc(100% - 200px);
    /*padding-top: 58px;*/
    .container{
      width: 360px;
      padding: 0;
      .mu-input-content {
        label{
          position: absolute;
          left: 0;
          top: 9px;
          font-size: 12px;
          color: #002C5A;
        }
      }
      .tipTxt{
        font-size: 12px;
        color: #666;
        margin-top: 10px;
        text-align: left;
      }
      .btn-wrap{
        text-align: right;
        padding-top: 30px;
        .mu-button{
          width: 140px;
          height: 40px;
          line-height: inherit;
          border-radius: 6px;
        }
      }
      .tip-wrap{
        margin-top: 15px;
        /*margin-bottom: 25px;*/
        .mu-alert{
          padding: 0;
          height: 30px;
          color: #D80007;
          font-size: 12px;
          text-align: center;
          line-height: inherit;
          border-radius: 0;
          padding-left: 12px;
          min-height: inherit;
        }
      }
    }
  }
}
</style>
