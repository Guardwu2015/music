//export default {
//getApi: 'http://route.showapi.com/213-4?showapi_appid=39796&showapi_sign=0733db0e700c461c8fe8f62c197b3707&topid=',
//}

function myfun() {
console.log('Success')
}

const VueMyFun = {
	install:function(Vue) {
		Vue.prototype.$myFun = function(opt){
			return new myfun()
		}
	}
}

export default VueMyFun