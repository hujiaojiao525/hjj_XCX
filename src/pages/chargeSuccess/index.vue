<template>
    <div class="order-list">
        <ul class="order-tab">
            <li v-for="(item,index) in orderList" :key="index"
                :class="{choose: chooseId === item.id}"  @click="changeTab(item.id)">
                {{item.val}}
                <span class="tab-line" v-show="chooseId === item.id"></span>
            </li>
        </ul>
        <noMore></noMore>
    </div>
</template>
<script>
    import store from '../vuex/store';
    import noMore from '../../components/noMore'
    export default {
        store,
        data() {
            return {
                orderList: [
                    {val: '全部订单',id:0},
                    {val: '待支付',id:1},
                    {val: '已支付',id:2},
                    {val: '待评论',id:3},
                ],
                chooseId: 0,
                isShowBlank: true
            };
        },
        components: {
            noMore
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
    
</style>
