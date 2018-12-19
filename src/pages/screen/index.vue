<template>
    <div class="screen">
        <div class="screen-list">
        	<div v-for="(item,idx) in data" :key="idx">
                <h2>{{item.title}}</h2>
                <ul class="each-list">
                    <li v-for="(val,index) in powerType" :key="index" :class="{choose: powerArr[index]}" @click="powerChooseFun(index)">{{val.label}}</li>
                </ul>
            </div>
            <div class="slider-box">
                <p>查看最低功率15kW-360kW的充电站(仅适用于直流快充)</p>
                <div class="slide-content">
                    <slider class="slider"  activeColor="#47B0CE" @change="sliderChange" @changing="changing" :max="max" :step="step" :value="currentValue" :min="min"/>
                <span class="show-text"><span v-show="finishValue!=360">{{finishValue}}~</span>360</span>
                </div>
            </div>
        </div>
        <div class="screent-bottom">
        	<button  @click="resetFun" class="button reset">
                重置
            </button>
             <button @click="finishFun" class="button finish">
                完成
            </button>
        </div>
    </div>
</template>
<script>
    import store from '../vuex/store';
    export default {
        store,
        data() {
            return {
            	powerType: [
                    {label:'不限'},
                    {label:'精准匹配'},
                    {label:'模糊匹配'},
                ],
                matchTypeVal: 0,
                timeTypeVal: 0,
                sortTypeVal: 0,
                powerArr: [],
                powerValArr: [],
                currentValue: 30,
                finishValue: 30,
                max: 135,
                step: 15,
                min: 15,
                data: [
                    {
                        title: '电站类型',
                        arr: [
                            {label:'不限'},
                            {label:'精准匹配'},
                            {label:'模糊匹配'},
                        ]
                    },
                    {
                        title: '电站类型2',
                        arr: [
                            {label:'不限'},
                            {label:'精准匹配'},
                            {label:'模糊匹配'},
                        ]
                    }
                ]

            };
        },
        onShow() {
            this.initArr();

        },
        onUnload() {

        },
        methods: {
            changeValue(event) {
                this.finishValue = event.mp.detail.value
                this.currentValue = event.mp.detail.value;
                if (event.mp.detail.value === 75) {
                    this.finishValue = 90;
                } else if (event.mp.detail.value === 90) {
                    this.finishValue = 120;
                } else if (event.mp.detail.value === 105) {
                    this.finishValue = 150;
                }else if (event.mp.detail.value === 120) {
                    this.finishValue = 180;
                }else if (event.mp.detail.value === 135) {
                    this.finishValue = 360;
                }
            },
            sliderChange(event) {
                this.changeValue(event)
                console.log(event.mp.detail.value)
            },
            changing(event) {
                // console.log(event.mp.detail.value)
                this.changeValue(event)
            },
            initArr() {
                for(let i = 0;i<this.powerType.length;i++) {
                    this.powerArr.push(false);
                }
            },
            powerChooseFun(index) {
                for(let i = 0;i<this.powerArr.length;i++) {
                    if (i === index) {this.powerArr[index] ? this.powerArr.splice(index, 1, false) : this.powerArr.splice(index, 1, true)
                    }
                }
            },
            // 重置
            resetFun() {
                console.log('重置')
                // for(let i = 0;i<this.powerType.length;i++) {
                //     this.powerArr[i] = false;
                // }
                // this.powerArr = [false,false,false];
                console.log(this.powerValArr)
                this.currentValue = 15;
                this.finishValue = 15;
            },
        }
    };
</script>

<style type="text/css">
    @import "../../assest/fonts/iconfont.css";
    button::after {
        border: none;
    }
    button {
        background-color: transparent;
        border-radius :0;
    }
    .slider-box p{
        font-size: 30rpx;
        color: #1a1a1a;
    }
    .slider{
        width: 480rpx;
    }
    .slide-content{
        display: flex;
        padding-left: 50rpx;
    }
    .show-text{
        font-size: 28rpx;
        margin-top: 15rpx;
    }
    .screen-list{
        background: #fff;
    	padding: 24rpx 0 32rpx 16rpx;
        margin-bottom: 25rpx;
    }
    .screen-list h2{
    	margin-bottom: 24rpx;
    	font-size: 32rpx;
    	color: #1a1a1a;
    }
    .each-list li{
    	width: 160rpx;
    	height: 70rpx;
    	line-height: 70rpx;
    	background: #F5F5F5;
    	border: 1rpx solid #F5F5F5;
		border-radius: 8rpx;
		margin-right: 15rpx;
		margin-bottom: 64rpx;
		font-size: 24rpx;
		color: #1A1A1A;
		text-align: center;
		display: inline-block;
    }
    .each-list li.choose{
    	background: #E4F0FC;
		border: 1rpx solid #4DA6FF;
		color: #4DA6FF;
    }
    .each-list li.no-bottom{
    	margin-bottom: 0;
    }
    .screent-bottom{
        background: #fff;
        padding: 32rpx;
        bottom:0;
        left:0;
        width: 100%;
        position: fixed;

    }
    .screent-bottom button{
        border-radius: 8rpx;
        width: 331rpx;
        height: 88rpx;
        line-height: 88rpx;
        text-align: center;
        font-size: 32rpx;
        color: #1A1A1A;
        display: inline-block;
    }
    .screent-bottom .reset{
        background: #efefef;
        margin-right: 24rpx;
    }
    .screent-bottom .finish{
        background: #4DA6FF;
        color: #fff;
    }
</style>
