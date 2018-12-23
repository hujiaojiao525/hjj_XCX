<template>
    <div class="charge-success">
        <div class="success-top">
            <image src="../../static/image/success.png"></image>
            <span class="blue">已验证</span>
            <image src="../../static/image/wenhao.png"></image>
            <span>未验证</span>
        </div>
        <ul class="">
            <li>
                <image src="../../static/image/wenhao.png"></image>
                <div class="charge-mes">
                    <p>未知车型</p>
                    <p>X200</p>
                </div>
                <p class="border-text">103号交流</p>
                <p class="number">1***8</p>
                <p class="time">2小时前</p>
            </li>
            <li>
                <image src="../../static/image/wenhao.png"></image>
                <p class="charge-mes">未知车型</p>
                <p class="border-text">103号交流</p>
                <p class="number">1***8</p>
                <p class="time">12-20 08:47</p>
            </li>
        </ul>
        <bottomLine></bottomLine>
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
        }
    };
</script>

<style>
    page{
        background: #F5F4FA;
    }
    .success-top{
        background: #ffffff;
        text-align: right;
        border-bottom: 1rpx solid #ccc;
        padding: 20rpx 30rpx 20rpx 0;
    }
    .success-top image{
        width: 40rpx;
        height: 40rpx;
        vertical-align: middle;
        margin: 0 20rpx;
    }
    .success-top span{
        font-size: 30rpx;
    }
    .success-top .blue{
        color: #47B0CE;
    }
    .charge-success li{
        background: #fff;
        padding: 30rpx;
        font-size: 28rpx;
        display: flex;
        justify-content: space-between;
        color: #ccc;
    }
    .charge-success li image{
        width: 40rpx;
        height: 40rpx;
    }
    .charge-mes{
        width: 20%;
        text-align: left;
    }
    .border-text{
        border: 1rpx solid blue;
        color: blue;
        width: 150rpx;
        height: 50rpx;
        line-height: 50rpx;
        text-align: center;
        border-radius: 8rpx;
    }
    .time{
        width: 25%;
        text-align: right;
    }
</style>
