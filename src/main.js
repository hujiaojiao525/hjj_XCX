import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        pages: [
            '^pages/map/main',
        	'pages/my/main',
        	'pages/loginPay/main',
            'pages/phoneLogin/main',
            // 'pages/screen/main',

		],
		window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '地图组件demo',
            navigationBarTextStyle: 'black'
        },
	}
}
