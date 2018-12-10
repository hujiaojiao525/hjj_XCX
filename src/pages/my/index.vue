<template>
    <div class="my-container">
        <!--个人中心顶部内容-->
        <section class="my-top">
            <div class="service icon">
                <i class="serviceIcon iconfont icon-wode_fuwuzhongxinx"></i>
                <span>客服</span>
            </div>
            <div class="set icon">
                <i class="arrow iconfont icon-shezhicopyx"></i>
                <span>设置</span>
            </div>
            <div class="my-message">
                <image class="head-img" :src="headImg"></image>
                <div class="login-mes">未登录</div>
            </div>
        </section>
        <!--我的信息列表-->
        <!--列表-->
        <section class="list-content">
            <div class="list money">
                <i class="left-icon iconfont icon-yuangongguanlizx"></i>
                <span class="formLabel">余额</span>
                <p class="list-right">
                    <span>--<span>元</span></span>
                    <span class="recharge">充值</span>
                </p>
            </div>
             <div class="list">
                <i class="left-icon iconfont icon-shoucangzx"></i>
                <span class="formLabel">我的卡劵</span>
                <p class="list-right">
                    <span>--<span>张</span></span>
                    <i class="iconfont icon-jiantou  right"></i>
                </p>
            </div>
            <div class="list">
                <i class="left-icon iconfont icon-my_icon_ordermanage_"></i>
                <span class="formLabel">我的订单</span>
                <p class="list-right">
                    <span>碳减排<span>-</span><span>kg</span></span>
                    <i class="iconfont icon-jiantou  right"></i>
                </p>
            </div>
            <div class="list">
                <i class="left-icon iconfont icon-my_icon_ordermanage_"></i>
                <span class="formLabel">我的积分</span>
                <p class="list-right">
                    <span>--<span>分</span></span>
                    <i class="iconfont icon-jiantou  right"></i>
                </p>
            </div>
            <div class="list">
                <i class="left-icon iconfont icon-my_icon_ordermanage_"></i>
                <span class="formLabel">我的问答</span>
                <p class="list-right">
                    <i class="iconfont icon-jiantou  right"></i>
                </p>
            </div>
        </section>
        <!--注册登陆按钮-->
        <div class="login-btn" @click="goToLogin">注册/登录</div>
    </div>
</template>

<script>

    export default {
        data() {
            return{
                headImg: '../../static/image/defaultHeadImg.png',
            }
        },
        onshow(){

        },
        methods: {
            goToLogin() {
                wx.navigateTo({
                    url: '/pages/loginPay/main'
                })
            },
        },
    };
</script>

<style lang="stylus">
    @import "../../assest/fonts/iconfont.css";
    page{
        background: #efefef;
    }
    .my-top{
        height: 300rpx;
        wdth:100%;
        position: relative;
        background: #0086b3;
        text-align: center;
        padding-top:70rpx;
        box-sizing: border-box;
    }
    .icon{
        position: absolute;
        top: 20rpx;
        font-size: 24rpx;
        width: 50rpx;
        color: #fff;
    }
    .service{
        left: 20rpx;
    }
    .set{
        right: 20rpx;
    }
    .head-img{
        width: 120rpx;
        height: 120rpx;
        border-radius: 100%;
    }
    .login-mes{
        font-size: 28rpx;
        color: #fff;
    }
    .login-btn{
        width: 90%;
        position: fixed;
        height:88rpx;
        background: #0086b3;
        text-align: center;
        line-height: 88rpx;
        font-size: 28rpx;
        color: #fff;
        bottom: 30rpx;
        left: 5%;
        border-radius: 10rpx;
    }
    .my-top .iconfont{
        font-size: 28rx;
        display: block;
    }
    .list-content{
        background: #fff;
        margin-bottom:24rpx;
        padding-left:32rpx;
    }
    .list-right{
        position: absolute;
        right:32rpx;
        top:0;
    }
    .list-right span{
        font-size: 28rpx;
        color: #1a1a1a;
    }
    .list-right span.recharge{
        padding: 10rpx 30rpx;
        color:#fff;
        background: #0086b3;
        border-radius: 50rpx;
        margin-left: 15rpx;
    }
    .formLabel{
        font-size: 32rpx;
        color: #535353;
        margin-left:20rpx;
    }
    .list-content .right.iconfont{
        font-size: 32rpx;
        color: #bfbfbf;
        margin-left: 15rpx;
    }
    .list{
        height:96rpx;
        line-height: 96rpx;
        border-bottom: 1rpx solid #d9d9d9;
        text-align: left;
        position: relative;
        padding-left: 32rpx;
    }
    .left-icon{
        font-size: 32rpx;
        color: #0086b3;
        margin-left:20rpx;
    }
    .list .iconfont{
        display: inline;
    }
</style>
