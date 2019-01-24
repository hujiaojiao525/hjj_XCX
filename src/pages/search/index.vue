<template>
    <div class="search">
        <!-- 顶部 -->
        <div class="map-top">
            <div class="search-box">
                <image class="search-img" src="../../static/image/search.png"></image>
                <input class="search-input" @input="getsuggest"  type="text" :value="value" placeholder="输入目的地/电站名">
            </div>
            <div  class="cancel" @click="cancel">取消</div>
        </div>
        <!--<div class="search-history">-->
            <!--<div class="his-title">-->
                <!--<h2>历史搜索</h2>-->
                <!--<image src="../../static/image/del.png"></image>-->
            <!--</div>-->
            <!--<ul class="his-list">-->
                <!--<li>时髦天际</li>-->
                <!--<li>时髦天际</li>-->
                <!--<li>北京</li>-->
                <!--<li>顺义</li>-->
                <!--<li>大型</li>-->
                <!--<li>本城</li>-->
            <!--</ul>-->
        <!--</div>-->
        <!--最近使用-->
        <!--<div class="use-list">-->
            <!--<h2>最近使用</h2>-->
        <!--</div>-->

        <ul class="search-list">
            <li v-if="requestData!=null"
                v-for="(items, idx) in requestData" :key="idx"
                @click="goIndex(items.latitude, items.longitude, '广东省')">
                <image class="" src="../../static/image/search.png"></image>
                <div class="search-content">
                    <h2>{{items.charge_address}}</h2>
                    <div class="star"></div>
                    <!--<p></p>-->
                </div>
                <div class="search-right">
                    <!--<div class="top-label">-->
                    <!--<span>快0</span>-->
                    <!--<span>慢0</span>-->
                    <!--</div>-->
                    <span class="car-label">免费停车</span>
                    <p class="search-price">{{items.charge_fee}}元/度</p>
                    <p class="">附近的充电站</p>
                </div>
            </li>
            <li v-for="(item,index) in getData" :key="index" @click="goIndex(item.latitude, item.longitude, item.province)">
                <image class="" src="../../static/image/search.png"></image>
                <div class="search-content">
                    <h2>{{item.addr}}</h2>
                    <p>{{item.city}}</p>
                </div>
                <div class="search-right">
                    <p>附近的充电站</p>
                </div>
            </li>

        </ul>
    </div>
</template>
<script>
    import store from '../vuex/store';
    import QQMapWX from '../../../static/qqmap-wx-jssdk'
    export default {
        store,
        data() {
            return {
                backfill: '',
                qqmapsdk: null,
                getData: null,
                userInfo: null,
                requestData: null,
                value: '',
            };
        },
        onShow() {
            this.qqmapsdk = new QQMapWX({
                key: 'KNDBZ-Z7DWQ-4LB5A-GQU5A-I4MKT-BCFHF' // 必填
            });
            this.getStorage();
        },
        onUnload() {
            this.clearData();
        },
        methods: {
            clearData() {
                this.requestData = null;
                this.userInfo = null;
                this.getData = null;
                this.qqmapsdk = null;
                this.backfill = '';
                this.value = '';
            },
            storeFun(val) {
                const me = this;
                me.$store.commit("updateInputValue", {
                    inputValue: val
                });
            },
            getsuggest(e) {
                var _this = this;
                //调用关键词提示接口
                _this.value = e.mp.detail.value;
                console.log(e.mp.detail.value)
                _this.qqmapsdk.getSuggestion({
                    //获取输入框值并设置keyword参数
                    keyword: e.mp.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
                    //region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
                    success: function(res) {//搜索成功后的回调
                        console.log(res);
                        var sug = [];
                        for (var i = 0; i < res.data.length; i++) {
                            sug.push({ // 获取返回结果，放到sug数组中
                                title: res.data[i].title,
                                id: res.data[i].id,
                                addr: res.data[i].address,
                                city: res.data[i].city,
                                province: res.data[i].province,
                                district: res.data[i].district,
                                latitude: res.data[i].location.lat,
                                longitude: res.data[i].location.lng
                            });
                        }

                        if(e.mp.detail.value.indexOf('广东') > -1) {
                            _this.listRequest();
                        }
                        _this.getData = sug;
                    },
                    fail: function(error) {
                        console.error(error);
                    },
                    complete: function(res) {
                        // console.log(res);
                    }
                });
            },
            // 初始化获取用户信息
            getStorage() {
                var userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : '';
                if (userInfo) {
                    this.userInfo = userInfo;
                }
            },
            cancel() {
                wx.navigateBack({
                    delta: 1
                })
                this.clearData();
            },
            goIndex(latitude, longitude,province) {
                wx.navigateTo({
                    url: '/pages/map/main?latitude='+latitude+'&longitude='+longitude+'&topValue='+province
                })
                this.storeFun(province);
            },
            listRequest(){
                const me = this;
                let header = {};
                if (this.userInfo) {
                    header.Authorization = this.userInfo.Authorization
                }
                wx.request({
                    url: `${process.env.BASE_URL}/charge_map_list`,
                    data: {}, //传参
                    method: 'get',
                    header: header, // 设置请求的 header
                    success: function(res) {
                        if(res.data.code == 0) {
                            me.requestData = res.data.data.data;
                            console.log(JSON.stringify(me.requestData))
                        } else {
                            wx.showToast({
                                title: '信息有误',
                                icon: "none"
                            });
                        }
                    },
                    fail() {
                        wx.showToast({
                            title: '网络错误',
                            icon: "none"
                        });
                    }
                })
            },
        }
    };
</script>

<style>
    page{
        background: #F5F4FA;
    }
    .map-top{
        padding: 15rpx;
        box-sizing: border-box;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #F5F4FA;
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
    .cancel{
        position: absolute;
        right: 15rpx;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30rpx;
    }
    .search-history{
        padding: 15rpx;
    }
    .his-title{
        height: 100rpx;
        line-height: 100rpx;
        position: relative;
    }
    .his-title h2{
        font-size: 34rpx;
        color: #1a1a1a;
    }
    .his-title image{
        width: 40rpx;
        height: 40rpx;
        position: absolute;
        right: 15rpx;
        top: 50%;
        margin-top: -20rpx;
    }
    .his-list li{
        background: #47B0CE;
        padding: 15rpx 28rpx;
        font-size: 30rpx;
        color: #ffffff;
        display: inline-block;
        border-radius: 10rpx;
        margin: 0 30rpx 30rpx 0;
    }
    .use-list h2{
        height: 120rpx;
        line-height: 120rpx;
        border-top: 1rpx solid #dedede;
        border-bottom: 1rpx solid #dedede;
        padding-left: 15rpx;
        font-size: 32rpx;
        color: #1a1a1a;
    }
    .search-list{
        width: 100%;
        height: 100%;
        /*position: fixed;*/
        top: 100rpx;
        left:0;
        background: #ffffff;
        z-index: 5;
        margin-top: 100rpx;
    }
    .search-list li{
        display: flex;
        border-bottom: 1rpx solid #ddd;
        padding: 30rpx;
    }
    .search-list li image{
        width: 40rpx;
        height: 40rpx;
    }
    .search-content{
        width: 70%;
        padding: 0 50rpx 0 30rpx;
    }
    .search-content h2{
        font-size: 32rpx;
        color: #1a1a1a;
    }
    .search-content p{
        font-size: 28rpx;
        color: #666;
        margin-top: 5rpx;
    }
    .search-right{
        width: 30%;
        font-size: 30rpx;
        text-align: right;
    }
    .search-right p{
        color: #666;
    }
    .top-label{
        margin-bottom: 15rpx;
    }
    .top-label span{
        padding: 5rpx 10rpx;
        color: #ffffff;
        font-size: 28rpx;
        border-radius: 10rpx;
    }
    .top-label span:first-child{
        background: #FF4040;
        margin-right: 10rpx;
    }
    .top-label span:last-child{
        background: #0f0;
        margin-right: 10rpx;
    }
    .car-label{
        font-size: 28rpx;
        border: 1rpx solid cornflowerblue;
        border-radius: 10rpx;
        color: cornflowerblue;
        padding: 2rpx 10rpx;
        margin-bottom: 10rpx;
    }
    .search-price{
        margin: 10rpx 0;
    }
</style>
