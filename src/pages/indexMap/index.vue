<template>
    <div class="index-map" catchtouchmove>
    	<!-- 顶部 -->
        <div class="map-top">
        	<div class="search-box">
        		<image class="search-img" src="../../static/image/search.png"></image>
        		<input class="search-input" type="text" placeholder="输入目的地/电站名" readonly=true>
        	</div>
        	<image class="listImg-img" src="../../static/image/listImg.png"></image>
        </div>
        <div class="top-layer" v-show="editPop"></div>
    	<map 
    		
            id="map" 
            :markers="markers" 
            scale="14"
            subkey="2AJBZ-GDVWW-CVYRV-O5UML-R66UK-GEFRL"
            :style="{height: WinHeight+'px'}"
            :latitude="latitude"
            :longitude="longitude"
            @controltap="controltap"
            @markertap="markertap"
            @callouttap="goToClass" 
            @end="regionchange"
            @begin="regionchange"
            @regionchange="regionchange"
            show-location >
           <cover-view class="map-box">
        		<cover-view class="left-img">
	        		<!-- 编辑 -->
	        		<cover-view class="img-box" @tap="editFun">
	        			<cover-image class="img" src="../../static/image/editImg.png"/>
	        		</cover-view>
	        		<!-- 筛选 -->
	        		<cover-view class="img-box">
	        			<cover-image class="img" src="../../static/image/screen.png"/>
	        		</cover-view>
	        		<!-- 定位 -->
	        		<cover-view class="img-box">
	        			<cover-image class="img" src="../../static/image/posImg.png"/>
	        		</cover-view>
		        	</cover-view>
		        	<!-- 扫码 -->
		        	<cover-view class="sweep-box">
		        		<cover-image class="img" src="../../static/image/sweepCode.png"/>
		        		<cover-view class="text">扫码充电</cover-view>
		        	</cover-view>
		        	<!-- 个人中心 -->
		        	<cover-view class="right-img">
	        		<cover-view class="img-box" @click="goToMy">
	        			<cover-image class="img" src="../../static/image/myImg.png"/>
	        		</cover-view>
	        	</cover-view>
	        </cover-view>
	        <cover-view class="layer" v-show="editPop"></cover-view>
        </map>
        
        <!-- 底部 -->

        
        <!-- 弹层 -->
        <!-- <cover-view class="layer" v-show="editPop">
        	<cover-view class="edit-pop" :class="{editLayer: editPop}">
	        	<cover-image @click="closePop" class="close-btn" src="../../static/image/close.png"/>
	        	<cover-view class="edit-title">输入终端编号充电</cover-view>
	        	<cover-view class="edit-mes">终端编号位于充电终端二维码标签处，输入终端编号开启充电</cover-view>
	        	<input type="text" class="edit-input" placeholder="清输入终端编号开启充电">
	        </cover-view>
        </cover-view> -->
        
        <div class="edit-pop"  v-show="editPop" :class="{editLayer: editPop}">
        	<image @click="closePop" class="close-btn" src="../../static/image/close.png"></image>
        	<div class="edit-title">输入终端编号充电</div>
        	<div class="edit-mes">终端编号位于充电终端二维码标签处，输入终端编号开启充电</div>
        	<input type="text" :focus="focus" class="edit-input" placeholder="清输入终端编号开启充电">
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return{
                editPop: false,
                focus: false,
                WinHeight: '',
                markers: [],
			    latitude: '23.099994', // 中心纬度
			    longitude: '113.324520' , // 中心经度	
			    bottomHeight: '',
            }
        },
        mounted(){
        	const self = this;
        	var query = wx.createSelectorQuery()
            query.select('.map-top').boundingClientRect()
            query.exec(function (hei) {
                wx.getSystemInfo({ //是否为iphoneX
	                success: function(res) {
	                	console.log(hei[0].height)
	                    self.WinHeight = res.windowHeight - hei[0].height
	                }
	            })
            })
            wx.getLocation({
				type: 'wgs84',
				success(res) {
					const latitude = res.latitude
					const longitude = res.longitude
					const speed = res.speed
					const accuracy = res.accuracy
					self.latitude = latitude;
					self.longitude = longitude;
					self.markers = [{
						id: 0,
						latitude: latitude,
						longitude: longitude,
					}]
				}
			})
        },
        
        methods: {
        	touchmove(event) {
        		console.log(0)
        		event.preventDefault()	
    		},
        	markertap(e) {
			    console.log(e)
			},
        	controltap(e) {
        		console.log(e)
    		},
            goToMy() {
                wx.navigateTo({
                    url: '/pages/my/main'
                })
            },

            // 编辑
            editFun() {
            	const self = this;
            	self.editPop = true;
            	setTimeout(function() {
            		var query = wx.createSelectorQuery()
	            	query.select('.edit-pop').boundingClientRect()
		            query.exec(function (hei) {
		                console.log(hei[0].height)
		                self.bottomHeight = hei[0].height
		                self.WinHeight = self.WinHeight -  hei[0].height
		                
		            })
            	}, 50)
            	setTimeout(function() {
            		self.focus = true;
            	}, 60)
            	
            },
            // 关闭弹窗
            closePop() {
				const self = this;
            	self.editPop = false;
            	self.focus = false;
            	self.WinHeight = self.WinHeight + self.bottomHeight
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
    page{
    	position: fixed;
    	width: 100%;
    	height: 100%;
    	left: 0;
    	top: 0;
    	overflow: hidden;
	}
    #map{
    	width:100%;
    	position: relative;
	}
    .map-top{
    	padding: 15rpx;
    	background: #0086b3;
    	box-sizing: border-box;
    	width: 100%;
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
    .controls{
    	position: fixed;
    	left:0;
    	bottom:200rpx;
    }
    .map-box{
    	position: absolute;
    	width: 100%;
    	height:450rpx;
    	left:0;
    	bottom:90rpx;
    	z-index:0;
    }
    .left-img{
    	position: absolute;
    	width: 100rpx;
    	left:60rpx;
    	bottom:10rpx;
    }
    .right-img{
    	position: absolute;
    	width: 100rpx;
    	right:60rpx;
    	bottom:10rpx;
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
    .img-box .img{
    	width: 40rpx;
    	height: 40rpx;
    	vertical-align: middle;
    	margin:16rpx auto;
    }
    .sweep-box{
    	background: #538EEB;
    	width: 170rpx;
    	height: 170rpx;
    	border-radius: 100%;
    	position: absolute;
    	left:50%;
    	margin-left: -90rpx;
    	bottom:0;
    	text-align: center;
    	box-sizing: border-box;
    	padding-top: 35rpx;
    }
    .sweep-box .img{
		width: 40rpx;
    	height: 40rpx;
    	display: block;
    	margin: 0 auto;
    }
    .sweep-box .text{
		color: #fff;
		margin-top: 25rpx;
		font-size: 14px;
    }
    .layer{
    	background: rgba(0,0,0,.6);
    	position: absolute;
    	width: 100%;
    	height: 100%;
    	left:0;
    	top:0;
    	z-index:5;
    }
    .edit-pop{
    	width: 100%;
    	position: relative;
    	box-sizing: border-box;
    	left:0;
    	bottom:0;
    	z-index:15;
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
