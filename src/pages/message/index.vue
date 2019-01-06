<template>
    <div class="message-detail" v-if="requestData != null">
        <div class="mes-top">
            <div class="mes-title">
                <p>{{requestData.charge_name}}</p>
                <span>0755-67676767</span>
            </div>
            <div class="mes-content">
                <div class="content-left">
                    <p>120wk充电桩凯悦酒店</p>
                    <p>{{requestData.charge_address}}</p>
                </div>
                <div class="content-right">
                    <span>616.78m</span>
                </div>
            </div>
            <div class="span-mes">
                桩体信息：
                <span>120kw</span>
                <span>国标</span>
                <span>直流快充</span>
            </div>
            <div class="use-content">
                <p>
                    <span class="red">1.50</span>/度
                </p>
                <p>含服务费：¥0.00/度</p>
                <i class="iconfont icon-jiantou  right"></i>
            </div>
            <p class="number">
                桩体编号：<span>{{requestData.spear_no}}</span>
            </p>
        </div>
        <div class="mes-bottom">
            <p class="number">
                桩体编号：<span>请确保充电枪已插入电车</span>
            </p>
            <div class="choose-box">
                <div v-for="(item,index) in chooseType" :key="index"
                    :class="{chooseStatus: item.id === chooseId}" @click="chooseSearch(item.id)">
                    <span>{{item.num}}</span>
                    <span>{{item.value}}</span>
                </div>
            </div>
        </div>
        <div class="mes-btn">
            立即充电
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store';
    import bottomLine from '../../components/bottomLine'
    export default {
        store,
        data() {
            return {
                chooseType: [
                    {num: 'A', value: '充电中',id: 1},
                    {num: 'B', value: '已插枪',id: 2},
                ],
                chooseId: '',
                requestData: null,
            };
        },
        components: {
            bottomLine
        },
        onShow() {
            this.getStorage()
        },
        onUnload() {

        },
        methods: {
            chooseSearch(id) {
                this.chooseId = id;
            },
            getStorage() {
                // scanResult
                var userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : '';
                var scanResult = wx.getStorageSync('scanResult');
                this.requestFun(userInfo, scanResult)
            },
            requestFun(userInfo, scanResult) {
                let header = {};
                const self = this;
                /*
                * charge_type 电桩类型(0:对外开发;1:不对外开发;2:个人桩)
                    ground_lock 智能地锁(0:有地锁:1:车位空闲)
                    charge_method  0:直流快充;1:交流快充;2:交流慢充
                    operation_type 0:自营;1:非自营;2:互联互通;3:个人共享;4:个人共享;5:个人专用
                    depot 停车场(0:露天;1:非露天;2:地上;3:地下)
                    parking_fee 停车费(0:免费;1:收费)

                    charge_station_status电桩状态(0:空闲)
                    business_hours 营业时间(0:24小时;1:营业中;2:时间不确定)
                    charge_api 充电接口(0:国标2011;1:国标2015)
                    auxiliary_source 辅源类型(0:12v;1:24v)
                    voltage  电压(0:200v;1:250v;2:280v;3:300v;4:350v;5:450v;6:500v;7:700v;8:750v)
                    stake_2 枪号2

                    stake_1_status 枪号1状态
                    stake_2 枪号2

                    stake_2_status 枪号2状态
                    spear_no 桩号
                *
                * */

                var datas = {
                    "id":1,
                    "auxiliary_source":0,
                    "business_hours":0,
                    "charge_api":0,
                    "charge_method":0,
                    "charge_name":"鼎天新能源 充电桩",
                    "charge_station_status":0,
                    "charge_type":0,
                    "create_time":"2019-01-06 12:06:09",
                    "depot":0,
                    "ground_lock":0,
                    "operation_type":0,
                    "parking_fee":1,
                    "qr_code":"0000000000000001",
                    "spear_no":"10001",
                    "stake_1":1,
                    "stake_1_status":0,
                    "stake_2":2,
                    "stake_2_status":0,
                    "update_time":"2019-01-06 17:09:28",
                    "voltage":0,
                    "charge_address":"北京朝阳区广渠门外大街256号"
                }
                if (userInfo) {
                    header.Authorization = userInfo.Authorization
                }
                wx.request({
                    url: `${process.env.BASE_URL}/charge`,
                    data: {
                        // qr_code: scanResult.replace(/\s/g,"")
                        qr_code: '0000000000000001'
                    }, //传参
                    method: 'get',
                    header: header, // 设置请求的 header
                    success: function(res) {
                        if(res.data.code == 0) {
                            self.requestData = res.data.data;
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
            changeTab(id) {
                this.chooseId = id;
            },
            goToPowerDetail() {
                wx.navigateTo({
                    url: "/pages/powerDetail/main"
                });
            },
            goToRecharge() {
                wx.navigateTo({
                    url: "/pages/recharge/main"
                });
            },
            // 去首页
            goToHome() {
                wx.navigateTo({
                    url: "/pages/map/main"
                });
            },
        }
    };
</script>

<style>
    @import "../../assest/fonts/iconfont.css";
    page{
        background: #F5F4FA;
    }
    .mes-top, .mes-bottom{
        background-color: #fff;
        padding: 30rpx;
        font-size: 30rpx;
        margin-bottom: 20rpx;
    }
    .mes-title, .mes-content, .use-content{
        margin-bottom: 40rpx;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
    }
    .mes-title p{
        padding-left:30rpx;
    }
    .mes-title span{
        color: blue;
    }
    .mes-content{
        align-items: center;
    }
    .mes-content .content-left p{
        line-height: 60rpx;
    }
    .span-mes {
        margin-bottom: 40rpx;
    }
    .span-mes span{
        color:#0086b3;
        border: 1rpx solid #0086b3;
        border-radius: 25rpx;
        padding: 5rpx 10rpx;
        margin: 0 8rpx;
    }
    .red{
        color: #f00;
    }

    .right{
        display: inline-block;
        font-size: 24rpx;
        vertical-align: middle;
    }
    .number span{
        color: #666;
    }
    .mes-bottom{
        padding-top: 30rpx;
    }
    .choose-box{
        margin: 80rpx 50rpx;

    }
    .choose-box div{
        width: 150rpx;
        height: 150rpx;
        border: 2rpx solid #0086b3;
        text-align: center;
        display: inline-block;
        margin-right: 30rpx;
        border-radius: 10rpx;
        color: #0086b3;
        box-sizing: border-box;
        padding-top: 30rpx;
    }
    .choose-box div span{
        display: block;
    }
    .choose-box div span:first-child{
        margin-bottom: 20rpx;
    }
    .choose-box .chooseStatus{
        background: #0086b3;
        color: #fff;
    }
    .mes-btn{
        width: 80%;
        height: 100rpx;
        border-radius: 50rpx;
        background: #0086b3;
        color: #fff;
        text-align: center;
        line-height: 100rpx;
        font-size: 28rpx;
        margin: 80rpx auto;
    }

</style>
