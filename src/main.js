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
            'pages/busList/main',
            'pages/screen/main',
            'pages/recharge/main',
            'pages/balanceDetail/main',
            'pages/order/main',
            'pages/search/main',
		],
		window: {
            backgroundTextStyle: 'light',
            navigationBarTitleText: '鼎天新能源',
            "navigationBarBackgroundColor": "#47B0CE",
            "navigationBarTextStyle": "white",
        },
	}
}
