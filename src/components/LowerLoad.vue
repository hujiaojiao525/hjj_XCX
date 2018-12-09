<template>
    <div class="loading">
        <!-- 上拉加载的文案 -->
        <div class="more-box" v-show="showText">
            <span class="more-img" v-show="loading">
                <image class="more-loading" src="../../static/image/lower-load.gif" />
            </span>
            <span class="more-img" v-show="!loading">
                <i class="more-bottom iconfont icon-dibu"></i>
            </span>
            <span>{{lowerText}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            showText: {
                type: Boolean,
                default: true
            },
            loading: {
                type: Boolean,
                default: true
            },
            lowerText: {
                type: String,
                default: '上拉加载更多'
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .more-box{
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        font-size: 28rpx;
        color: #999999;
        background:#f6f7f9;
    }
    .more-img .more-bottom{
        font-size: 30rpx;
        display:inline-block;
        margin-right:18rpx;
    }
    .more-loading{
        width:32rpx;
        height:32rpx;
        display:inline-block;
        vertical-align:-6rpx;
        margin-right:18rpx;

    }
    .more-box span{
        vertical-align: middle;
    }
        
</style>

