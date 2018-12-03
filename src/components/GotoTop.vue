
<template>
    <mu-scale-transition>
      <div class="goTop" v-show="goTopShow" @click="goTop" title="返回顶部"><i class="goTopIcon"></i></div>
    </mu-scale-transition>
</template>
<script>
    export default {
      name: "goTop",
      props: {},
      data(){
          return{
            scrollTop: '',
            scrollBox: '',
            goTopShow:false,
          }
        },
      methods:{
        handleScroll() {
          this.scrollTop = this.scrollBox.scrollTop
          if(this.scrollTop>200){
            this.goTopShow=true
          }else{
            this.goTopShow=false
          }
        },
        goTop(){
          let timer=null,_that=this
          cancelAnimationFrame(timer)
          timer=requestAnimationFrame(function fn(){
            if(_that.scrollTop>0){
              _that.scrollTop-=50
              _that.scrollBox.scrollTop = _that.scrollTop
              timer=requestAnimationFrame(fn)
            }else {
              cancelAnimationFrame(timer)
              _that.goTopShow=false;
            }
          })
        }
      },
      mounted() {
        this.scrollBox = this.$parent.$refs.scrollBox
        console.log(this.scrollBox)
        this.$nextTick(res=>{
          this.scrollBox.addEventListener('scroll', this.handleScroll)
        })
      },
      destroyed(){
        console.log(123)
        this.scrollBox.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>
 
<style lang="less" scoped>
  .goTop{
    position: fixed;
    right: 30px;
    bottom: 50px;
    width: 40px;
    height: 40px;
  }
  .goTopIcon{
    cursor: pointer;
    display: block;
    width: 40px;
    height: 40px;
    background-image: url("../assets/images/ico_top_norm.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: all 0.8s ease;
  }
  .goTop:hover{
    .goTopIcon{
      background-image: url("../assets/images/ico_top_selected.png");
    }
  }
</style>