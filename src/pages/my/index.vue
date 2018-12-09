<template>
    <div class="my-container">
        <!--个人中心顶部内容-->
        <section class="my-top">
            <div class="service icon">

                <span>客服</span>
            </div>
            <div class="set icon">
                <span>设置</span>
            </div>
            <div class="my-message">
                <!--<image></image>-->
                <div class="head-img"></div>
                <div class="login-mes">未登录</div>
            </div>
        </section>
        <!--我的信息列表-->
        <section class="my-list">

        </section>
        <!--注册登陆按钮-->
        <div class="login-btn" @click="goToLogin">注册/登录</div>
    </div>
</template>

<script>

    export default {
        data() {
            return{

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
        width:100rpx;
        height:100rpx;
        background: #df5000;
        border-radius: 100%;
        margin: auto;
        margin-bottom: 20rpx;
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
</style>
