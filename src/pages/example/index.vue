<template>
	<div class="container">
		<h1>小程序模板</h1>
		<p>
			utils里面有一些公共方法，做项目前先看一下
		</p>
	</div>
</template>

<script>
    // import { requestFormId } from 'utils'
    import popLayer from '../../components/pop'
	export default {
		data() {
			return{
				popText:"提示信息"
			}
		},
		onshow(){
			requestFormId();
		},
		methods: {
			clickOnly(){
				setStorageFormIds();
			}
		},
	};
</script>

<style lang="stylus">

</style>
