<template>
	<div class="no-more">
		<div class="no-mes" v-show="isShowBlank">
	        <div class="img-box">
	            <image src="../../static/image/message.png"></image>
	        </div>
	        <p>{{bottomText}}</p>
	    </div>
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
            isShowBlank: {
                type: Boolean,
                default: true,
            },
        },
    };
</script>
<style>
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