import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        pages: [
        	'^pages/my/main',
        	'pages/loginPay/main',
		],
		window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '小程序',
            navigationBarTextStyle: 'black'
        },
	}
}
