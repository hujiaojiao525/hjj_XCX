<template>
    <div class="recharge">
        <div class="recharge-top">
            <h2 class="recharge-title">充值金额</h2>
            <ul class="recharge-list">
                <li>100元</li>
                <li>50元</li>
                <li>200元</li>
                <li>1000元</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store';
    export default {
        store,
        data() {
            return {
            	
            };
        },
        onShow() {

            
        },
        onUnload() {
            
        },
        methods: {
            
        }
    };
</script>

<style>
    .recharge-top{
        padding: 20rpx;
    }
    .recharge-title{
        height: 50rpx;
        line-height: 50rpx;
        color: #1a1a1a;
        font-size: 28rpx;
    }
    .recharge-list{
        /*display: flex;
        justify-content: space-between;*/
    }
    .recharge-list li{
        width: 40%;
        height: 100rpx;
        line-height: 100rpx;
        display: inline-block;
        text-align: center;
        border: 1rpx solid #ddd;
    }
</style>
