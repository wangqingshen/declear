import http from '../axios/index'
const api={}
let url=''
// 获取手机验证码
api.mobileVerifyCode = (parmas)=>http.post(process.env.VUE_APP_APIHOST+'/member/mobileVerifyCode',parmas, false)

// 用户登录
api.login = (parmas)=>http.post(process.env.VUE_APP_APIHOST+'/member/login',parmas, false)

// 用户注册
api.register = (parmas)=>http.post(process.env.VUE_APP_APIHOST+'/member/register',parmas, false)

// 获取配置项
api.getFrom = (parmas)=>http.post(process.env.VUE_APP_APIHOST+'/Sys/getFrom',parmas, false)

export default api