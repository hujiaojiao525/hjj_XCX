<template>
    <div class="balance-detail">
        <div class="balance-screen" @click="screenFun">筛选</div>
        <div class="balance-list">
            <h2 class="balance-title">本月</h2>
            <ul class="list-box" v-if="requestData!=null">
                <li v-for="(item,index) in requestData" :key="index">
                    <image class="balance-img" src="../../static/image/balance.png"></image>
                    <div class="list-mes">
                        <p class="list-title">充值</p>
                        <p class="list-time">{{item.create_time}}</p>
                    </div>
                    <p class="list-money">+<span>{{item.pay_fee/100}}</span>元</p>
                </li>
            </ul>
            <!-- <div class="pay-time">
                <span></span>
                <p>近{{payText}}个月的消费记录</p>
            </div> -->
        </div>
        <!--筛选内容项-->
        <div class="layer" v-show="isShowScreenList" @click="clickLayer"></div>
        <div class="screen-box" v-show="isShowScreenList">
            <h2>查询类型</h2>
            <ul>
                <li v-for="(item,index) in searchType" :key="index"
                    :class="{choose: index === searchTypeId}" @click="chooseSearch(item.id)">
                    {{item.value}}
                </li>
            </ul>
            <h2>时间跨度</h2>
            <ul>
                <li v-for="(item,index) in timeType" :key="index"
                    :class="{choose: index === timeTypeId}" @click="chooseTime(item.id, index)">
                    {{item.value}}
                </li>
            </ul>
            <div class="balance-btn">
                <div @click="resetFun" class="balance-reset">重置</div>
                <div @click="finishFun" class="balance-sure">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store';
    export default {
        store,
        data() {
            return {
                searchType: [
                    {value: '全部',id: 0},
                    {value: '充值',id: 1},
                    // {value: '消费',id: 2},
                    // {value: '退款',id: 3},
                ],
                timeType: [
                    {value: '近1月',id: 0},
                    // {value: '近3月',id: 1},
                    // {value: '近6月',id: 2},
                ],
                searchTypeId: 0,
                timeTypeId: 0,
                isShowScreenList: false,
                payText: '一',
                requestData: null,
            };
        },
        onShow() {
            this.getStorage();

        },
        onUnload() {
            this.requestData = null;
            this.searchTypeId = 0;
            this.timeTypeId = 0;
            this.isShowScreenList = false;
        },
        methods: {
            // 点击筛选
            screenFun() {
                this.isShowScreenList = !this.isShowScreenList;
            },
            chooseSearch(index) {
                this.searchTypeId = index;
            },
            chooseTime(index, time) {
                this.timeTypeId = index;
            },
            resetFun() {
                this.searchTypeId = 0;
                this.timeTypeId = 0;
            },
            finishFun() {
                // 点击完成
                switch (this.timeTypeId) {
                    case 0:
                        this.payText = '一';
                        break;
                    case 1:
                        this.payText = '三';
                        break;
                    case 2:
                        this.payText = '六';
                        break;
                }
                this.isShowScreenList = false;
                this.listRequest(this.searchTypeId);
            },
            clickLayer() {
                this.isShowScreenList = false;
            },
            // 初始化获取用户信息
            getStorage() {
                var userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : '';
                if (userInfo) {
                    this.userInfo = userInfo;
                    this.listRequest(0);
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
                    url: `${process.env.BASE_URL}/pay_order_list`,
                    data: {
                        user_no: me.userInfo.user_no,
                        type: typeVal,
                    }, //传参
                    method: 'get',
                    header: header, // 设置请求的 header
                    success: function(res) {
                        if(res.data.code == 0) {
                            me.requestData = res.data.data;
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
    page{
        background: #F5F4FA;
    }
    .balance-screen{
        height: 90rpx;
        line-height: 90rpx;
        background: #ffffff;
        text-align: right;
        padding-right: 50rpx;
        font-size: 28rpx;
    }
    .balance-list{

        box-sizing: border-box;
    }
    .balance-title{
        height: 88rpx;
        line-height: 88rpx;
        font-size: 30rpx;
        color: #1a1a1a;
        padding: 0 30rpx;
    }
    .list-box{
        background: #fff;
        padding: 25rpx 30rpx;
    }
    .list-box li{
        display: flex;
        justify-content: space-between;
        padding:20rpx 0rpx;
        border-bottom: 1rpx solid #ddd;
    }
    .list-box li:last-child{
        border-bottom: none;
    }
    .balance-img{
        width: 80rpx;
        height: 80rpx;
        vertical-align: middle;
    }
    .list-mes{
        width: 50%;
    }
    .list-mes .list-title{
        font-size: 32rpx;
    }
    .list-mes .list-time{
        color: #ccc;
        font-size: 28rpx;
        margin-top: 5rpx;
    }
    .list-money{
        color: #1a1a1a;
        font-size: 30rpx;
        text-align: right;
        width: 30%;
        line-height: 80rpx;
    }
    .pay-time{
        padding: 30rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        position: relative;
    }
    .pay-time span{
        height: 2rpx;
        width: 94%;
        background: #ddd;
        position: absolute;
        left:3%;
        margin-top: 38rpx;
        z-index: 0;
    }
    .pay-time p{
        background: #F5F4FA;
        color: #666666;
        padding: 0 20rpx;
        font-size: 28rpx;
        position: absolute;
        z-index:5;
        left: 50%;
        transform: translateX(-50%);
    }
    .screen-box{
        border-top: 1rpx solid #efefef;padding-top:10rpx;
        position: fixed;
        top: 90rpx;
        background: #ffffff;
        width: 100%;
        padding: 10rpx 0 0 30rpx;
        color: #1a1a1a;
        z-index: 10;
    }
    .screen-box h2{
        line-height: 80rpx;
        font-size: 28rpx;
    }
    .screen-box li{
        width: 220rpx;
        display: inline-block;
        height: 70rpx;
        line-height: 70rpx;
        text-align: center;
        background: #e9e9e9;
        font-size: 28rpx;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        border-radius: 8rpx;
    }
    .screen-box li.choose{
        background: #47B0CE;
        color:#fff;
    }
    .balance-btn{
        margin: 30rpx 0;
        display: flex;
    }
    .balance-btn div{
        height: 70rpx;
        line-height: 70rpx;
        text-align: center;
        font-size: 32rpx;
        width: 44%;
        border-radius: 10rpx;
    }
    .balance-reset{
        border: 1rpx solid #ddd;
        margin-right: 30rpx;
    }
    .balance-sure{
        background: #47B0CE;
        color: #fff;
    }
    .layer{
        width: 100%;
        height:100%;
        position: fixed;
        left:0;
        top:90rpx;
        z-index:9;
        background: rgba(0,0,0,0.3);

    }
</style>
