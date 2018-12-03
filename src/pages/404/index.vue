<template>
    <div class="no-found">
    	<div class="no-found-inner">
    		<img src="../../assets/images/404.png" />
    		<p class="p1">青溪社区的小伙伴正在黑灯瞎火的开发中</p>
    		<p class="p2">暂先了解</p>
    		<mu-button color="#fff" class="login" textColor="#333" to="/card" >排污许可证</mu-button>
    	</div>
    </div>
</template>
<script>
    export default{
        name:'noFound',
        data () {
		    return {
		      
		    }
		},
		methods:{

		},
		created(){

		}
    }
</script>
<style lang="less" scoped>
	.no-found{
		width: 100%;
		height: 100%;
		position: relative;
		.no-found-inner{
			img {
				width: 240px;
				height: 240px;
			}
			.p1{
				font-size: 18px;
				color: #666;
				margin: 50px 0 30px;
			}
			.p2{
				font-size: 14px;
				color: #999;
				margin-bottom: 10px;
			}
			.mu-button{
				width: 240px;
				height: 40px;
			}
		}
	}
</style>
