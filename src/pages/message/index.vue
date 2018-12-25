<template>
    <div class="message-detail">
        <div class="mes-top">
            <div class="mes-title">
                <p>凯伦伟</p>
                <span>0755-67676767</span>
            </div>
            <div class="mes-content">
                <div class="content-left">
                    <p>120wk充电桩凯悦酒店</p>
                    <p>广西省可院士除恶除恶你几年级</p>
                </div>
                <div class="content-right">
                    <span>616.78m</span>
                </div>
            </div>
            <div class="span-mes">
                桩体信息：
                <span>120kw</span>
                <span>国标</span>
                <span>直流快充</span>
            </div>
            <div class="use-content">
                <p>
                    <span class="red">1.50</span>/度
                </p>
                <p>含服务费：¥0.00/度</p>
                <i class="iconfont icon-jiantou  right"></i>
            </div>
            <p class="number">
                桩体编号：<span>39273827482424</span>
            </p>
        </div>
        <div class="mes-bottom">
            <p class="number">
                桩体编号：<span>请确保充电枪已插入电车</span>
            </p>
            <div class="choose-box">
                <div>
                    <span>A</span>
                    <span>充电中</span>
                </div>
                <div>
                    <span>B</span>
                    <span>已插枪</span>
                </div>
            </div>
        </div>
        <div class="mes-btn">
            立即充电
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
    .mes-top, .mes-bottom{
        background-color: #fff;
        padding: 30rpx;
        font-size: 30rpx;
        margin-bottom: 20rpx;
    }
    .mes-title, .mes-content, .use-content{
        margin-bottom: 40rpx;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
    }
    .mes-title p{
        padding-left:30rpx;
    }
    .mes-title span{
        color: blue;
    }
    .mes-content{
        align-items: center;
    }
    .mes-content .content-left p{
        line-height: 60rpx;
    }
    .span-mes {
        margin-bottom: 40rpx;
    }
    .span-mes span{
        color:#0086b3;
        border: 1rpx solid #0086b3;
        border-radius: 25rpx;
        padding: 5rpx 10rpx;
        margin: 0 8rpx;
    }
    .red{
        color: #f00;
    }

    .right{
        display: inline-block;
        font-size: 24rpx;
        vertical-align: middle;
    }
    .number span{
        color: #666;
    }
    .mes-bottom{
        padding-top: 30rpx;
    }
    .choose-box{
        margin: 80rpx 50rpx;

    }
    .choose-box div{
        width: 150rpx;
        height: 150rpx;
        border: 2rpx solid #0086b3;
        text-align: center;
        display: inline-block;
        margin-right: 30rpx;
        border-radius: 10rpx;
        color: #0086b3;
        box-sizing: border-box;
        padding-top: 30rpx;
    }
    .choose-box div span{
        display: block;
    }
    .choose-box div span:first-child{
        margin-bottom: 20rpx;
    }
    .mes-btn{
        width: 80%;
        height: 100rpx;
        border-radius: 50rpx;
        background: #0086b3;
        color: #fff;
        text-align: center;
        line-height: 100rpx;
        font-size: 28rpx;
        margin: 80rpx auto;
    }

</style>
