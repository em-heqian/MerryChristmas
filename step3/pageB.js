
// function pageB (argument) {
//        alert("页面B")
// }
function pageB(callback) {

    //模拟执行时间
	setTimeout(function() {

		callback()

	}, 2000)

}