//
function formatNumber(n) {
    const str = n.toString();
    return str[1] ? str : `0${str}`;
}

export function formatTime(data,type) {
    const date = new Date(data)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const t1 = [year, month].map(formatNumber).join('/');
    const t2 = [hour, minute, second].map(formatNumber).join(':');
    const t3 = [year, month, day].map(formatNumber).join('/');

    if(type == 'dayTime'){
        return `${t3+" "+t2}`
    }else{
        return `${t1}`;
    }
    
}

export function toast(title, duration = 1500) {
    wx.showToast({
        title: title,
        icon: 'none',
        duration: duration
    })
}


//获取当前页面的参数
export function pageUrl() {
	const uRl = getCurrentPages();
	const pageUrl = uRl[uRl.length - 1].options;
	return pageUrl
}

//获取userInfo
export function getUserInfo(){
    var me = this;
    var userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : '';
    return userInfo;
}