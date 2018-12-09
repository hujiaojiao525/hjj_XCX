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

export function request(options) {
    wx.request({
        url: '',
        method: 'GET',
        data: '',
        header: {
            'content-type': 'application/json', // 默认值
            'Authorization': wx.getStorageSync('token'),
        },
        success: function(res) {
            console.log(res.data)
        },
        fail: () => {
            toast('网络异常')
        }
    })
}

// 存储formId
export function setStorageFormIds(formId) {
    var formIds = wx.getStorageSync("formIds");
    if (!formIds) {
        formIds = [];
    }
    formIds.push({
        "time": new Date().getTime(),
        "formid": formId
    });
    wx.setStorageSync("formIds", formIds);
}

// 进入页面请求  fromids 用户消息推送
export function requestFormId() {
    if (!wx.getStorageSync("formIds")) {
        return;
    }
    wx.login({
        success: function(res) {
            var requestData = {
                code: res.code,
                formIds: wx.getStorageSync("formIds")
            }
            wx.request({
                url: `${process.env.BASE_URL}/api/ValuaLogin/CollectFormIds`,
                method: 'POST',
                data: requestData,
                success: function(res) {
                    if (res.data.code === 0) {
                        wx.removeStorageSync('formIds')
                    }
                },
                fail: () => {
                    toast('网络异常')
                }
            })
        }
    });
}

// 跳转对应的页面
export function goToLoginPage(goWhere, jumpPage) {
    wx.navigateTo({
        url: `/pages/guide/main?goWhere=`+goWhere+`&jumpPage=`+jumpPage
    })
}
//获取当前页面的参数
export function pageUrl() {
	const uRl = getCurrentPages();
	const pageUrl = uRl[uRl.length - 1].options;
	return pageUrl
}
//页面返回
export function pagegoBack(goWhere, jumpPage) {
	
	if(pageUrl().goWhere=="back"){
		wx.navigateBack({
			delta: 1
		})
	}if(pageUrl().goWhere=="jump"){
		wx.redirectTo({
			url: '/pages/'+pageUrl().jumpPage+'/main',
		})
	}
}
//拍照识别VIN码,分三步：拍照/选照片==上传图片服务器===识别VIN码,
//调用时用promise的方式调用
//eg:
// let tem = new Promise(function(reslove,reject){
//     getCameraToVIN(reslove);
// });
// tem.then(function(res){
//     //do sth.
// });
// 返回值为一个对象：
// {
//     tempFilePaths:string,//上传至服务器的图片路径
    // vin:string       //识别出来的vin码，如果未识别出来则为""
// }
export function getCameraToVIN(reslove){
    let tempFilePaths = "";

    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["compressed"], // 可以指定是原图还是压缩图，默认二者都有
        //sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            tempFilePaths = res.tempFilePaths;
            let tem = new Promise(function(reslove,reject){
                updatePhoto(reslove);
            });

            tem.then(function(res){
                let vin = new Promise(function(reslove,reject){
                    discernVIN(reslove,res);                
                });
                vin.then(function(resout){
                    let data = {
                        tempFilePaths:res,
                        vin:resout
                    }
                    reslove(data);
                });
                
            });
        },
    });
    function updatePhoto(reslove){
        wx.showLoading({
            title: "加载中"
        });
        var tem = "";
        var pro = new Promise(function(reslove,reject){
            wx.uploadFile({
                url: process.env.MAPI_URL + "/MyCYP/SaveAllImg",
                filePath: tempFilePaths[0],
                name: "DrivingLicense",
                method: "POST",
                formData: {
                    "tagName": "DrivingLicense",
                    "tagType": "3"
                },
                success: function(res) {
                    var data = JSON.parse(res.data).Data.RelativePath;
                    tempFilePaths = process.env.IMG_PATH + data;
                    reslove(tempFilePaths);
                },
                fail: function(res) {
                    console.log("upfail=="+res);
                    tempFilePaths = "";
                    reslove(tempFilePaths);
                    wx.showToast({
                        title: "网络异常，请稍后再试",
                        icon: "none"
                    });
                }
            });
        });
        pro.then(function(res){
            reslove(res);
        });
    }
    function discernVIN(reslove,tempFilePaths){
        var me = this;
        wx.showLoading({
            title: '加载中',
        });
        var vin = new Promise(function(reslove,reject){
            wx.request({
                method: 'POST',
                url: process.env.BASE_URL+'/api/ValuatHome/RecognizeDriverLicense?imgUrl='+tempFilePaths,
                success: function(res) {
                    wx.hideLoading();
                    if(res.statusCode != 200){
                        wx.showToast({
                          title: '网络异常，请稍后再试',
                          icon: "none"
                        });
                    }else{
                        if(res.data.code == 0){
                            reslove(res.data.data.vehicleVinNumber);
                        }else{
                            reslove("");
                        }
                    }

                }
            });
        });
        vin.then(function(res){
            reslove(res);
        });
    }
    
}
//获取userInfo
export function getUserInfo(){
    var me = this;
    var userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : '';
    return userInfo;
}