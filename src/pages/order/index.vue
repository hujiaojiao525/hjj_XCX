<template>
    <div class="order-list">
        <ul class="order-tab">
            <li v-for="(item,index) in orderList" :key="index"
            :class="{choose: chooseId === item.id}" @click="changeTab(item.id)"
                >
                {{item.val}}
                <span class="tab-line" v-show="chooseId === item.id"></span>
            </li>
        </ul>
        <div class="list-box">
            <div v-for="(item,index) in requestData" :key="index">
                <p>
                    <span>消费金额：{{item.amount/100}}元</span>
                </p>
                <p>
                    <span>枪号：{{item.stake_no}}</span>
                    <span>桩号{{item.spear_no}}</span>
                </p>
                <p class="gray-mes">
                    <span>充电量：{{item.power}}</span>
                    <span>{{item.create_time}}</span>
                </p>
            </div>
        </div>       
        <div class="no-mes" v-show="isShowBlank">
            <div class="img-box">
                <image src="../../static/image/message.png"></image>
            </div>
            <p>没有订单</p>
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store';
    export default {
        store,
        data() {
            return {
                orderList: [
                    // {val: '全部订单',id:3},
                    // {val: '预支付',id:0},
                    // {val: '支付成功',id:1},
                    // {val: '支付失败',id:2},
                    {val: '全部订单',id:2},
                    {val: '待支付',id:0},
                    {val: '已支付',id:1},
                ],
                chooseId: 2,
                isShowBlank: false,
                userInfo: null,
                requestData: null,
            };
        },
        onShow() {
            this.getStorage();
        },
        onUnload() {
            this.requestData = null;
            this.chooseId = 2;
            this.isShowBlank = false;
        },
        methods: {
            // 初始化获取用户信息
            getStorage() {
                var userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : '';
                if (userInfo) {
                    this.userInfo = userInfo;
                    this.listRequest(2);
                }
            },
            listRequest(typeVal){
                const me = this;
                let header = {};
                if (this.userInfo) {
                    header.Authorization = this.userInfo.Authorization
                }
                //0:预支付;1:支付成功;2:支付失败3:全部
                wx.request({
                    url: `${process.env.BASE_URL}/charge_order_list`,
                    data: {
                        user_no: me.userInfo.user_no,
                        type: typeVal,
                    }, //传参
                    method: 'get',
                    header: header, // 设置请求的 header
                    success: function(res) {
                        if(res.data.code == 0) {
                            me.requestData = res.data.data;
                            if (me.requestData.length === 0) {
                                me.isShowBlank = true;
                            } else {
                                me.isShowBlank = false;
                            }
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
                this.listRequest(id);
            },
        }
    };
</script>

<style>
    page{
        background: #F5F4FA;
    }
    .list-box div{
        padding: 20rpx;
        background: #fff;
        border-bottom: 1rpx solid #ddd;
    }
    .list-box p{
        line-height: 50rpx;
        font-size: 32rpx;
        color: #1a1a1a;
        display: flex;
        justify-content: space-between;
        font-size: 28rpx;
    }
    .gray-mes span:last-child{
        color: #666;
    }
    .order-tab{
        height: 100rpx;
        line-height: 100rpx;
        border: 2rpx solid #ddd;
        font-size: 30rpx;
        color: #1a1a1a;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
    }
    .order-tab li{
        flex: 1;
        display: inline-block;
        text-align: center;
        position: relative;
    }
    .order-tab li.choose{
        color: #47B0CE;
    }
    .tab-line{
        height: 6rpx;
        background: #47B0CE;
        width: 90%;
        position: absolute;
        bottom:0;
        left: 5%;
    }
    .no-mes{
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }
    .img-box{
        width: 200rpx;
        height: 200rpx;
        background: #ddd;
        border-radius: 100%;
        text-align: center;
    }
    .img-box image{
        width: 100rpx;
        height: 100rpx;
        margin-top: 50rpx;

    }
    .no-mes p{
        line-height: 100rpx;
        font-size: 30rpx;

    }
</style>
