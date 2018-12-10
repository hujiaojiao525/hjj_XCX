<template>
    <div class="index-map">
        <section class="map-top">
        	<div class="search-box">
        		<image class="search-img" src="../../static/image/search.png"></image>
        		<input class="search-input" type="text" placeholder="输入目的地/电站名" readonly=true>
        	</div>
        	<image class="listImg-img" src="../../static/image/listImg.png"></image>
        </section>
        <section class="map-box">
        	<div class="left-img">
        		<!-- 编辑 -->
        		<div class="img-box" @click="editFun">
        			<image src="../../static/image/editImg.png"></image>
        		</div>
        		<!-- 筛选 -->
        		<div class="img-box">
        			<image src="../../static/image/screen.png"></image>
        		</div>
        		<!-- 定位 -->
        		<div class="img-box">
        			<image src="../../static/image/posImg.png"></image>
        		</div>
        	</div>
        	<!-- 扫码 -->
        	<div class="sweep-box">
        		<image src="../../static/image/sweepCode.png"></image>
        		<span>扫码充电</span>
        	</div>
        	<!-- 个人中心 -->
        	<div class="right-img">
        		<div class="img-box" @click="goToMy">
        			<image src="../../static/image/myImg.png"></image>
        		</div>
        	</div>
        </section>
        <!-- 编辑弹框 -->
        <section class="layer" v-show="editPop">
        	<div class="edit-pop" :class="{editLayer: editPop}">
	        	<image @click="closePop" class="close-btn" src="../../static/image/close.png"></image>
	        	<p class="edit-title">输入终端编号充电</p>
	        	<p class="edit-mes">终端编号位于充电终端二维码标签处，输入终端编号开启充电</p>
	        	<input type="text" class="edit-input" placeholder="清输入终端编号开启充电">
	        </div>
        </section>
    </div>
</template>

<script>

    export default {
        data() {
            return{
                editPop: false,
            }
        },
        onshow(){

        },
        methods: {
            goToMy() {
                wx.navigateTo({
                    url: '/pages/my/main'
                })
            },
            // 编辑
            editFun() {
            	const self = this;
            	self.editPop = true;
            },
            // 关闭弹窗
            closePop() {
				const self = this;
            	self.editPop = false;
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
    .map-top{
    	padding: 15rpx;
    	background: #0086b3;
    	box-sizing: border-box;
    	position: relative;
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
    .map-box{
    	position: relative;
    }
    .left-img{
    	position: fixed;
    	width: 100rpx;
    	left:80rpx;
    	bottom:100rpx;
    }
    .right-img{
    	position: fixed;
    	width: 100rpx;
    	right:80rpx;
    	bottom:100rpx;
    }
    .img-box{
    	width: 72rpx;
    	height: 72rpx;
    	background: #fff;
    	border-radius: 100%;
    	text-align: center;
    	margin-bottom: 30rpx;
    	line-height: 62rpx;
    }
    .img-box image{
    	width: 40rpx;
    	height: 40rpx;
    	vertical-align: middle;
    }
    .sweep-box{
    	background: #538EEB;
    	width: 170rpx;
    	height: 170rpx;
    	border-radius: 100%;
    	position: fixed;
    	left:50%;
    	margin-left: -90rpx;
    	bottom:90rpx;
    	text-align: center;
    	box-sizing: border-box;
    	padding-top: 35rpx;
    }
    .sweep-box image{
		width: 40rpx;
    	height: 40rpx;
    	display: block;
    	margin: 0 auto;
    }
    .sweep-box span{
		color: #fff;
		margin-top: 25rpx;
		font-size: 14px;
    }
    .layer{
    	background: rgba(0,0,0,.6);
    	position: fixed;
    	width: 100%;
    	height: 100%;
    	left:0;
    	top:0;
    }
    .edit-pop{
    	width: 100%;
    	position: absolute;
    	box-sizing: border-box;
    	left:0;
    	bottom:0;
    	z-index:2;
    	background: #efefef;
    }
    .close-btn{
    	position: absolute;
    	top: 15rpx;
    	right:20rpx;
    	width: 30rpx;
    	height:30rpx;
    }
    .edit-title{
    	font-size: 16px;
    	color: #1a1a1a;
    	line-height: 80rpx;
    	text-align: center;
    }
    .edit-mes{
    	font-size: 12px;
    	color: #666;
    	margin-bottom: 30rpx;
    	text-align: center;
    }
    .edit-input{
    	height:140rpx;
    	background: #fff;
    	border-top:1rpx solid #ddd;
    	font-size: 16px;
    	padding-left: 100rpx;
    }
    .editLayer{
        animation: mymove .5s;
    }
</style>
