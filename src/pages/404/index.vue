<template>
    <div class="no-found">
    	<div class="no-found-inner">
    		<!-- <div class="img">404</div> -->
    		<div class="txt">环保管家网全新改版，十二月将最新上线，敬请期待！</div>
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
			width: 100%;
			position: absolute;
	        top: 50%;
	        left: 50%;
	        transform: translate(-50%, -50%);
	        font-weight: 600;
			.img{
				font-size: 150px;
				color: #002C5A;
			}
			.txt{
				font-size: 40px;
				text-shadow: 10px 10px 10px #ccc;
				color:#002C5A;
			}
		}
	}
</style>
