<template>
    <div class="container">
        <div class="title">
            <image src="../../static/image/defaultHeadImg.png"></image>
        </div>
        <div class="input-wrapper border-top">
            <span class="label-text">手机号</span>
            <input
                class="inputbox"
                v-model.trim="telNumber"
                maxlength="11"
                type="number"
                placeholder="输入手机号"
                placeholder-class="placeholder"
                @focus="onFocus(1)"
                @blur="onBlur(1)" />
            <span class="clear-btn" v-show="!!telNumber && telNumberFocused" @click="onClear(1)">x</span>
        </div>
        <div class="input-wrapper top-margin positionR">
            <span class="label-text">短信验证码</span>
            <input
                class="inputbox"
                type="text"
                v-model.trim="securityCode"
                placeholder="输入验证码"
                maxlength="6"
                placeholder-class="placeholder"
                @focus="onFocus(2)"
                @blur="onBlur(2)" />
            <span class="clear-btn clear-code" v-show="!!securityCode && passwordFocused"  @click="onClear(2)">x</span>
            <button @click="getNoteCode" :class="{verCodeC:verCodeC}" class="verificationCode">{{getCodeText}}</button>
        </div>
        <div>
            <button :class="{disabled:disabled,'phoneBtnLogin':phoneLogin}" @click="onBtnClick" class="button">登录</button>
        </div>
    </div>
</template>

<script>
    let sec = 59;
    let secTimer=null;
    import { toast, pagegoBack } from "utils";

    export default {
        data() {
            return {
                openType: null,
                telNumber: "", //手机号
                securityCode: "", //短信验证码
                getCodeText: "获取验证码", //验证码获取
                telNumberFocused: true,
                passwordFocused: false,
                userCode:"",
                phoneLogin:false,
            };
        },
        computed: {
            //登录按钮禁用
            disabled() {
                return(!this.telNumber || !this.securityCode);
            },
            //获取验证码禁用
            verCodeC() {
                return(!this.telNumber);
            },
        },
        onUnload(){
            clearInterval(secTimer);
            sec = 59;
        },
        mounted() {
            this.clearText();//进登录页面清楚登录数据
            this.wxLogin();
        },
        methods: {
            //获取用户的code
            wxLogin: function() {
                wx.login({
                    success: res => {
                        this.userCode= res.code;
                    }
                });
            },
            //进入页面清楚登录数据
            clearText() {
                var self=this;
                self.telNumber=""; //手机号
                self.securityCode=""; //短信验证码
                self.getCodeText = '获取验证码';
            },
            //手机号的验证
            telNumberV() {
                var self = this;
                if(self.telNumber == "") {
                    wx.showToast({
                        title: "请输入手机号",
                        icon: "none"
                    });
                    return false;
                }
                if(self.telNumber == undefined) {
                    wx.showToast({
                        title: "请输入正确的手机号",
                        icon: "none"
                    });
                    return false;
                }
                var pattern = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
                if(!pattern.test(self.telNumber)) {
                    wx.showToast({
                        title: "请输入正确的手机号",
                        icon: "none"
                    });
                    return false;
                }
                return true;
            },
            //短信验证码不能为空
            emptySecurityCode() {
                var self = this;
                if(self.securityCode == "" || self.securityCode == undefined) {
                    wx.showToast({
                        title: "请输入短信验证码",
                        icon: "none"
                    });
                    return false;
                }
                return true;
            },
            // 清除输入的内容
            onClear(type) {
                // 1:手机号, 2:验证码
                if(type === 1) {
                    this.telNumber = "";
                    this.telNumberFocused = true;
                }
                if(type === 2) {
                    this.securityCode = "";
                    this.passwordFocused = true;
                }
            },
            // 聚焦后改变焦点状态
            onFocus(type) {
                this.changeStatus(type, true)
            },
            // blur后改变状态
            onBlur(type) {
                this.changeStatus(type, false)
            },
            // 改变状态的方法
            changeStatus(type, bol) {
                if(type === 1) {
                    this.telNumberFocused = bol;
                }
                if(type === 2) {
                    this.passwordFocused = bol;
                }
            },
            //获取验证码倒计时
            verifyBtn() {
                var self = this;
                if(!this.verCodeC) {
                    if(secTimer != null) {
                        clearInterval(secTimer);
                    }
                    self.getCodeText = sec + "s后重新获取";
                    secTimer = setInterval(function() {
                        console.log('rrrrrrrrr')
                        self.getCodeText = sec + "s后重新获取";
                        if(sec == 0) {
                            self.getCodeText = "获取验证码";
                            sec = 60;
                            clearInterval(secTimer);
                        }
                        sec--;
                    }, 1000);
                }
            },
            //获取验证码
            getNoteCode() {
                var self = this;
                if(!self.telNumberV()) {
                    return false
                } //手机号验证
                var useInfo = {
                    mobile_no: self.telNumber, //手机号
                }
                wx.request({
                    url: `${process.env.BASE_URL}/sms`,
                    data: useInfo, //传参
                    method: 'get',
                    header: {
                    }, // 设置请求的 header
                    success: function(res) {
                        var msg = res.data.txt;
                        if(res.data.code == 0) {
                            wx.showToast({
                                title: "验证码已发送，请注意查收",
                                icon: "none"
                            });
                            self.verifyBtn(); //验证码倒计时
                        } else {
                            wx.showToast({
                                title: msg,
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
            // 点击登录按钮
            onBtnClick() {
                var self = this;
                let Authorization = '';
                if(!self.telNumberV()) {
                    return false
                } //手机号验证
                if(!self.emptySecurityCode()) {
                    return false
                } //短信验证码非空
                var useInfo = {
                    mobile_no: self.telNumber, //手机号
                    code: self.securityCode, //手机验证码,
                };
                wx.request({
                    url: `${process.env.BASE_URL}/sms`,
                    data: useInfo, //传参
                    method: 'post',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded',
                    }, // 设置请求的 header
                    success: function(res) {
                        var msg = res.data.txt;
                        if(res.data.code == 0) {
                            wx.request({
                                url: `${process.env.BASE_URL}/user_login`,
                                data: {
                                    mobile_no: self.telNumber,
                                }, //传参
                                method: 'post',
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded'
                                }, // 设置请求的 header
                                success: function(loginRes) {
                                    console.log(loginRes)
                                    if(loginRes.data.code == 0) {
                                        Authorization = loginRes.header.Authorization;
                                        // 登录成功  请求获取用户信息的接口
                                        wx.request({
                                            url: `${process.env.BASE_URL}/user_info`,
                                            data: {
                                                user_no: loginRes.data.data.user_no,
                                            }, //传参
                                            method: 'get',
                                            header: {
                                                Authorization: Authorization
                                            }, // 设置请求的 header
                                            success: function(userInfo) {
                                                if(userInfo.data.code == 0) {
                                                    console.log('用户信息获取成功')
                                                    // 存储用户信息
                                                    let userMes = userInfo.data.data;
                                                    userMes.Authorization = Authorization;
                                                    wx.setStorageSync('userInfo', JSON.stringify(userMes))
                                                    // 返回到我的页面
                                                    pagegoBack();
                                                } else {
                                                    wx.showToast({
                                                        title: '用户信息获取失败',
                                                        icon: "none"
                                                    });
                                                }
                                            },
                                        })

                                    } else {
                                        wx.showToast({
                                            title: '登录失败',
                                            icon: "none"
                                        });
                                    }
                                },
                            })
                        } else {
                            wx.showToast({
                                title: msg,
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
    .container {
        width: 686rpx;
        margin: 0 auto;
    }
    .title {
        text-align: center;
    }
    .title image{
        width: 200rpx;
        height: 200rpx;
        margin: 35rpx 0;
    }

    .input-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 104rpx;
        line-height: 104rpx;
        border-bottom: 1rpx solid #ddd;
    }

    .positionR {
        position: relative;
    }

    .label-text {
        font-size: 16px;
    }

    .border-top {
        border-top: 1rpx solid #ddd;
    }

    .inputbox {
        flex: 1;
        margin-left: 32rpx;
        font-size: 16px;
    }

    .clear-btn{
        width: 30rpx;
        height: 30rpx;
        background: #ddd;
        text-align: center;
        line-height: 20rpx;
        font-size: 12px;
        border-radius: 100%;
        margin-right: 30rpx;
        color: #999;
    }

    .clear-code {
        margin-right: 300rpx;
    }

    .top-margin {
        margin-top: 14rpx;
    }

    .placeholder {
        font-size: 16px;
        color: #ccc;
    }

    .err {
        margin: 24rpx 0;
        font-size: 12px;
        color: #FF5656;
        letter-spacing: 0;
        line-height: 24px;
    }

    img.captcha {
        width: 140rpx;
        height: 68rpx;
    }

    button::after {
        border: none;
    }

    .verificationCode {
        font-size: 32rpx;
        color: #5690E8;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 999;
        background: #fff;
    }

    .verCodeC {
        color: #CCC;
    }

    .msgSuccess {
        font-size: 30rpx;
        color: #999;
        margin-top: 40rpx;
    }

    .msgSuccess img.imgSuccess {
        width: 40rpx;
        height: 40rpx;
        position: relative;
        top: 5rpx;
        left: 10rpx;
        margin-right: 30rpx;
    }

    .button {
        width: 686rpx;
        height: 88rpx;
        line-height: 88rpx;
        margin-top: 48rpx;
        font-size: 36rpx;
        color: #fff;
        text-align: center;
        background: #538EEB;
        border-radius: 8rpx;
    }

    .disabled {
        background: #C4D5F9;
    }

    .ewm {
        text-align: center;
        margin-top: 120rpx;
    }

    p {
        font-size: 24rpx;
        color: #999999;
        margin-top: 30rpx;
    }
</style>
