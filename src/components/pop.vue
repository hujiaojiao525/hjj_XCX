<template>
    <div class="popLayer" v-show="isShowLayerPop">
        <div class="pop-box">
            <div class="pop-message">
                <p class="pop-text">{{text}}</p>
                <!--换行的文案-->
                <p class="else-text" :style="{ color: colorStyle }">{{elseText}}</p>
            </div>
            <div class="pop-btn" v-if="!oneBtn">
                <form @submit="clickLeft" report-submit="true">
                    <button formType="submit" class="button left-btn"
                            :style="{color: leftBtnStyle}">{{leftBtnText}}</button>
                </form>
                <form @submit="clickRight" report-submit="true">
                    <button formType="submit" class="button right-btn"
                            :style="{color: rightBtnStyle}">{{rightBtnText}}</button>
                </form>
            </div>
            <div class="pop-onlyBtn" v-if="oneBtn">
                <form @submit="clickOnly" report-submit="true">
                    <button formType="submit" class="button only-btn"
                            :style="{color: onlyBtnStyle}">{{onlyBtnText}}</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            text: {
                type: String,
                default: ''
            },
            elseText: {
                type: String,
                default: ''
            },
            oneBtn: {
                type: Boolean,
                default: false
            },
            colorStyle: {
                type: String,
                default: '#157EFB'
            },
            leftBtnText: {
                type: String,
                default: ''
            },
            rightBtnText: {
                type: String,
                default: ''
            },
            onlyBtnText:{
                type: String,
                default: ''
            },
            leftBtnStyle: {
                type: String,
                default: '#1A1A1A'
            },
            rightBtnStyle: {
                type: String,
                default: '#1A1A1A'
            },
            onlyBtnStyle: {
                type: String,
                default: '#4DA6FF'
            },
            isShowLayerPop: {
                type: 'Boolean',
                default: false
            }
        },
        methods: {
            clickLeft(event) {
                this.$emit('clickLeft');
            },
            clickRight(event) {
                this.$emit('clickRight');
            },
            clickOnly(event){
                this.$emit('clickOnly');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    button::after {
        border: none;
    }
    button {
        background-color: #fff;
        border-radius :0;
    }
    .popLayer{
        width: 100%;
        height:100%;
        position: fixed;
        left:0;
        top:0;
        background:rgba(0,0,0,.6);
        z-index:5;
    }
    .pop-box{
        width:560rpx;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate3d(-50%,-50%,0);
        background:#fff;
        border-radius: 14rpx;
        overflow:hidden;
    }
    .pop-message{
        padding: 40rpx 40rpx 28rpx 40rpx;
        border: 1rpx solid #D6D5D7;
        font-size: 32rpx;
        text-align: center;
    }
    .pop-text{
        color: #1A1A1A;
    }
    .pop-btn{
        height: 94rpx;
        line-height: 94rpx;
    }
    .left-btn, .right-btn{
        height: 94rpx;
        line-height: 94rpx;
        display:inline-block;
        padding:0;
        width: 50%;
        color: #1A1A1A;
        font-size: 32rpx;
    }
    .left-btn{
        border-right: 1rpx solid #D6D5D7;
    }
    .pop-onlyBtn{
        height: 94rpx;
        line-height: 94rpx;
        color:#4DA6FF;
    }
    .pop-onlyBtn button{
        font-size: 32rpx;
    }
</style>

