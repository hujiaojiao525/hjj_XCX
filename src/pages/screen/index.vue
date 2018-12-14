<template>
    <div class="screen">
        <div class="screen-list">
        	<h2>电站类型</h2>
        	<ul class="each-list">
        		<li v-for="(item,index) in powerType" :key="index" :class="{choose: powerArr[index]}" @click="powerChooseFun(index)">{{item.label}}</li>
        	</ul>
        	<!-- <h2>只能地锁</h2>
        	<ul class="each-list">
        		<li v-for="(item,index) in timeType" :key="index"  :class="{choose: timeTypeVal === item.type, selectOne: item.type === 1, selectThree: item.type === 2, selectSix: item.type === 3}" @click="timeChooseFun(item.type)">{{item.label}}</li>
        	</ul>
        	<h2>充电方式</h2>
        	<ul class="each-list">
        		<li v-for="(item,index) in timeType" :key="index"  :class="{choose: timeTypeVal === item.type, selectOne: item.type === 1, selectThree: item.type === 2, selectSix: item.type === 3}" @click="timeChooseFun(item.type)">{{item.label}}</li>
        	</ul>
        	<h2>运营类型</h2>
        	<ul class="each-list">
        		<li v-for="(item,index) in sort" :key="index"  :class="{choose: sortTypeVal === item.type}" @click="sortChooseFun(item.type)">{{item.label}}</li>
        	</ul>
        	<h2>停车场</h2>
        	<ul class="each-list">
        		<li v-for="(item,index) in sort" :key="index"  :class="{choose: sortTypeVal === item.type}" @click="sortChooseFun(item.type)">{{item.label}}</li>
        	</ul>
        	<h2>停车费</h2>
        	<ul class="each-list">
        		<li  v-for="(item,index) in sort" :key="index"  :class="{choose: sortTypeVal === item.type}" @click="sortChooseFun(item.type)">{{item.label}}</li>
        	</ul>
        	<h2>电站状态</h2>
        	<ul class="each-list">
        		<li  v-for="(item,index) in sort" :key="index"  :class="{choose: sortTypeVal === item.type}" @click="sortChooseFun(item.type)">{{item.label}}</li>
        	</ul>
        	<h2>营业时间</h2>
        	<ul class="each-list">
        		<li v-for="(item,index) in sort" :key="index"  :class="{choose: sortTypeVal === item.type}" @click="sortChooseFun(item.type)">{{item.label}}</li>
        	</ul>
        	<h2>充电接口</h2>
        	<ul class="each-list">
        		<li  v-for="(item,index) in sort" :key="index"  :class="{choose: sortTypeVal === item.type}" @click="sortChooseFun(item.type)">{{item.label}}</li>
        	</ul>
        	<h2>辅源类型</h2>
        	<ul class="each-list">
        		<li  v-for="(item,index) in sort" :key="index"  :class="{choose: sortTypeVal === item.type}" @click="sortChooseFun(item.type)">{{item.label}}</li>
        	</ul>
        	<h2>电压</h2>
        	<ul class="each-list">
        		<li class="no-bottom" v-for="(item,index) in sort" :key="index"  :class="{choose: sortTypeVal === item.type}" @click="sortChooseFun(item.type)">{{item.label}}</li>
        	</ul> -->
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
            };
        },
        onShow() {
            this.initArr();
            
        },
        onUnload() {
            
        },
        methods: {
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
