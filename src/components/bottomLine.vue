<template>
	<div class="pay-time">
        <span></span>
        <p>{{bottomText}}</p>
    </div>
</template>
<script>
    export default {
        name: 'Split',
        props: {
            bottomText: {
                type: String,
                default: '没有更多了',
            },
        },
    };
</script>
<style>
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
</style>