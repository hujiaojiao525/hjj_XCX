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
                <p>可能需要<span class="red">{{countDown}}</span>秒的时间，请勿关闭</p>
            </div>
            <div class="line-bottom"></div>
        </div>
        <pop text="启动失败，请检查枪是否插好"
             :isShowLayerPop="isShowLayerPop"
             :oneBtn="true"
             @clickOnly="clickOnly"
             onlyBtnText="确定"></pop>
    </div>
</template>
<script>
    import store from "../vuex/store";
    import bottomLine from "../../components/bottomLine";
    import pop from '../../components/pop'

    export default {
        store,
        data() {
            return {
                parData: null, // 上个页面带过的参数变量
                calcno: null,  // 编号
                timer: null, // 定时器
                countDown: 60, // 倒计时时间
                isShowLayerPop: false, // 启动失败的弹窗 
                uid: '',
            };
        },
        components: {
            bottomLine,
            pop
        },
        onShow() {
            this.requestFun();
        },
        onUnload() {
            this.clearData();
        },
        onLoad(res) {
            // 获取url上的参数
            this.parData = res;
        },
        methods: {
            clearData() {
                clearInterval(this.timer);
                this.parData = null;
                this.calcno = null;
                this.timer = null;
                this.countDown = 60;
                this.isShowLayerPop = false;
                this.uid = '';
            },
            // 点击弹窗的确定按钮
            clickOnly() {
                // 返回到立即充电页面
                this.clearData();
                wx.navigateTo({
                    url: "/pages/message/main"
                });
            },
            // 倒计时方法
            countDownFun() {
                const self = this;
                console.log(self.timer)
                if(self.timer != null) {
                    clearInterval(self.timer);
                }
                self.timer = setInterval(function(){
                    if (self.countDown == 0) {
                        clearInterval(self.timer);
                        self.isShowLayerPop = true;
                        return;
                    }
                    self.countDown--;
                    // 请求接口
                    self.requestCharge();
                },1000)
            },
            // 进入页面的请求
            requestFun() {
                console.log(this.parData)
                const reqData = JSON.parse(this.parData.reqData);
                const Authorization = this.parData.Authorization;
                const self = this;
                wx.request({
                    url: `${process.env.BASE_URL}/charge`,
                    data: reqData, //传参
                    method: 'post',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'Authorization': Authorization
                    }, // 设置请求的 header
                    success: function(res) {
                        if(res.data.code == 0) {
                            console.log(res)
                            self.calcno = res.data.data.calcno;
                            // self.calcno = 'calcno_201901111547188936137'
                            self.uid = res.data.data.uid;
                            self.countDownFun();
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
            // 倒计时的时候 刷新的请求
            requestCharge() {
                const self = this;
                const reqData = {
                    calcno: this.calcno,
                    uid: this.uid,
                    user_no: JSON.parse(this.parData.reqData).user_no
                }
                const Authorization = this.parData.Authorization;
                wx.request({
                    url: `${process.env.BASE_URL}/charge_status`,
                    data: reqData, //传参
                    method: 'post',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'Authorization': Authorization
                    }, // 设置请求的 header
                    success: function(res) {
                        if(res.data.code == 0) {
                            console.log(res.data.data.status)
                            if (res.data.data.status === 1) {
                                // 可以充电 去充电详情页面
                                clearInterval(self.timer);
                                wx.redirectTo({
                                    url: "/pages/chargeProgress/main?order_no="+res.data.data.order_no
                                });
                            } else if (res.data.code.status === 2) {
                                // 不可以充电 去立即充电页面
                                clearInterval(self.timer);
                                self.isShowLayerPop = true;
                            }
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
