<template>
    <div class="charge-wait">
        <div class="wait-top">
            <image class="charge-img" src="../../static/image/chongdian.png"></image>
            <div class="spinner">
                <div class="spinner-container container1">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
                <div class="spinner-container container2">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
                <div class="spinner-container container3">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
            </div>
        </div>
        <!-- 启动充电中 -->
        <p class="charge-ing">启动充电中</p>
        <div class="charge-mes">
            <div class="line-top"></div>
            <div class="charge-text">
                <p>正在启动充电操作</p>
                <p>可能需要<span class="red">27</span>秒的时间，请勿关闭</p>
            </div>
            <div class="line-bottom"></div>
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

    page {
        background: #F5F4FA;
    }

    .wait-top {
        width: 200rpx;
        height: 200rpx;
        border-radius: 100%;
        background: #44AEE2;
        text-align: center;
        margin: 250rpx auto 50rpx auto;
        line-height: 200rpx;
        position: relative;
    }

    .charge-img {
        width: 80rpx;
        height: 80rpx;
        vertical-align: middle;
    }

    .load-img {
        position: absolute;
        width: 180rpx;
        height: 180rpx;
        left: 10rpx;
        top: 10 rrpx;
    }

    .charge-ing{
        color: #44AEE2;
        font-size: 28rpx;
        text-align: center;
    }

    .charge-mes{
        margin-top: 40rpx;
    }

    .line-top, .line-bottom{
        width: 465rpx;
        height: 5rpx;
        background: #47B0CE;
        margin: 10rpx auto;
    }

    .charge-text {
        text-align: center;
        font-size: 28rpx;
        color: #666;
        margin: 25rpx 0;
    }
    .charge-text .red{
        color: #f00;
    }

    .spinner {
        width:120rpx;
        height:120rpx;
        position:absolute;
        left:40rpx;
        top:40rpx;
    }

    .container1 > div, .container2 > div, .container3 > div {
        width: 6px;
        height: 6px;
        background-color: #fff;

        border-radius: 100%;
        position: absolute;
        -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
        animation: bouncedelay 1.2s infinite ease-in-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .spinner .spinner-container {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .container2 {
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
    }

    .container3 {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }

    .circle1 {
        top: 0;
        left: 0;
    }

    .circle2 {
        top: 0;
        right: 0;
    }

    .circle3 {
        right: 0;
        bottom: 0;
    }

    .circle4 {
        left: 0;
        bottom: 0;
    }

    .container2 .circle1 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }

    .container3 .circle1 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    .container1 .circle2 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    .container2 .circle2 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    .container3 .circle2 {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
    }

    .container1 .circle3 {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s;
    }

    .container2 .circle3 {
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
    }

    .container3 .circle3 {
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s;
    }

    .container1 .circle4 {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s;
    }

    .container2 .circle4 {
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s;
    }

    .container3 .circle4 {
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s;
    }

    @-webkit-keyframes bouncedelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0.0)
        }
        40% {
            -webkit-transform: scale(1.0)
        }
    }

    @keyframes bouncedelay {
        0%, 80%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        }
        40% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
    }
</style>
