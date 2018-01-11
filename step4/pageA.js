
function pageA(element,callback) {

    //模拟执行时间
	// setTimeout(function() {

	// 	callback()

	// }, 2000)
    //根元素
	this.$root = element;
	//小男孩
	this.$boy = element.find(".chs-boy");
	//运行动画
	this.run();
    //callback()

}

/**
 * 运行下一个动画
 * @return {Function} [description]
 */
pageA.prototype.next = function(options) {
    var dfd = $.Deferred();
    console.log(this);
    this.$boy.transition(options.style, options.time, "linear",function() {
        dfd.resolve()
    });
    return dfd;
}

/**
 * 停止走路
 * @return {[type]} [description]
 */
pageA.prototype.stopWalk = function(){
    this.$boy.removeClass("chs-boy-deer")
}

pageA.prototype.run = function(){
	var that = this;
    //因为在nex方法中使用了this.$boy来获取引用 所以要绑定当前this
	//1.作者方法
    // var next = function(){
	// 	return this.next.apply(this,arguments);
    //     //return this.next(arguments); 这样是错的
	// }.bind(this);
    // 2.
    // var next = function(op) {
    //     return that.next(op); 
    // };
    //我的方法
    var next = this.next.bind(this);
    

	 next({
        "time": 10000,
        "style": {
            "top": "4rem",
            "right": "16rem",
            "scale": "1.2"
        }
    })
    .then(function() {
       return next({
            "time":500,
            "style": {
               "rotateY" : "-180",
               "scale": "1.5"
            }
        })
    })    
    //
    .then(function(){
        return next({
            "time":7000,
            "style":{
                "top":"7.8rem",
                "right":"1.2rem"
            }
        })
    })
    .then(function(){
        that.stopWalk();
    });  
}