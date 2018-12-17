<template>
    <div class="search">
        <!-- 顶部 -->
        <div class="map-top">
            <div class="search-box">
                <image class="search-img" src="../../static/image/search.png"></image>
                <input class="search-input" type="text" placeholder="输入目的地/电站名">
            </div>
            <div  class="cancel">取消</div>
        </div>
        <div class="search-history">
            <div class="his-title">
                <h2>历史搜索</h2>
                <image src="../../static/image/del.png"></image>
            </div>
            <ul class="his-list">
                <li>时髦天际</li>
                <li>时髦天际</li>
                <li>北京</li>
                <li>顺义</li>
                <li>大型</li>
                <li>本城</li>
            </ul>
        </div>
        <!--最近使用-->
        <div class="use-list">
            <h2>最近使用</h2>
        </div>
        <ul class="search-list">
            <li>
                <image class="" src="../../static/image/search.png"></image>
                <div class="search-content">
                    <h2>包头站</h2>
                    <p>内蒙古自治区包头市</p>
                </div>
                <div class="search-right">
                    <p>附近的充电站</p>
                </div>
            </li>
            <li>
                <image class="" src="../../static/image/search.png"></image>
                <div class="search-content">
                    <h2>北京包总明的个人桩</h2>
                    <div class="star"></div>
                    <p>北京市阐扬去杜湖和服额那就北京北京楼房</p>
                </div>
                <div class="search-right">
                    <div class="top-label">
                        <span>快0</span>
                        <span>慢0</span>
                    </div>
                    <span class="car-label">免费停车</span>
                    <p class="search-price">1元</p>
                    <p class="">附近的充电站</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import store from '../vuex/store';
    export default {
        store,
        data() {
            return {

            };
        },
        onShow() {


        },
        onUnload() {

        },
        methods: {

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
        position: fixed;
        top: 100rpx;
        left:0;
        background: #ffffff;
        z-index: 5;
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
