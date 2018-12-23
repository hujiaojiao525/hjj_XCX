<template>
    <div class="terminal-detail">
        <div class="terminal-box">
            <div class="tab-right-left">
                <p><span class="big-text">101</span>号</p>
                <p class="top-label">不对外开放</p>
                <p class="bottom-label">芝麻信用</p>
            </div>
            <div class="tab-right-middle">
                <p @click="goToPowerDetail">
                    <b>北京第三终极人民法院充电站</b>
                    <i class="iconfont icon-jiantou  right"></i>
                </p>
                <p><span>编号</span><span>829183989</span></p>
                <p><span>终端类型</span><span>快充</span></p>
                <p><span>充电接口</span><span>国标2011</span></p>
                <p><span>车位号</span><span>无</span></p>
                <p><span>功率</span><span>30kW</span></p>
                <p><span>电压</span><span>200V-450V</span></p>
                <p><span>电源类型</span><span>12V/24V</span></p>
            </div>
            <div class="tab-right-right">
                <p>
                    <span class="green-red">空闲</span>
                    <span class="green-bj">快</span>
                </p>
            </div>
        </div>
        <ul class="detail-list">
            <li>
                <p class="list-left">当前价格</p>
                <div class="list-right">
                    <p><span class="red">1.3800</span>元/度(含服务费)</p>
                    <p class="gray-color" @click="goToPriceDetail">
                        <span>全天价格统一</span>
                        <span>价格详情</span>
                        <i class="iconfont icon-jiantou  right"></i>
                    </p>
                </div>
            </li>
            <li>
                <p class="list-left">停车费</p>
                <div class="list-right">
                    <p>免费</p>
                </div>
            </li>
            <li>
                <p class="list-left black">近七天成功充电<span class="red">11</span>次</p>
                <div class="list-right">
                    <p>
                        <span>查看详情</span>
                        <i class="iconfont icon-jiantou  right"></i>
                    </p>
                </div>
            </li>
        </ul>
        <div class="pay-content black">支付账户<span class=""> 个人账户</span></div>
        <div class="go-recharge">
            <p>账户余额 <span><span class="blue">1.00</span>元</span></p>
            <p @click="goToRecharge">
                <span>去充值</span>
                <i class="iconfont icon-jiantou  right"></i>
            </p>
        </div>
        <div class="tip">请插枪后下拉刷新</div>
        <div class="terminal-btn">立即充电</div>
        <div class="go-home" @click="goToHome">
            首页
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

            };
        },
        components: {
            bottomLine
        },
        onShow() {


        },
        onUnload() {

        },
        methods: {
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
    .terminal-box{
        background-color: #fff;
        padding: 10rpx 30rpx;
        border-top: 1rpx solid #ddd;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        font-size: 30rpx;
        margin-bottom: 20rpx;
    }
    .right{
        display: inline-block;
        font-size: 24rpx;
        vertical-align: middle;
        margin-top: -20rpx;
    }
    .big-text{
        font-size: 52rpx;
    }
    .tab-right-left{
        text-align: center;
    }
    .top-label{
        padding: 6rpx 16rpx;
        background: #A6CEE7;
        color:#ffffff;
        margin-top: 25rpx;
        margin-bottom: 10rpx;
        border-radius: 10rpx;
    }
    .bottom-label{
        padding: 6rpx 16rpx;
        background:  #70C1AE;
        color:#ffffff;
        border-radius: 10rpx;
    }
    .tab-right-middle{
        width: 45%;
    }
    .tab-right-middle b{
        display: inline-block;
        width: 87%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .tab-right-middle p{
        margin-bottom: 10rpx;
    }
    .tab-right-middle p span:first-child{
        color: #666;
        margin-right: 20rpx;
        display: inline-block;
        width: 130rpx;
    }
    .tab-right-right{
        width: 18%;
    }
    .tab-right-right span{
        color: #ffffff;
        border-radius: 8rpx;
        padding:3rpx 5rpx;
    }
    .tab-right-right span{
        margin-right: 12rpx;
    }
    .tab-right-right .green-bj{
        background: #e08c70;
    }
    .tab-right-right .green-red{
        background: #5DBA23;
    }
    .tab-right-right .green-gray{
        background: #5DBA23;
    }
    .detail-list{
        background: #fff;
        margin-bottom: 15rpx;
    }
    .detail-list li{
        border-bottom: 1rpx solid #ccc;
        font-size: 30rpx;
        padding: 20rpx 30rpx;
        display: flex;
        justify-content: space-between;
    }
    .list-left{
        color: #666;
    }
    .list-left.black{
        color: #1a1a1a;
    }
    .detail-list .red{
        color: #f00;
    }
    .gray-color{
        color: #666;
    }
    .list-right .right{
        display: inline-block;
        margin-left: 10rpx;
        margin-top: 15rpx;
        vertical-align: middle;
        margin-bottom: 10rpx;
    }
    .list-right p:first-child{
        margin-bottom: 10rpx;
    }
    .pay-content{
        margin-top: 20rpx;
        background: #fff;
        padding: 20rpx 30rpx;
        font-size: 28rpx;
    }
    .go-recharge{
        margin-top: 20rpx;
        background: #fff;
        padding: 20rpx 30rpx;
        font-size: 28rpx;
        display: flex;
        justify-content: space-between;
    }
    .go-recharge .right{
        margin-top: 0;
    }
    .go-recharge .blue{
        color: blue;
    }
    .tip{
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        color: #666;
        font-size: 24rpx;
    }
    .terminal-btn{
        height:90rpx;
        line-height: 90rpx;
        width: 90%;
        margin: 0 auto;
        color: #666;
        background: #ccc;
        text-align: center;
        font-size: 28rpx;
        border-radius: 10rpx;
    }
    .go-home{
        position: fixed;
        width: 120rpx;
        height: 120rpx;
        border-radius: 100%;
        background: rgba(20,204,200,0.8);
        color: #fff;
        text-align: center;
        line-height: 120rpx;
        font-size: 28rpx;
        right: 50rpx;
        bottom: 230rpx;
    }

</style>
