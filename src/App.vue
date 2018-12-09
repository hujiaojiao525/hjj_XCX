<script>
    export default {
        mounted() {
            // 调用API从本地缓存中获取数据
            console.log('miniapp created!!!')
        },
    };

</script>

<style>
    /* .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 200rpx 0;
        box-sizing: border-box;
    } */
    page {
        font-family: PingFangSC-Regular;
    }
    /* this rule will be remove */

    * {
        transition: width 2s;
        -moz-transition: width 2s;
        -webkit-transition: width 2s;
        -o-transition: width 2s;
    }
</style>