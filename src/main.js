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
<<<<<<< HEAD
            'pages/busList/main'
=======
            // 'pages/screen/main',

>>>>>>> a44c98544d85b0b677831b783e3a48a8422a8bc7
		],
		window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '地图组件demo',
            navigationBarTextStyle: 'black'
        },
	}
}
