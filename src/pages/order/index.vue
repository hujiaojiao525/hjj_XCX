<template>
    <div class="order-list">
        <ul class="order-tab">
            <li v-for="(item,index) in orderList" :key="index"
                @click="changeTab(item.id)"
                :class="{choose: chooseId === item.id}">
                {{item.val}}
                <span class="tab-line" v-show="chooseId === item.id"></span>
            </li>
        </ul>
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
                    {val: '全部订单',id:0},
                    {val: '待支付',id:1},
                    {val: '已支付',id:2},
                    {val: '待评论',id:3},
                ],
                chooseId: 0,
                isShowBlank: true
            };
        },
        onShow() {


        },
        onUnload() {

        },
        methods: {
            changeTab(id) {
                this.chooseId = id;
            },
        }
    };
</script>

<style>
    page{
        background: #F5F4FA;
    }
    .order-tab{
        height: 100rpx;
        line-height: 100rpx;
        border: 2rpx solid #ddd;
        font-size: 30rpx;
        color: #1a1a1a;
        background: #ffffff;
    }
    .order-tab li{
        width: 25%;
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
