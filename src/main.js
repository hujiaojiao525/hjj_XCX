import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        pages: [
            '^pages/indexMap/main',
        	'pages/my/main',
        	'pages/loginPay/main',
            'pages/phoneLogin/main',
            'pages/busList/main'
		],
		window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '特来电',
            navigationBarTextStyle: 'black'
        },
	}
}
