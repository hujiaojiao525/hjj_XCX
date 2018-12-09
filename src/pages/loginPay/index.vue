<template>
    <div class="pay-container">
        <div class="pay-logo">

        </div>
        <div class="login-pay">
            <div class="wx-login">微信用户快速登录</div>
            <div class="phone-login">输入手机号注册登录</div>
        </div>
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

        },
    };
</script>

<style lang="stylus">
    page{
        background: #efefef;
    }
    .pay-container{
        padding: 20rpx;
    }
    .pay-logo{
        width: 100%;
        height: 300rpx;
        margin-bottom: 50rpx;
        background: #795da3;
    }
    .login-pay div{
        width: 90%;
        margin: 0 auto 20rpx auto;
        height:88rpx;
        text-align: center;
        line-height: 88rpx;
        font-size: 28rpx;
        color: #fff;
        border-radius: 10rpx;
    }
    .wx-login{
        background: green;
    }
    .phone-login {
        background: #0086b3;
    }

</style>
