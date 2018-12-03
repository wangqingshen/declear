
<template>
    <div id="goTop">
      <div class="goTop" v-show="goTopShow" @click="goTop" title="返回顶部"><i class="goTopIcon"></i></div>
    </div>
</template>
<script>
    export default {
      name: "goTop",
      data(){
          return{
            scrollTop: '',
            goTopShow:false,
          }
        },
      methods:{
        handleScroll () {
          this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(this.scrollTop>200){
            this.goTopShow=true
          }else{
            this.goTopShow=false
          }
        },
        goTop(){
          let timer=null,_that=this;
          cancelAnimationFrame(timer)
          timer=requestAnimationFrame(function fn(){
            if(_that.scrollTop>0){
              _that.scrollTop-=50;
              document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
              timer=requestAnimationFrame(fn)
            }else {
              cancelAnimationFrame(timer);
              _that.goTopShow=false;
            }
          })
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
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