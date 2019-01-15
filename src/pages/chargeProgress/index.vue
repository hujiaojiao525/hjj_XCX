<template>
    <div class="charge-progress">
        <div class="progress-top">
            <div class="charge-time">
                {{showTime}}
            </div>
            <div class="progress-mes">
                <div>
                    <p class="progress-title">已充电量</p>
                    <p>-</p>
                </div>
                <div>
                    <p class="progress-title">充电时长</p>
                    <p class="font-family">
                        {{showTime}}
                    </p>
                </div>
                <div>
                    <p class="progress-title">累计消费</p>
                    <p class="font-family">0.00</p>
                </div>
            </div>
        </div>
        <ul class="progress-list" v-if="requestData!=null">
            <li>
                <h2>我的钱包</h2>
                <p>29.98元</p>
            </li>
            <!-- <li class="margin-bottom">
                <h2>优惠券</h2>
                <p>
                    无可用优惠券
                    <i class="iconfont icon-jiantou  right"></i>
                </p>
            </li> -->
            <li>
                <h2>充电站</h2>
                <p>
                    {{requestData.charge_adress}}
                </p>
            </li>
            <li>
                <h2>充电位</h2>
                <p>
                    {{requestData.charge_no}}
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
            <!-- <li class="margin-bottom">
                <h2>车架号：未识别</h2>
                <p>
                    关联车辆
                    <i class="iconfont icon-jiantou  right"></i>
                </p>
            </li> -->
        </ul>
        <div class="stop-btn" @click="stopBtn">
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
            return {
                second: 0,
                minute: 0,
                hour: 0,
                timer: null,
                showTime: '00:00:00',
                beginTime: '',
                userInfo: null,
                order_no: '',
                amount: '',
                requestData: null,
            };
        },
        components: {
            bottomLine
        },
        onShow() {
            this.beginTime = new Date().getTime();
            this.getStorage();
            
        },
        onLoad(res) {
            // 获取url上的参数
            console.log(res)
            // this.order_no = res.order_no;
            this.order_no = '2019011115471904797641000113'
        },
        onUnload() {
            this.clearData();
        },
        methods: {
            // 充电详情的接口
            requestDetail() {
                const self = this;
                const reqData = {
                    user_no: this.userInfo.user_no,
                    order_no: this.order_no,
                }

                // {
                //     'code': code, 
                //     'data': {
                //         "order_no":"",
                //         "purchase":"", // 消费金额
                //         "power":"",  // 电量（0.01KW/位）
                //         "chargeTime":"", // 充电时间（分钟）
                //         "balance":"",// 余额（分）
                //         "soc":"", // 百分比
                //         "voltage":"", // 电压（0.01V）
                //         "cerrent":"",// 电流
                //         "chargeState":"" // 充电状态0.空闲1充电中2充电结束3故障
                //          "charge_adress"
                //     }
                // }
                const Authorization = this.userInfo.Authorization;
                wx.request({
                    url: `${process.env.BASE_URL}/charge_details`,
                    data: reqData, //传参
                    method: 'post',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'Authorization': Authorization
                    }, // 设置请求的 header
                    success: function(res) {
                        if(res.data.code == 0) {
                            const data = res.data.data;
                            console.log(res)
                            self.requestData = data;
                            self.recordTime(data.chargeTime*60*1000);
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
            clearData() {
                this.second = 0;
                this.minute = 0;
                this.hour = 0;
                this.showTime = '00:00:00';
                this.beginTime = '';
                this.userInfo = null;
                this.order_no = '';
                this.amount = '';
                this.requestData = null;
            },
            // 初始化获取用户信息
            getStorage() {
                var userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : '';
                if (userInfo) {
                    this.userInfo = userInfo;
                    this.amount = userInfo.total_amount / 100;
                    this.requestDetail();
                }
            },
            // 停止结算
            stopBtn() {
                const reqData = {
                    user_no: this.userInfo.user_no,
                    order_no: this.order_no,
                }
                const Authorization = this.userInfo.Authorization;
                // 停止接口
                wx.request({
                    url: `${process.env.BASE_URL}/charge_end`,
                    data: reqData, //传参
                    method: 'post',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'Authorization': Authorization
                    }, // 设置请求的 header
                    success: function(res) {
                        if(res.data.code == 0) {
                            console.log(res)
                            // 结账
                            wx.request({
                                url: `${process.env.BASE_URL}/charge_balance`,
                                data: reqData, //传参
                                method: 'post',
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded',
                                    'Authorization': Authorization
                                }, // 设置请求的 header
                                success: function(res) {
                                    if(res.data.code == 0) {
                                        
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
            timerFun() {
                const self = this;
                let second=0, minute=0, hour=0;

                this.second = this.second + 1;
                if(this.second>=60) {
                    this.second = 0;
                    this.minute = this.minute+1;
                }
                if(this.minute>=60) {
                    this.minute=0;
                    this.hour=this.hour+1;
                }
                second = this.second;
                minute = this.minute;
                hour = this.hour;
                if (this.second < 10) {
                    second = '0'+ this.second;
                }
                if (this.minute< 10) {
                    minute = '0'+ this.minute;
                }
                if (this.hour< 10) {
                    hour = '0'+ this.hour;
                }
                this.showTime = hour+':'+minute+':'+second
                console.log(hour+'时'+minute+'分'+second+'秒')
            },
            recordTime(mss) {
                var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = parseInt((mss % (1000 * 60)) / 1000);
                console.log(hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ")
                this.second = seconds
                this.minute = minutes
                this.hour = hours
                this.timer = setInterval(this.timerFun, 1000)
                // return hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
            },
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
