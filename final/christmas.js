/**
 * 慕课网特制
 * 圣诞主题效果
 * @type {Object}
 */

/**
 * 切换页面
 * 模拟镜头效果
 * @return {[type]} [description]
 */
function changePage(element, effect, callback) {
    element
        .addClass(effect)
        .one("animationend webkitAnimationEnd", function() {
            callback && callback();
        })
}


/**
 * 中间调用
 */
var Christmas = function() {
    //页面容器元素

    var $pageA = $(".page-a");
    var $pageB = $(".page-b");
    var $pageC = $(".page-c");

    //观察者
    var observer = new Observer();

    //A场景页面
    new pageA($pageA,function() {
        observer.publish("completeA");
    })
    //进入B场景
    observer.subscribe("pageB", function() {
        new pageB($pageB,function() {
            observer.publish("completeB");
        })
    }) 
    //进入C场景
    observer.subscribe("pageC", function() {
        new pageC();
    })


    //页面A-B场景切换
    observer.subscribe("completeA", function() {
        changePage($pageA, "effect-out", function() {
            observer.publish("pageB");
        })
    })
    //页面B-C场景切换
    observer.subscribe("completeB",function(){
        changePage($pageC,"effect-in",function(){
            observer.publish("pageC");
        })
    })

};




$(function() {

    //圣诞主题效果，开始
    Christmas()

})

/**
 * 慕课网特制
 * 圣诞主题效果
 * @type {Object}
 */

/**
 * 中间调用
 */
// var Christmas = function() {
//     //页面容器元素
//     var $pageB = $(".page-b");
//     //构建第二个场景页面对象
//     new pageB($pageB);
// };

// $(function() {
//     Christmas();
// })