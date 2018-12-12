<template>
    <div class="index-map">
    	<map 
    		disable-scroll="true"
            id="map" 
            :markers="markers" 
            scale="14"
            subkey="2AJBZ-GDVWW-CVYRV-O5UML-R66UK-GEFRL"
            :style="{height: WinHeight+'px'}"
            >
            
            
        </map>
        <cover-view>
               hahah 
        </cover-view>
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
                mapCtx: null,
            }
        },
        mounted(){
            const self = this;
            wx.getSystemInfo({
                success: function(res) {
                    self.WinHeight = res.windowHeight 
                }
            })
        },
        
        moveToLocation() {

        },
        onReady: function (e) {
            this.mapCtx = wx.createMapContext('map')
        },
        methods: {
            // 定位到当前位置
            currentPos() {
                const self = this;
                wx.getLocation({
                type: 'wgs84',
                    success(res) {
                        const speed = res.speed
                        const accuracy = res.accuracy
                        self.latitude = res.latitude;
                        self.longitude = res.longitude;
                        self.markers = [{
                            id: 0,
                            latitude: res.latitude,
                            longitude: res.longitude,
                        }]
                    }
                })  
            },
        },
    };
</script>

<style>
    page{
        width: 100%;
    }
    #map{
        width: 100%;
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
        position: fixed;
        width: 100rpx;
        left:60rpx;
        bottom:10rpx;
    }
    .right-img{
        position: fixed;
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