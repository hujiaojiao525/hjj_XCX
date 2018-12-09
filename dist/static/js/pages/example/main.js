global.webpackJsonp([1],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(43);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_04b908f2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(87);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_04b908f2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04b908f2", Component.options)
  } else {
    hotAPI.reload("data-v-04b908f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pop__ = __webpack_require__(46);
//
//
//
//
//
//
//
//
//

// import { requestFormId } from 'utils'

/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			popText: "提示信息"
		};
	},
	onshow: function onshow() {
		requestFormId();
	},

	methods: {
		clickOnly: function clickOnly() {
			setStorageFormIds();
		}
	}
});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pop_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0487957a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_pop_vue__ = __webpack_require__(86);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0487957a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pop_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0487957a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_pop_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/pop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0487957a", Component.options)
  } else {
    hotAPI.reload("data-v-0487957a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(49);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        text: {
            type: String,
            default: ''
        },
        elseText: {
            type: String,
            default: ''
        },
        oneBtn: {
            type: Boolean,
            default: false
        },
        colorStyle: {
            type: String,
            default: '#157EFB'
        },
        leftBtnText: {
            type: String,
            default: ''
        },
        rightBtnText: {
            type: String,
            default: ''
        },
        onlyBtnText: {
            type: String,
            default: ''
        },
        leftBtnStyle: {
            type: String,
            default: '#1A1A1A'
        },
        rightBtnStyle: {
            type: String,
            default: '#1A1A1A'
        },
        onlyBtnStyle: {
            type: String,
            default: '#4DA6FF'
        },
        isShowLayerPop: {
            type: 'Boolean',
            default: false
        }
    },
    methods: {
        clickLeft: function clickLeft(event) {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* setStorageFormIds */])(event.mp.detail.formId);
            this.$emit('clickLeft');
        },
        clickRight: function clickRight(event) {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* setStorageFormIds */])(event.mp.detail.formId);
            this.$emit('clickRight');
        },
        clickOnly: function clickOnly(event) {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* setStorageFormIds */])(event.mp.detail.formId);
            this.$emit('clickOnly');
        }
    }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTime */
/* unused harmony export toast */
/* unused harmony export request */
/* harmony export (immutable) */ __webpack_exports__["a"] = setStorageFormIds;
/* unused harmony export requestFormId */
/* unused harmony export goToLoginPage */
/* unused harmony export pageUrl */
/* unused harmony export pagegoBack */
/* unused harmony export getCameraToVIN */
/* unused harmony export getUserInfo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

//
function formatNumber(n) {
    var str = n.toString();
    return str[1] ? str : '0' + str;
}

function formatTime(data, type) {
    var date = new Date(data);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var t1 = [year, month].map(formatNumber).join('/');
    var t2 = [hour, minute, second].map(formatNumber).join(':');
    var t3 = [year, month, day].map(formatNumber).join('/');

    if (type == 'dayTime') {
        return '' + (t3 + " " + t2);
    } else {
        return '' + t1;
    }
}

function toast(title) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

    wx.showToast({
        title: title,
        icon: 'none',
        duration: duration
    });
}

function request(options) {
    wx.request({
        url: '',
        method: 'GET',
        data: '',
        header: {
            'content-type': 'application/json', // 默认值
            'Authorization': wx.getStorageSync('token')
        },
        success: function success(res) {
            console.log(res.data);
        },
        fail: function fail() {
            toast('网络异常');
        }
    });
}

// 存储formId
function setStorageFormIds(formId) {
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
function requestFormId() {
    if (!wx.getStorageSync("formIds")) {
        return;
    }
    wx.login({
        success: function success(res) {
            var requestData = {
                code: res.code,
                formIds: wx.getStorageSync("formIds")
            };
            wx.request({
                url: "https://uniapi.test.cheyipai.com" + '/api/ValuaLogin/CollectFormIds',
                method: 'POST',
                data: requestData,
                success: function success(res) {
                    if (res.data.code === 0) {
                        wx.removeStorageSync('formIds');
                    }
                },
                fail: function fail() {
                    toast('网络异常');
                }
            });
        }
    });
}

// 跳转对应的页面
function goToLoginPage(goWhere, jumpPage) {
    wx.navigateTo({
        url: '/pages/guide/main?goWhere=' + goWhere + '&jumpPage=' + jumpPage
    });
}
//获取当前页面的参数
function pageUrl() {
    var uRl = getCurrentPages();
    var pageUrl = uRl[uRl.length - 1].options;
    return pageUrl;
}
//页面返回
function pagegoBack(goWhere, jumpPage) {

    if (pageUrl().goWhere == "back") {
        wx.navigateBack({
            delta: 1
        });
    }if (pageUrl().goWhere == "jump") {
        wx.redirectTo({
            url: '/pages/' + pageUrl().jumpPage + '/main'
        });
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
function getCameraToVIN(reslove) {
    var tempFilePaths = "";

    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["compressed"], // 可以指定是原图还是压缩图，默认二者都有
        //sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            tempFilePaths = res.tempFilePaths;
            var tem = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (reslove, reject) {
                updatePhoto(reslove);
            });

            tem.then(function (res) {
                var vin = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (reslove, reject) {
                    discernVIN(reslove, res);
                });
                vin.then(function (resout) {
                    var data = {
                        tempFilePaths: res,
                        vin: resout
                    };
                    reslove(data);
                });
            });
        }
    });
    function updatePhoto(reslove) {
        wx.showLoading({
            title: "加载中"
        });
        var tem = "";
        var pro = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (reslove, reject) {
            wx.uploadFile({
                url: "https://mapi.test.cheyipai.com" + "/MyCYP/SaveAllImg",
                filePath: tempFilePaths[0],
                name: "DrivingLicense",
                method: "POST",
                formData: {
                    "tagName": "DrivingLicense",
                    "tagType": "3"
                },
                success: function success(res) {
                    var data = JSON.parse(res.data).Data.RelativePath;
                    tempFilePaths = "https://i.test.268v.com/" + data;
                    reslove(tempFilePaths);
                },
                fail: function fail(res) {
                    console.log("upfail==" + res);
                    tempFilePaths = "";
                    reslove(tempFilePaths);
                    wx.showToast({
                        title: "网络异常，请稍后再试",
                        icon: "none"
                    });
                }
            });
        });
        pro.then(function (res) {
            reslove(res);
        });
    }
    function discernVIN(reslove, tempFilePaths) {
        var me = this;
        wx.showLoading({
            title: '加载中'
        });
        var vin = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (reslove, reject) {
            wx.request({
                method: 'POST',
                url: "https://uniapi.test.cheyipai.com" + '/api/ValuatHome/RecognizeDriverLicense?imgUrl=' + tempFilePaths,
                success: function success(res) {
                    wx.hideLoading();
                    if (res.statusCode != 200) {
                        wx.showToast({
                            title: '网络异常，请稍后再试',
                            icon: "none"
                        });
                    } else {
                        if (res.data.code == 0) {
                            reslove(res.data.data.vehicleVinNumber);
                        } else {
                            reslove("");
                        }
                    }
                }
            });
        });
        vin.then(function (res) {
            reslove(res);
        });
    }
}
//获取userInfo
function getUserInfo() {
    var me = this;
    var userInfo = wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : '';
    return userInfo;
}

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowLayerPop),
      expression: "isShowLayerPop"
    }],
    staticClass: "popLayer"
  }, [_c('div', {
    staticClass: "pop-box"
  }, [_c('div', {
    staticClass: "pop-message"
  }, [_c('p', {
    staticClass: "pop-text"
  }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('p', {
    staticClass: "else-text",
    style: ({
      color: _vm.colorStyle
    })
  }, [_vm._v(_vm._s(_vm.elseText))])], 1), _vm._v(" "), (!_vm.oneBtn) ? _c('div', {
    staticClass: "pop-btn"
  }, [_c('form', {
    attrs: {
      "report-submit": "true",
      "eventid": '0'
    },
    on: {
      "submit": _vm.clickLeft
    }
  }, [_c('button', {
    staticClass: "button left-btn",
    style: ({
      color: _vm.leftBtnStyle
    }),
    attrs: {
      "formType": "submit"
    }
  }, [_vm._v(_vm._s(_vm.leftBtnText))])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "report-submit": "true",
      "eventid": '1'
    },
    on: {
      "submit": _vm.clickRight
    }
  }, [_c('button', {
    staticClass: "button right-btn",
    style: ({
      color: _vm.rightBtnStyle
    }),
    attrs: {
      "formType": "submit"
    }
  }, [_vm._v(_vm._s(_vm.rightBtnText))])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.oneBtn) ? _c('div', {
    staticClass: "pop-onlyBtn"
  }, [_c('form', {
    attrs: {
      "report-submit": "true",
      "eventid": '2'
    },
    on: {
      "submit": _vm.clickOnly
    }
  }, [_c('button', {
    staticClass: "button only-btn",
    style: ({
      color: _vm.onlyBtnStyle
    }),
    attrs: {
      "formType": "submit"
    }
  }, [_vm._v(_vm._s(_vm.onlyBtnText))])], 1)], 1) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0487957a", esExports)
  }
}

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('h1', [_vm._v("小程序模板")]), _vm._v(" "), _c('p', [_vm._v("\n\t\tutils里面有一些公共方法，做项目前先看一下\n\t")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-04b908f2", esExports)
  }
}

/***/ })

},[42]);
//# sourceMappingURL=main.js.map