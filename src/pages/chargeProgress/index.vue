<template>
    <div class="charge-progress">
        <div class="progress-top">
            <div class="charge-time">
                <span class="hour">00</span>:<span class="minute">00</span>:<span class="second">54</span>
            </div>
            <div class="progress-mes">
                <div>
                    <p class="progress-title">已充电量</p>
                    <p>-</p>
                </div>
                <div>
                    <p class="progress-title">充电时长</p>
                    <p class="font-family">
                        <span class="hour">00</span>:<span class="minute">00</span>:<span class="second">54</span>
                    </p>
                </div>
                <div>
                    <p class="progress-title">累计消费</p>
                    <p class="font-family">0.00</p>
                </div>
            </div>
        </div>
        <ul class="progress-list">
            <li>
                <h2>我的钱包</h2>
                <p>29.98元</p>
            </li>
            <li class="margin-bottom">
                <h2>优惠券</h2>
                <p>
                    无可用优惠券
                    <i class="iconfont icon-jiantou  right"></i>
                </p>
            </li>
            <li>
                <h2>充电站</h2>
                <p>
                    北京市昌平区
                </p>
            </li>
            <li>
                <h2>充电位</h2>
                <p>
                    392839284982424
                </p>
            </li>
            <li>
                <h2>充电策略</h2>
                <p>
                    直到充满
                </p>
            </li>
            <li class="margin-bottom">
                <h2>充电模式</h2>
                <p>
                    直流充电
                </p>
            </li>
            <li class="margin-bottom">
                <h2>车架号：未识别</h2>
                <p>
                    关联车辆
                    <i class="iconfont icon-jiantou  right"></i>
                </p>
            </li>
        </ul>
        <div class="stop-btn">
            <p>停止并结算</p>
        </div>
    </div>
</template>
<script>
    import store from "../vuex/store";
    import bottomLine from "../../components/bottomLine";

    export default {
        store,
        data() {
            return {};
        },
        components: {
            bottomLine
        },
        onShow() {


        },
        onUnload() {

        },
        methods: {
            changeTab(id) {
                this.chooseId = id;
            },
            goToPowerDetail() {
                wx.navigateTo({
                    url: "/pages/powerDetail/main"
                });
            }
        }
    };
</script>

<style>
    @import "../../assest/fonts/iconfont.css";
    @import "../../assest/fontFamily/stylesheet.css";

    page {
        background: #F5F4FA;
    }

    .progress-top {
        height: 580rpx;
        background: #4DAADB;
        padding-top: 80rpx;
        box-sizing: border-box;
    }

    .charge-time {
        width: 260rpx;
        height: 260rpx;
        line-height: 320rpx;
        background: #0996DB;
        border-radius: 100%;
        text-align: center;
        color: #fff;
        font-size: 55rpx;
        margin: 0 auto 30rpx auto;
        font-family: 'YournameD7HomeCondensed';
    }
    .charge-time span{
        margin: 0 3rpx;
    }
    .font-family{
        font-family: 'YournameD7HomeCondensed';
        font-size: 55rpx;
    }
    .font-family span{
        margin: 0 3rpx;
    }
    .progress-mes{
        border-top: 2rpx solid rgba(255,255,255, 0.2);
        padding: 35rpx;
        display: flex;
        justify-content: space-between;
        color: #fff;
    }
    .progress-mes div{
        text-align: center;
        flex: 1;
        border-right: 1rpx solid rgba(255,255,255, 0.2);
    }
    .progress-mes div:last-child{
        border-right: none;
    }
    .progress-title{
        margin-bottom: 40rpx;
        font-size: 26rpx;
    }
    .progress-list{
        padding-bottom: 200rpx;
    }
    .progress-list li{
        background: #fff;
        height: 96rpx;
        line-height: 96rpx;
        padding: 0 25rpx;
        border-bottom:  1rpx solid #ccc;
        display: flex;
        justify-content: space-between;
        font-size: 28rpx;
        box-sizing: border-box;
    }
    .progress-list li .right{
        display: inline-block;
    }
    .margin-bottom{
        margin-bottom: 20rpx;
    }
    .stop-btn{
        height: 200rpx;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
    }
    .stop-btn p{
        width: 80%;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        font-size: 28rpx;
        border-radius: 50rpx;
        color: #fff;
        background: #4DAADB;
        margin: 50rpx auto;
    }
</style>
