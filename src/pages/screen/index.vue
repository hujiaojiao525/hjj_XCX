<template>
    <div class="screen">
        <div class="screen-list">
        	<div v-if="requestData != null" v-for="(item,index) in requestData" :key="index">
            <h2>{{item.checkItemName}}</h2>
            <ul class="each-list">
                <li v-for="(itemVal,idx) in item.defectConfs" :key="idx" :class="{choose: itemVal.isChoosed}" @click="powerChooseFun(item,itemVal,index,idx)">
                        {{itemVal.confName}}
                    </li>
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
    const requestData = [
            {
                "checkItemName":"排量",
                "flag":0,
                "defectConfs":[
                    {
                        "confName":"1.6L",
                        "confValue":"1.6L",
                    },
                    {
                        "confName":"1.8L",
                        "confValue":"1.8L",
                    }
                ]
            },
            {
                "checkItemName":"变速器",
                "flag":0,
                "defectConfs":[
                    {
                        "confName":"AT",
                        "confValue":"AT",
                    },
                    {
                        "confName":"MT",
                        "confValue":"MT",
                    }
                ]
            },
            {
                "checkItemName":"空调控制方式",
                "flag":1,
                "defectConfs":[
                    {
                        "confName":"手动",
                        "confValue":"手动●",
                    },
                    {
                        "confName":"自动",
                        "confValue":"自动●",
                    }
                ]
            },
            {
                "checkItemName":"全景天窗",
                "flag":1,
                "defectConfs":[
                    {
                        "confName":"无",
                        "confValue":"-",
                    }
                ]
            },
            {
                "checkItemName":"主/副驾驶座电动调节",
                "flag":1,
                "defectConfs":[
                    {
                        "confName":"无",
                        "confValue":"-",
                    }
                ]
            }
        ]
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
                requestData: [],
                clickArr: []

            };
        },
        onShow() {

        },
        onUnload() {

        },
        mounted() {
            const me = this;
            requestData.forEach(function (val) {
                me.clickArr.push({})
                val.defectConfs.forEach(function(item) {
                    item.isChoosed = false;
                })
            })
            this.requestData = requestData
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
                this.changeValue(event)
            },
            powerChooseFun(item,itemVal,bigIndex,smallIndex) {
                const me = this;
                console.log(itemVal.isChoosed)
                if (!itemVal.isChoosed) {
                    itemVal.isChoosed = true;
                    // me.clickArr.push(itemVal.confValue)
                    me.clickArr[bigIndex][smallIndex] = itemVal.confValue
                } else {
                    itemVal.isChoosed = false;
                    console.log(me.clickArr[bigIndex][smallIndex])
                    // if (me.clickArr[bigIndex][smallIndex]) {
                    //
                    // }
                    me.clickArr[bigIndex][smallIndex] = ''
                    //var index = me.clickArr[bigIndex][smallIndex].indexOf(itemVal.confValue);
                    // if (index > -1) {
                    //     me.clickArr[bigIndex][smallIndex].splice(index, 1);
                    // }
                }
                console.log(me.clickArr)

            },
            // 重置
            resetFun() {
                const me = this;
                requestData.forEach(function (val) {
                    me.clickArr.push({})
                    val.defectConfs.forEach(function(item) {
                        item.isChoosed = false;
                    })
                })
                this.requestData = requestData
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
    	padding: 24rpx 0 180rpx 16rpx;
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
