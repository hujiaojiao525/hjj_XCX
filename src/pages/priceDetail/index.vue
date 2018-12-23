<template>
    <div class="price-detail">
        <ul class="">
            <li>
                <div>
                    <p><span>0.6400</span>元/度(含服务费)</p>
                    <p>00:00-24:00</p>
                </div>
                <p>电费0.0000元/度</p>
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
    .price-detail li{
        background: #fff;
        padding: 30rpx;
        font-size: 28rpx;
    }
    .price-detail li div{
        display: flex;
        justify-content: space-between;
    }
</style>
