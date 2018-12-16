<template>
    <div class="bus-list">
    	<!-- 顶部 -->
        <div class="map-top">
        	<div class="search-box" @click="goToSearch">
        		<image class="search-img" src="../../static/image/search.png"></image>
        		<input class="search-input" type="text" placeholder="输入目的地/电站名" readonly=true>
        	</div>
        	<image class="listImg-img" src="../../static/image/listImg.png"></image>
        </div>
        <div class="list-wrap">
			<div class="choose">
				<div class="chos-btn">
					<span class="on">离我最近</span>
					<span>价格最低</span>
				</div>
				<div class="chos-btna">
					<span>筛选</span><image src="../../static/image/screen.png"></image>
				</div>
			</div>
			<div class="cur-location">
				北京市朝阳区大屯街道
			</div>
			<div class="list-inner">

				<div class="list-item">
					<div class="item-t">
						<image src="http://g.hiphotos.baidu.com/image/pic/item/5bafa40f4bfbfbed5572eb3875f0f736afc31f4a.jpg"></image>
						<div class="item-r">
							<div class="it-n">
								<span>回复康师傅</span>
								<p><span>快0/0</span><span>慢0/0</span></p>
							</div>
							<div class="it-p">
								当前<span>2388.0</span>元/度（含服务费）
							</div>
							<div class="it-s">
								<p><span v-for="item in stars">{{item}}</span></p>
								<span>最近充电</span>
								<span>朝阳区1.38km</span>
							</div>
						</div>
					</div>
					<div class="item-f">
						<span>个人共享</span><span>个享</span><span>个人共</span>
					</div>
				</div>

				<div class="list-item">
					<div class="item-t">
						<image src="http://g.hiphotos.baidu.com/image/pic/item/5bafa40f4bfbfbed5572eb3875f0f736afc31f4a.jpg"></image>
						<div class="item-r">
							<div class="it-n">
								<span>回复康师傅</span>
								<p><span>快0/0</span><span>慢0/0</span></p>
							</div>
							<div class="it-p">
								当前<span>2388.0</span>元/度（含服务费）
							</div>
							<div class="it-s">
								<p><span v-for="item in stars">{{item}}</span></p>
								<span>最近充电</span>
								<span>朝阳区1.38km</span>
							</div>
						</div>
					</div>
					<div class="item-f">
						<span>个人共享</span><span>个享</span><span>个人共</span>
					</div>
				</div>

				<div class="list-item">
					<div class="item-t">
						<image src="http://g.hiphotos.baidu.com/image/pic/item/5bafa40f4bfbfbed5572eb3875f0f736afc31f4a.jpg"></image>
						<div class="item-r">
							<div class="it-n">
								<span>回复康师傅</span>
								<p><span>快0/0</span><span>慢0/0</span></p>
							</div>
							<div class="it-p">
								当前<span>2388.0</span>元/度（含服务费）
							</div>
							<div class="it-s">
								<p><span v-for="item in stars">{{item}}</span></p>
								<span>最近充电</span>
								<span>朝阳区1.38km</span>
							</div>
						</div>
					</div>
					<div class="item-f">
						<span>个人共享</span><span>个享</span><span>个人共</span>
					</div>
				</div>

			</div>

		</div>

    </div>
</template>

<script>

    export default {
        data() {
            return{
				stars: [1,2,3,4,5]
            }
        },
        mounted(){

        },

        methods: {
            // 去搜索页面
            goToSearch() {
                wx.navigateTo({
                    url: '/pages/search/main'
                })
            },
        },
    };
</script>

<style>
	@import "../../assest/fonts/iconfont.css";
	@keyframes mymove {
        from {bottom:-279rpx;}
        to {bottom:0px;}
    }

    @-webkit-keyframes mymove{
        from {bottom:-279rpx;}
        to {bottom:0px;}
    }
	.bus-list{
		padding-top: 70rpx;
	}

    .map-top{
    	padding: 15rpx;
    	background: #0086b3;
    	box-sizing: border-box;
    	width: 100%;
		top: 0;
    	position: fixed;
    }
    .search-box{
    	height: 70rpx;
    	width: 88%;
    	background: #fff;
    	border-radius: 10rpx;
    	padding: 0 15rpx;
    	box-sizing: border-box;
    	position: relative;
    }
    .top-layer{
    	background: rgba(0,0,0,.6);
    	position: fixed;
    	width: 100%;
    	height: 100rpx;
    	left:0;
    	top:0;
    	z-index:5;
	}
    .search-img{
    	width: 30rpx;
    	height: 30rpx;
    	position: absolute;
    	left:15rpx;
    	top: 50%;
    	margin-top: -15rpx;
    }
    .search-input{
    	display: inline-block;
    	height: 70rpx;
    	margin-left: 45rpx;
    	font-size: 16px;
    }
    .listImg-img{
    	width: 50rpx;
    	height: 50rpx;
    	position: absolute;
    	right: 15rpx;
    	top: 50%;
    	margin-top: -25rpx;

    }
    .list-wrap{
		width: 100%;
		background: #f4f4f4;
        margin-top: 44rpx;
	}
	.choose{
		display: flex;
		display: -webkit-flex;
		height: 80rpx;
		color: #797979;
	}
	.chos-btn{
		width: 78%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.chos-btn span{
		width: 40%;
		background: #f4f4f4;
		border-radius: 8rpx;
		font-size: 24rpx;
		text-align: center;
		line-height: 48rpx;
	}
	.chos-btn .on{
		background: #47b0ce;
		color: #ffffff;
	}
	.chos-btna{
		width: 22%;
		font-size: 24rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.chos-btna::before{
		content: '';
		height: 70%;
		width: 0;
		border-left: 1rpx solid #f4f4f4;
		position: absolute;
		left: -1rpx;
		top: 15%;
	}
	.chos-btna span{
		padding-left: 10rpx;
	}
	.chos-btna image{
		width: 28rpx;
		height: 28rpx;
	}
	.cur-location{
		height: 48rpx;
		line-height: 48rpx;
		text-align: center;
		font-size: 24rpx;
		color: #797979;
		background: #eaeaea;
	}
	.list-inner{
		border-top: 1rpx solid transparent;
	}
	.list-item{
		width: 100%;padding: 20rpx 30rpx;
		margin-top: 20rpx;background: #ffffff;box-sizing: border-box;
	}
	.list-item:nth-child(1){
		margin: 0;
	}
	.item-t{
		display: flex;
		display: -webkit-flex;
	}
	.item-t image{
		width: 230rpx;height: 230rpx;
		border-radius: 8rpx;
	}
	.item-r{
		flex-grow: 1;
		padding-left: 16rpx;
		font-size: 28rpx;
		display: -webkit-flex;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.it-n,.it-s{
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
	}
	.it-s p span{

	}
	.item-f{
		height: 88rpx;
		display: flex;
		display: -webkit-flex;
		border-top: 2rpx dashed #f4f4f4;
		font-size: 24rpx;
		margin-top: 20rpx;
		align-items: center;
	}
	.item-f span{
		padding: 0 16rpx;
		border: 1rpx solid #47b0ce;
		color: #47b0ce;
		margin-right: 20rpx;
		border-radius: 6rpx;
	}
	.it-p span{
		color: #e08c70;
	}


</style>
