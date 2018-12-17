<template>
    <div class="pay-container">
        <div class="pay-logo">

        </div>
        <div class="login-pay">
            <div class="wx-login">
                <button class="Btn wxBtn wxLogin" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
                    微信用户一键登录
                </button>
            </div>
            <div class="phone-login" @click="phoneLogin">输入手机号注册登录</div>
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
            // 微信一键登录
            getPhoneNumber(e) {
                //获取用户手机号授权
                const me = this;
                if(e.mp.detail.encryptedData) {
                    wx.login({
                        success: res => {
                            console.log(res)
                            const getUseInfo = {
                                code: res.code,
                                iv: e.mp.detail.iv,
                                encryptedData: e.mp.detail.encryptedData,
                            }
                            wx.request({
                                url: `${process.env.BASE_URL}/api/ValuaLogin/AuthLogin`,
                                data: getUseInfo, //传参
                                method: 'post',
                                header: {
                                    'content-type': 'application/json'
                                }, // 设置请求的 header
                                success: function(res) {
                                    if(res.data.code == 0) {
                                        console.log(res);
                                        var userInfo =JSON.stringify(res.data.data);
                                        wx.setStorage({
                                            key: 'userInfo',
                                            data: userInfo,
                                        });
                                        // pagegoBack();
                                    }
                                },
                                fail(err) {
                                    console.log(err);
                                },
                            })
                        }
                    });
                }
            },
            // 手机号登录
            phoneLogin() {
                wx.redirectTo({
                    url: "/pages/phoneLogin/main",
                });
            },

        },
    };
</script>

<style lang="stylus">
    page{
        background: #F5F4FA;
    }
    button::after {
        border: none;
    }
    .pay-container{
        padding: 20rpx;
    }
    .pay-logo{
        width: 100%;
        height: 300rpx;
        margin-bottom: 50rpx;
    }
    .login-pay div{
        width: 90%;
        margin: 0 auto 30rpx auto;
        height:88rpx;
        text-align: center;
        line-height: 88rpx;
        font-size: 28rpx;
        color: #fff;
        border-radius: 10rpx;
    }
    .wxLogin{
        background: green;
        color:#fff;
        font-size: 28rpx;
        height:88rpx;
        line-height: 88rpx;
    }
    .phone-login {
        background: #47B0CE;
    }

</style>
