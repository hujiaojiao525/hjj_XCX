<template>
    <div class="bus-list">
    	<!-- 顶部 -->
        <div class="map-top">
        	<div class="search-box" @click="goToSearch">
        		<image class="search-img" src="../../static/image/search.png"></image>
        		<input class="search-input" type="text" placeholder="输入目的地/电站名" readonly=true>
        	</div>
        	<image @click="goToMap" class="listImg-img" src="../../static/image/map.png"></image>
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
						<image src="http://picture.51auto.com/car/201812/16/pic820181216101501-gFiag-mid.jpg"></image>
						<div class="item-r">
							<div class="it-n">
								<h2>回复康师傅</h2>
								<p><span class="quick-span">快0/0</span><span class="slow-span">慢0/0</span></p>
							</div>
							<div class="it-p">
								<p>当前<span>2388.0</span>元/度(含服务费)</p>
								<p>1832.元/度</p>
							</div>
							<div class="it-s">
								<div>
									<span class="star-container">
				                    	<span class="star"></span>
				                    	<span class="star-bg" :style="{width : (50*(93/100))+'px'}"></span>
			                    	</span>
									<span>最近充电<span>1</span>分钟前</span>
								</div>
								<span class="pos-font">朝阳区|1.8km</span>
							</div>
						</div>
					</div>
					<div class="item-f">
						<span>个人共享</span>
						<span>个享</span>
						<span>个人共</span>
						<span class="free-border">芝麻信用·免押金</span>
					</div>
				</div>

			</div>
			<div class="list-inner">
				<div class="list-item">
					<div class="item-t">
						<image src="http://picture.51auto.com/car/201812/16/pic820181216101501-gFiag-mid.jpg"></image>
						<div class="item-r">
							<div class="it-n">
								<h2>回复康师傅</h2>
								<p><span class="quick-span">快0/0</span><span class="slow-span">慢0/0</span></p>
							</div>
							<div class="it-p">
								<p>当前<span>2388.0</span>元/度(含服务费)</p>
								<p>1832.元/度</p>
							</div>
							<div class="it-s">
								<div>
									<span class="star-container">
				                    	<span class="star"></span>
				                    	<span class="star-bg" :style="{width : (50*(93/100))+'px'}"></span>
			                    	</span>
									<span>最近充电<span>1</span>分钟前</span>
								</div>
								<span class="pos-font">朝阳区|1.8km</span>
							</div>
						</div>
					</div>
					<div class="item-f">
						<span>个人共享</span>
						<span>个享</span>
						<span>个人共</span>
						<span class="free-border">芝麻信用·免押金</span>
					</div>
				</div>

			</div>

		</div>
		<div class="pay-time">
            <span></span>
            <p>没有更多了</p>
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return{
				stars: [1,2,3,4,5],
				score: 3
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
            // 去地图首页
            goToMap() {
				wx.navigateTo({
                    url: '/pages/map/main'
                })
        	},
        },
    };
</script>

<style>
	@import "../../assest/fonts/iconfont.css";
	.bus-list{
		padding-top: 70rpx;
	}
	page{
        background: #F5F4FA;
    }
    .map-top{
    	padding: 15rpx;
    	background: #47B0CE;
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
        margin-top: 30rpx;
	}
	.choose{
		display: flex;
		display: -webkit-flex;
		padding: 20rpx 0;
		color: #797979;
		background: #fff;
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
		font-size: 28rpx;
		text-align: center;
		line-height: 70rpx;
	}
	.chos-btn .on{
		background: #47b0ce;
		color: #ffffff;
	}
	.chos-btna{
		width: 22%;
		font-size: 28rpx;
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
		margin-bottom: 30rpx;
		background: #ffffff;
	}
	.list-item{
		width: 100%;
		padding: 20rpx 20rpx;
		margin-top: 20rpx;
		background: #ffffff;
		box-sizing: border-box;
	}
	.list-item:nth-child(1){
		margin: 0;
	}
	.item-t{
		display: flex;
		display: -webkit-flex;
	}
	.item-t image{
		width: 165rpx;
		height: 165rpx;
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
		color: #1a1a1a;
	}
	.it-n, .it-p, .it-s{
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
	}
	.it-s{
		font-size: 24rpx;
	}
	.quick-span{
		color: #fff;
		background: #e08c70;
		font-szie: 28rpx;
		margin-right: 8rpx;
		padding: 5rpx 8rpx;
		border-radius: 8rpx;
	}
	.slow-span{
		color: #fff;
		background: #5DBA23;
		padding: 5rpx 8rpx;
		font-szie: 28rpx;
		border-radius: 8rpx;
	}
	.it-s p{
		display: -webkit-flex;
		display: flex;
		align-items: center;
	}
	.it-n h2{
		font-size: 32rpx;
	}
	.star-container {
	    position: relative;
	    display: inline-block;
	    width: 190rpx;
	    height: 34rpx;
	    vertical-align: text-bottom;
  	}
	.star {
		background: url('https://apk.11max.com/chongdianxiaochengxuloding.png') no-repeat;
		width: 190rpx;
		height: 34rpx;
		background-size: 100%;
		display: inline-block;
		z-index: 5;
		left: 0;
		top: 0;
		position: absolute;
	}
	.star-bg {
		background: #ffd30d;
		position: absolute;
		z-index: 4;
		display: inline-block;
		left: 2rpx;
		top: 2rpx;
		height: 30rpx;
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
		border: 1rpx solid #A6CEE7;
		color: #A6CEE7;
		margin-right: 20rpx;
		border-radius: 6rpx;
	}
	.item-f span.free-border{
		border: 1rpx solid #70C1AE;
		color: #70C1AE;
	}
	.it-p span{
		color: #e08c70;
	}
	.it-p{
		line-height: 100rpx;
	}
	.pos-font{
		color: #ccc;
	}
	.pay-time{
        padding: 30rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        position: relative;
    }
    .pay-time span{
        height: 2rpx;
        width: 94%;
        background: #ddd;
        position: absolute;
        left:3%;
        margin-top: 38rpx;
        z-index: 0;
    }
    .pay-time p{
        background: #F5F4FA;
        color: #666666;
        padding: 0 20rpx;
        font-size: 28rpx;
        position: absolute;
        z-index:5;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
