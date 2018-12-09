<template>
    <div>
        <web-view :src="url" @message="message">url通过参数url传过来</br><b>注意:</b></br>需要通过<b>encodeURIComponent()</b>格式化url，</br>url域名需要配置<b>业务域名</b></web-view>
    </div>
</template>

<script>
    import store from '../vuex/store';

export default {
    store,
    data() {
        return {
            url: ''
        };
    },
    onLoad(options) {
        if (options.url) {
            console.log(options);
            this.url = decodeURIComponent(options.url);
        }
    },

};
</script>
<style type="text/css">
    b{
        display: inline-block;
        color: red;
    }
</style>
