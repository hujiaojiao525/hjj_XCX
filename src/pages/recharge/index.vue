<template>
    <div class="recharge">
        <div class="recharge-top">
            <h2 class="recharge-title">充值金额</h2>
            <ul class="recharge-list">
                <li v-for="(item,index) in moneyType" :key="index"
                    :class="{choose: item.id === chooseMoneyId}"
                    @click="chooseSearch(item.id)">
                    {{item.value}}
                </li>
            </ul>
        </div>
        <!--金额手动输入-->
        <div class="recharge-input">
            <span class="recharge-label">金额（元）</span>
            <input type="number" placeholder-style="color:#cccccc" placeholder="请输入金额">
        </div>
        <p class="recharge-mes">
            点击立即充值即表示您已阅读并同意<span class="recharge-pro">《充值协议》</span>
        </p>
        <div class="recharge-btn">立即充值</div>
        <div class="balance" @click="goToBalanceDetail">点击查看余额明细</div>
    </div>
</template>
<script>
    import store from '../vuex/store';
    export default {
        store,
        data() {
            return {
                moneyType: [
                    {value: '100元',id: 100},
                    {value: '50元',id: 50},
                    {value: '200元',id: 200},
                    {value: '1000元',id: 1000},
                ],
                chooseMoneyId: 100
            };
        },
        onShow() {


        },
        onUnload() {

        },
        methods: {
            goToBalanceDetail() {
                wx.navigateTo({
                    url: '/pages/balanceDetail/main'
                })
            },
            chooseSearch(id) {
                this.chooseMoneyId = id;
            },
        }
    };
</script>

<style>
    .recharge-top{
        padding-left: 25rpx;
    }
    .recharge-title{
        height: 100rpx;
        line-height: 100rpx;
        color: #1a1a1a;
        font-size: 32rpx;
    }
    .recharge-list{
        /*display: flex;
        justify-content: space-between;*/
    }
    .recharge-list li{
        width: 327rpx;
        height: 100rpx;
        line-height: 100rpx;
        display: inline-block;
        text-align: center;
        border: 1rpx solid #ddd;
        margin-right: 30rpx;
        margin-bottom: 30rpx;
        border-radius: 10rpx;
        color: #666;
    }
    .recharge-list li.choose{
        border-color:#47B0CE;
        color: #47B0CE;
    }
    .recharge-input{
        height: 110rpx;
        line-height: 110rpx;
        border-top: 1rpx solid #ddd;
        border-bottom: 1rpx solid #ddd;
        padding-left: 35rpx;
        color: #1a1a1a;
        display: flex;
        margin-bottom: 100rpx;
    }
    .recharge-input span{
        font-size: 32rpx;
    }
    .recharge-input input{
        height: 110rpx;
        margin-left: 50rpx;
    }
    .recharge-mes{
        color: #666666 ;
        font-size: 28rpx;
        line-height: 40rpx;
        padding-left: 25rpx;
        margin-bottom: 20rpx;
    }
    .recharge-pro{
        color: cornflowerblue;
    }
    .recharge-btn{
        height: 90rpx;
        line-height: 90rpx;
        text-align: center;
        color: #ffffff;
        font-size: 32rpx;
        background: #47B0CE;
        width: 94%;
        margin: 0 auto;
        border-radius: 10rpx;
    }
    .balance{
        padding-right: 25rpx;
        text-align: right;
        text-decoration:underline;
        font-size: 30rpx;
        color:#666;
        margin-top:15rpx;
    }
</style>
