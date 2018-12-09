<template>
    <div class="loading">
        <image src="../../static/image/loading_spinner.gif" />
    </div>
</template>
<script>
    export default {
        // props: {
        //     show: {
        //         type: Boolean,
        //         default: true
        //     }
        // },
        // created() {
        //     console.log('Loading.vue')
        //     console.log(this.show)
        // }
    }
</script>

<style lang="stylus" scoped>
    .loading
        height: 378rpx
        padding-top: 100rpx
        text-align: center
        image 
            width: 120rpx
            height: 120rpx
        box-sizing: border-box
        
</style>

