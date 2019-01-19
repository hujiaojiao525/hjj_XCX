<template>
    <div class="power-detail" v-if="detailData!=null">
        <div class="detail-top">
            <div class="item-content">
                <!--<image src="http://picture.51auto.com/car/201812/16/pic820181216101501-gFiag-mid.jpg"></image>-->
                <image :src="detailData.station_img"></image>
                <div class="item-right">
                    <h2>{{detailData.charge_name}}</h2>
                    <div class="star-container">
                        <span class="star"></span>
                        <span  :style="{width : (50*(93/100))+'px'}" class="star-bg"></span>
                    </div>
                    <div class="item-span">
                        <span>个人共享</span>
                        <span>个享</span>
                        <span class="free-border">芝麻信用·免押金</span>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="quick-slow">-->
            <!--<p><span class="quick-span">快</span><span>空闲2/共2</span></p>-->
            <!--<p><span class="slow-span">慢</span><span>空闲2/共2</span></p>-->
        <!--</div>-->
        <!-- 充电详情，充电终端 tab-->
        <!--<ul class="power-tab">-->
            <!--<li v-for="(item,index) in orderList" :key="index"-->
                <!--:class="{choose: chooseId === item.id}"  @click="changeTab(item.id)">-->
                <!--{{item.val}}-->
                <!--<span class="tab-line" v-show="chooseId === item.id"></span>-->
            <!--</li>-->
        <!--</ul>-->
        <!--  充电详情  -->
        <div v-show="chooseId === 0" class="detail-left">
            <div class="detail-position">
                <image src="../../static/image/home.png"></image>
                <div class="position-text">
                    <p>{{detailData.charge_address}}</p>
                    <!--<span>距我26.3km</span>-->
                </div>
                <div class="navigation" @click="goDaoHang">导航</div>
            </div>
            <ul class="detail-list">
                <li>
                    <p class="list-left">当前价格</p>
                    <div class="list-right">
                        <p><span class="red">{{detailData.charge_free}}</span>元/度(含服务费)</p>
                        <p class="gray-color" @click="goToPriceDetail">
                            <span>全天价格统一</span>
                            <span>价格详情</span>
                            <!--<i class="iconfont icon-jiantou  right"></i>-->
                        </p>

                    </div>
                </li>
                <li>
                    <p class="list-left">停车费</p>
                    <div class="list-right">
                        <p>{{detailData.parking_fee}}</p>
                    </div>
                </li>
                <li>
                    <p class="list-left">现场管理</p>
                    <div class="list-right">
                        <p>北京鼎天新能源</p>
                    </div>
                </li>
                <li>
                    <p class="list-left">营业时间</p>
                    <div class="list-right">
                        <p>{{detailData.business_hours}}</p>
                    </div>
                </li>
                <li>
                    <p class="list-left">服务电话</p>
                    <div class="list-right">
                        <p>0762-3989588</p>
                    </div>
                </li>
                <!--<li @click="goToCharge">-->
                    <!--<p class="list-left black">近七天成功充电<span class="red">11</span>次</p>-->
                    <!--<div class="list-right">-->
                        <!--<p>-->
                            <!--<span>最近充电1小时前</span>-->
                            <!--<i class="iconfont icon-jiantou  right"></i>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</li>-->
            </ul>
            <!--<div class="comment-list">-->
                <!--&lt;!&ndash;  &ndash;&gt;-->
                <!--<h2>网友评论</h2>-->
                <!--<ul>-->
                    <!--<li>-->
                       <!--<image src="../../static/image/commentHead.png"></image>-->
                       <!--<div class="comment-middle">-->
                           <!--<h2>乐乐</h2>-->
                           <!--<div>-->
                                <!--<span>平分</span>-->
                                <!--<span class="star-container">-->
                                    <!--<span class="star"></span>-->
                                    <!--<span  :style="{width : (50*(93/100))+'px'}" class="star-bg"></span>-->
                                <!--</span>-->
                           <!--</div>-->
                           <!--<p>还可还可以吧！还可以吧！还可以吧！以吧！</p>-->
                       <!--</div>-->
                       <!--<p class="comment-right">02-20 18:01</p>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->

        </div>
        <!--  充电终端  -->
        <div v-show="chooseId === 1" class="detail-right">
            <div class="choose-tab">
                <div class="chos-btn">
                    <span v-for="(item,index) in tabRightList" :key="index"
                        :class="{on: tabRightId === item.id}"  @click="changeRightTab(item.id)">
                        {{item.val}}
                    </span>
                </div>
                <div class="chos-btna" @click="clickScreen">
                    <span>筛选</span><image src="../../static/image/screen.png"></image>
                </div>
            </div>
            <ul class="tab-right">
               <li>
                   <div class="tab-right-left">
                       <p><span class="big-text">101</span>号</p>
                        <p class="top-label">不对外开放</p>
                        <p class="bottom-label">芝麻信用</p>
                   </div>
                   <div class="tab-right-middle">
                       <p><span>编号</span><span>829183989</span></p>
                       <p><span>终端类型</span><span>快充</span></p>
                       <p><span>充电接口</span><span>国标2011</span></p>
                       <p><span>车位号</span><span>无</span></p>
                   </div>
                   <div class="tab-right-right">
                       <p>
                           <span class="green-bj">空闲</span>
                           <span class="green-red">快</span>
                           <i class="iconfont icon-jiantou  right"></i>
                       </p>
                   </div>
               </li>
               <li>
                   <div class="tab-right-left">
                       <p><span class="big-text">101</span>号</p>
                        <p class="top-label">不对外开放</p>
                        <p class="bottom-label">芝麻信用</p>
                   </div>
                   <div class="tab-right-middle">
                       <p><span>编号</span><span>829183989</span></p>
                       <p><span>终端类型</span><span>快充</span></p>
                       <p><span>充电接口</span><span>国标2011</span></p>
                       <p><span>车位号</span><span>无</span></p>
                   </div>
                   <div class="tab-right-right">
                       <p>
                           <span class="green-bj">空闲</span>
                           <span class="green-red">快</span>
                           <i class="iconfont icon-jiantou  right"></i>
                       </p>
                   </div>
               </li>
            </ul>
        </div>
        <!-- 筛选 -->
        <div class="power-layer" v-if="isShowScreen">
            <div class="power-screen" :animation="animationData">
                <div class="power-screen-title">
                    <span>筛选</span>
                    <span @click="close">X</span>
                </div>
                <div class="power-screen-middle">
                    <div v-for="(item,index) in requestData" :key="index">
                        <h2>{{item.checkItemName}}</h2>
                        <ul class="each-list">
                        <li v-for="(itemVal,idx) in item.defectConfs" :key="idx" :class="{choose: itemVal.isChoosed}" @click="powerChooseFun(item,itemVal,index,idx)">
                                {{itemVal.confName}}
                            </li>
                        </ul>
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
        </div>
        <!--快速导航-->
        <!--<div class="quick">-->
            <!--<p class="quick-mes">快捷导航</p>-->
            <!--<ul>-->
                <!--<li></li>-->
            <!--</ul>-->
        <!--</div>-->
        <bottomLine></bottomLine>
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
    import bottomLine from '../../components/bottomLine'
    export default {
        store,
        data() {
            return {
                orderList: [
                    {val: '充电详情',id: 0},
                    {val: '充电终端',id: 1},
                ],
                tabRightList: [
                    {val: '空闲优先',id: 1},
                    {val: '已插枪',id: 2},
                    {val: '直流快充',id: 3},
                ],
                chooseId: 0,
                tabRightId: 0,
                requestData: [],
                clickArr: [],
                isShowScreen: false,
                animationData: {},
                userInfo: null,
                markerId: 1,
                detailData: null,
            };
        },
        components: {
            bottomLine
        },
        onShow() {
            this.getStorage();
            this.listRequest();
        },
        onUnload() {
            this.detailData = null;
            this.userInfo = null;
            this.markerId = '';
        },
        onLoad(res) {
            console.log(res)
            // this.markerId = res.markerId;
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
            // 初始化获取用户信息
            getStorage() {
                var userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : '';
                if (userInfo) {
                    this.userInfo = userInfo;
                }
            },
            listRequest(){
                const me = this;
                let header = {};
                if (this.userInfo) {
                    header.Authorization = this.userInfo.Authorization
                }
                let arr = [];
                wx.request({
                    url: `${process.env.BASE_URL}/charge_details`,
                    data: {
                        id: me.markerId,
                    }, //传参
                    method: 'get',
                    header: header, // 设置请求的 header
                    success: function(res) {
                        if(res.data.code == 0) {
                            me.detailData = res.data.data;
                            console.log(me.detailData)
                        } else {
                            wx.showToast({
                                title: '信息有误',
                                icon: "none"
                            });
                        }
                    },
                    fail() {
                        wx.showToast({
                            title: '网络错误',
                            icon: "none"
                        });
                    }
                })
            },
            // 跳转价格详情页面
            goToPriceDetail() {
                wx.navigateTo({
                    url: "/pages/priceDetail/main"
                });
            },
            // 跳转近七日成功充电页面
            goToCharge() {
                wx.navigateTo({
                    url: "/pages/chargeSuccess/main"
                });
            },
            // 点击筛选
            clickScreen() {

                // const animation = wx.createAnimation()
                // animation.translateY(0).step({duration: 1000})
                // this.animationData = animation.export()
                this.isShowScreen = true;
            },
            // 关闭筛选
            close() {
                this.isShowScreen = false;
            },
            changeTab(id) {
                this.chooseId = id;
            },
            changeRightTab(id) {
                this.tabRightId = id;
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
            },
            // 点击完成
            finishFun() {
                this.isShowScreen = false;
            },
            // 去导航
            goDaoHang() {
                wx.getLocation({
                    type: 'gcj02', //返回可以用于wx.openLocation的经纬度
                    success (res) {
                        const latitude = res.latitude
                        const longitude = res.longitude
                        wx.openLocation({
                            latitude,
                            longitude,
                            scale: 28
                        })
                    }
                })
            }
        }
    };
</script>

<style>
    @import "../../assest/fonts/iconfont.css";
    page{
        background: #F5F4FA;
    }
    .power-layer{
        position: fixed;
        left:0;
        top:0;
        width:100%;
        height: 100%;
        z-index: 7;
        background: rgba(0,0,0,0.6)
    }
    .power-screen{
        height: 85%;
        width: 100%;
        background: #ffff;
        position: fixed;
        bottom:0;
        left:0;
        z-index: 8;
        padding: 130rpx 30rpx;
        box-sizing: border-box;
        overflow-y: scroll;
    }
    .power-screen-title{
        height: 100rpx;
        width: 100%;
        line-height: 100rpx;
        border-bottom: 1rpx solid #ccc;
        position: fixed;
        top:15%;
        left:0;
        padding-left: 30rpx;
        background: #fff;
    }
    .power-screen-title span:last-child{
        font-size: 58rpx;
        position: absolute;
        right: 70rpx;
        color: #ccc;
    }
    .item-content{
        display: flex;
        display: -webkit-flex;
    }
    .detail-top{
        background: #ffff;
        padding: 30rpx;
        box-sizing: border-box;
        border-bottom: 1rpx solid #ccc;
    }
    .item-content image{
        width: 190rpx;
        height: 145rpx;
        border-radius: 8rpx;
    }
    .item-right{
        flex-grow: 1;
        padding-left: 16rpx;
        font-size: 28rpx;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #1a1a1a;
    }
    .power-screen h2{
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
    .item-right h2{
        font-size: 32rpx;
        color: #1a1a1a;
        margin-bottom: 15rpx;
    }
    .star-container {
        position: relative;
        display: inline-block;
        width: 190rpx;
        height: 34rpx;
        vertical-align: text-bottom;
    }
    .star {
        background: url('https://apk.11max.com/chongdianxiaochengxuloding.png') no-repeat;
        width: 190rpx;
        height: 34rpx;
        background-size: 100%;
        display: inline-block;
        z-index: 5;
        left: 0;
        top: 0;
        position: absolute;
    }
    .star-bg {
        background: #ffd30d;
        position: absolute;
        z-index: 4;
        display: inline-block;
        left: 2rpx;
        top: 2rpx;
        height: 30rpx;
    }
    .item-span{
        margin-top: 20rpx;
        display: flex;
        display: -webkit-flex;
        font-size: 22rpx;
        align-items: center;
    }
    .item-span span{
        padding: 8rpx 16rpx;
        border: 1rpx solid #A6CEE7;
        color: #A6CEE7;
        margin-right: 20rpx;
        border-radius: 6rpx;
    }
    .item-span span.free-border{
        border: 1rpx solid #70C1AE;
        color: #70C1AE;
    }
    .quick-slow{
        height:90rpx;
        line-height: 90rpx;
        vertical-align: middle;
        padding-left: 30rpx;
        display: flex;
        display: -webkit-flex;
    }
    .quick-slow span{
        font-size: 28rpx;
    }
    .quick-slow .quick-span, .quick-slow .slow-span{
        color: #fff;
        background: #e08c70;
        margin-right: 8rpx;
        padding: 5rpx 8rpx;
        border-radius: 8rpx;
    }
    .quick-slow .slow-span{
        background: #5DBA23;
        margin-left: 20rpx;
    }
    .power-tab{
        height: 90rpx;
        line-height: 90rpx;
        background: #fff;
        border-top: 1rpx solid #ddd;
        border-bottom: 1rpx solid #ddd;
        display: flex;
        display: -webkit-flex;
    }
    .power-tab li{
        flex: 1;
        text-align: center;
        font-size: 32rpx;
        position: relative;
        color: #1a1a1a;
    }
    .power-tab li.choose{
        color: #47B0CE;
    }
    .tab-line{
        height: 6rpx;
        background: #47B0CE;
        width: 60%;
        position: absolute;
        bottom:0;
        left: 20%;
    }
    .detail-left{

    }
    .detail-position{
        padding: 30rpx;
        margin-bottom: 15rpx;
        background: #fff;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
    }
    .detail-position image{
        width: 80rpx;
        height: 80rpx;
    }
    .position-text{
        width: 73%;
    }
    .position-text p{
        font-size: 30rpx;
        color: #1a1a1a;
        line-height: 40rpx;
    }
    .position-text span{
        color: #666;
        font-size: 28rpx;
    }
    .navigation{
        width: 100rpx;
        height: 60rpx;
        line-height: 60rpx;
        text-align: center;
        color: blue;
        border: 1rpx solid blue;
        font-size: 30rpx;
        border-radius: 8rpx;
    }
    .detail-list{
        background: #fff;
        margin-bottom: 15rpx;
    }
    .detail-list li{
        border-bottom: 1rpx solid #ccc;
        font-size: 30rpx;
        padding: 30rpx;
        display: flex;
        justify-content: space-between;
    }
    .list-left{
        color: #666;
    }
    .list-left.black{
        color: #1a1a1a;
    }
    .detail-list .red{
        color: #f00;
    }
    .gray-color{
        color: #666;
    }
    .list-right .right{
        display: inline-block;
        margin-left: 10rpx;
        margin-top: 15rpx;
        font-size: 30rpx;
    }
     .comment-list{
        background: #fff;
        margin-bottom: 20rpx;
        padding: 0 30rpx;
    }
    .comment-list li{
        border-bottom: 1rpx solid #ccc;
        font-size: 30rpx;
        padding: 40rpx 0;
        display: flex;
        justify-content: space-between;
    }
    .comment-list li image{
        width: 100rpx;
        height: 100rpx;
    }
    .comment-middle div{
        margin: 15rpx 0;
        color: #666;
    }
    .comment-middle p{
        color: #666;
    }
    .comment-middle{
        width: 55%;
    }
    .comment-right{
        color:#666;
    }
    .choose-tab{
        display: flex;
        display: -webkit-flex;
        padding: 20rpx 0;
        color: #797979;
        background: #fff;
    }
    .chos-btn{
        width: 78%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .chos-btn span{
        width: 30%;
        background: #f4f4f4;
        border-radius: 8rpx;
        font-size: 28rpx;
        text-align: center;
        line-height: 70rpx;
    }
    .chos-btn .on{
        background: #47b0ce;
        color: #ffffff;
    }
    .chos-btna{
        width: 22%;
        font-size: 28rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .chos-btna::before{
        content: '';
        height: 70%;
        width: 0;
        border-left: 1rpx solid #f4f4f4;
        position: absolute;
        left: 8rpx;
        top: 15%;
    }
    .chos-btna span{
        padding-left: 10rpx;
    }
    .chos-btna image{
        width: 28rpx;
        height: 28rpx;
    }
    .tab-right{
        background: #ffffff;
    }
    .tab-right li{
        padding: 20rpx 30rpx;
        border-top: 1rpx solid #ddd;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        font-size: 30rpx;
    }
    .tab-right li .right{
        display: inline-block;
    }
    .big-text{
        font-size: 52rpx;
    }
    .tab-right-left{
        text-align: center;
    }
    .top-label{
        padding: 6rpx 16rpx;
        background: #A6CEE7;
        color:#ffffff;
        margin-top: 25rpx;
        margin-bottom: 10rpx;
        border-radius: 10rpx;
    }
    .bottom-label{
        padding: 6rpx 16rpx;
        background:  #70C1AE;
        color:#ffffff;
        border-radius: 10rpx;
    }
    .tab-right-middle{
        width: 45%;
    }
    .tab-right-middle p{
        margin-bottom: 20rpx;
    }
    .tab-right-middle p span:first-child{
        color: #666;
        margin-right: 20rpx;
        display: inline-block;
        width: 130rpx;
    }
    .tab-right-right{
        position: relative;
        width: 25%;
    }
    .tab-right-right p{
        position:absolute;
        top:50%;
        left:2%;
        transform:translateY(-50%);
    }
    .tab-right-right span{
        color: #ffffff;
        border-radius: 8rpx;
        padding:3rpx 5rpx;
    }
    .tab-right-right span{
        margin-right: 12rpx;
    }
    .tab-right-right .green-bj{
         background: #e08c70;
    }
    .tab-right-right .green-red{
         background: #5DBA23;
    }
    .tab-right-right .green-gray{
         background: #5DBA23;
    }
</style>
