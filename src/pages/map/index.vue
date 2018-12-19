<template>
    <div class="index-map">
        <!-- 顶部 -->
        <div class="map-top">
            <div class="search-box" @click="goToSearch">
                <image class="search-img" src="../../static/image/search.png"></image>
                <input class="search-input" type="text" placeholder="输入目的地/电站名" readonly=true>
            </div>
            <image class="listImg-img" @click="goToList" src="../../static/image/listImg.png"></image>
        </div>
        <div class="top-layer" v-show="editPop"></div>
        <map
            disable-scroll="true"
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
            @begin="regionchange"
            @end="regionchange"
            @regionchange="regionchange"
            show-location
            >
            <cover-image class="map-mes" src="../../static/image/indexLeft.png"/>

            <cover-view class="edit-img" @tap="editFun">
                <cover-image class="img" src="../../static/image/editImg.png"/>
            </cover-view>
            <cover-view class="screen-img" @tap="goToScreen">
                <cover-image class="img" src="../../static/image/screen.png"/>
            </cover-view>
            <cover-view class="again-img" v-show="!editPop" @tap="againPos">
                <cover-image class="img" src="../../static/image/posImg.png"/>
            </cover-view>
            <cover-view class="my-img" v-show="!editPop" @tap="goToMy">
                <cover-image class="img" src="../../static/image/myImg.png"/>
            </cover-view>
            <cover-view class="sweep-box" @tap="scanFun" v-show="!editPop">
                <cover-image class="img" src="../../static/image/sweepCode.png"/>
                <cover-view class="text">扫码充电</cover-view>
            </cover-view>
            <cover-view class="layer" v-show="editPop"></cover-view>
        </map>
        <div class="edit-pop"  v-show="editPop" :class="{editLayer: editPop}">
            <image @click="closePop" class="close-btn" src="../../static/image/close.png"></image>
            <div class="edit-title">输入终端编号充电</div>
            <div class="edit-mes">终端编号位于充电终端二维码标签处，输入终端编号开启充电</div>
            <input type="text" :focus="focus" class="edit-input" placeholder="清输入终端编号开启充电">
        </div>
    </div>
</template>

<script>
    const requestData = [
       {
            id: 1,
            name: "永州市中心医院",
            latitude: 39.91469,
            longitude: 116.40717,
            iconPath: '/static/image/indexIcon.png',
            width: 30,
            height: 34,
            zIndex: 1,
            callout:{
                content:'我是第一个这个气泡',
                fontSize:14,
                color:'#000000',
                bgColor:'#ffffff',
                padding:8,
                borderRadius:4,
                boxShadow:'4px 8px 16px 0 rgba(0)',
                display:"ALWAYS"
            }
        },
        {
            id: 2,
            name: "永州市中医院",
            latitude: 39.90469,
            longitude: 116.44717,
            iconPath: '/static/image/indexElseIcon.png',
            width: 30,
            height: 34,
            zIndex: 2,
            callout: {
                content:'我是第二个这个气泡',
                fontSize:14,
                color:'#000000',
                bgColor:'#ffffff',
                padding:8,
                borderRadius:4,
                boxShadow:'4px 8px 16px 0 rgba(0)',
                display:"BYCLICK"
            }
        },
        {
            id: 3,
            name: "永州市中医院",
            latitude: 39.90469,
            longitude: 116.44819,
            iconPath: '/static/image/indexElseIcon.png',
            width: 30,
            height: 34,
            zIndex: 3,
            callout: {
                content:'我是第三个这个气泡',
                fontSize:14,
                color:'#000000',
                bgColor:'#ffffff',
                padding:8,
                borderRadius:4,
                boxShadow:'4px 8px 16px 0 rgba(0)',
                display:"BYCLICK"
            }
        }
    ]
    export default {
        data() {
            return{
                editPop: false,
                focus: false,
                WinHeight: '',
                latitude: 23.099994,
                longitude: 113.324520,
                markers: requestData,
                bottomHeight: '',
                mapCtx: null,
            }
        },
        mounted(){
            const self = this;
            var query = wx.createSelectorQuery()
            query.select('.map-top').boundingClientRect()
            query.exec(function (hei) {
                wx.getSystemInfo({
                    success: function(res) {
                        console.log(hei[0].height)
                        self.WinHeight = res.windowHeight - hei[0].height
                    }
                })
            })
            this.currentPos();
            
        },
        onReady: function (e) {
            this.mapCtx = wx.createMapContext('map')
        },
        methods: {
            createMarker(point) {
                let latitude = point.latitude;
                let longitude = point.longitude;
                let marker = {
                    iconPath: point.iconPath,
                    id: point.id || 0,
                    name: point.name || '',
                    latitude: latitude,
                    longitude: longitude,
                    width: 30,
                    height: 34,
                    zIndex: point.zIndex,
                    callout: {
                        content: point.callout.content,
                        fontSize: 14,
                        color:'#000000',
                        bgColor:'#ffffff',
                        padding:8,
                        borderRadius:4,
                        boxShadow:'4px 8px 16px 0 rgba(0)',
                        display:"BYCLICK"
                    }
                };
                
                return marker;
            },
            // 去列表页面
            goToList() {
                wx.navigateTo({
                    url: '/pages/busList/main'
                })
            },
            // 去搜索页面
            goToSearch() {
                wx.navigateTo({
                    url: '/pages/search/main'
                })
            },
            // 去筛选页面
            goToScreen() {
                wx.navigateTo({
                    url: '/pages/screen/main'
                })
            },
            // 扫一扫
            scanFun() {
                wx.scanCode({
                    success(res) {
                        console.log(res)
                    }
                })
            },
            // 重新定位
            againPos() {

                var that = this;
                that.mapCtx.moveToLocation({
                    success: function(res) {
                    // 通过获取的经纬度进行请求数据
                        let arr = that.setPos()
                        arr.push({
                            id: 0,
                            latitude: res.latitude,
                            longitude: res.longitude,
                        })
                        that.markers = arr;
                    }
                })
                this.currentPos();
            },
            // 定位到当前位置
            currentPos() {
                const self = this;
                wx.getLocation({
                    type: 'gcj02',
                    success: function(res) {
                        console.log(res);
                        self.latitude = res.latitude
                        self.longitude = res.longitude
                    }
                })
            },
            setPos() {
                let markers = [];
                for (let item of requestData) {
                    let marker = this.createMarker(item);
                    markers.push(marker)
                }
                console.log(markers)
                return markers;
            },
            regionchange(e) {
                if (e.type == 'end') {
                    this.getLngLat();
                }
            },

            getLngLat: function() {
                var that = this;
                that.mapCtx.getCenterLocation({
                    success: function(res) {
                        // 通过获取的经纬度进行请求数据
                        let arr = that.setPos()
                        arr.push({
                            id: 0,
                            latitude: res.latitude,
                            longitude: res.longitude,
                        })
                        that.markers = arr;
                        //console.log(arr)
                        //that.mapCtx.moveToLocation()
                    }
                })
            },
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
    page{
        width: 100%;
    }
    #map{
        width: 100%;
    }
    .map-mes{
        width: 135rpx;
        height: 120rpx;
        margin: 60rpx 0 0 60rpx;
        display: none;
    }
    .map-top{
        padding: 15rpx;
        background: #47B0CE;
        box-sizing: border-box;
        width: 100%;
        position: relative;
    }
    .map-text{
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
    .edit-img, .screen-img, .again-img, .my-img{
        width: 72rpx;
        height: 72rpx;
        background: #fff;
        border-radius: 100%;
        text-align: center;
        margin-bottom: 30rpx;
        line-height: 62rpx;
        margin-left:100rpx;
    }
    .edit-img{
        margin-top: 650rpx;
    }
    .img {
        width: 40rpx;
        height: 40rpx;
        vertical-align: middle;
        margin:16rpx auto;
    }
    .my-img{
        margin-left: 600rpx;
        margin-top: -100rpx;
    }
    .sweep-box{
        background: #538EEB;
        width: 170rpx;
        height: 170rpx;
        border-radius: 100%;
        margin: -120rpx auto 0 auto;
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
    .edit-pop{
        width: 100%;
        position: fixed;
        box-sizing: border-box;
        left:0;
        bottom:0;
        z-index:15;
        background: #efefef;
    }
    .close-btn{
        position: absolute;
        top: 20rpx;
        right:20rpx;
        width: 40rpx;
        height:40rpx;
    }
    .edit-title{
        font-size: 16px;
        color: #1a1a1a;
        line-height: 80rpx;
        text-align: center;
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
