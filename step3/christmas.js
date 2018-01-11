/**
 * 慕课网特制
 * 圣诞主题效果  面向对象
 * @type {Object}
 */

/**
 * 切换页面
 * 模拟镜头效果
 * @return {[type]} [description]
 */
function changePage(element,effect,callback){
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

    //切换切换
    // $("#choose").on("change", function(e) {
    //     //页面名称
    //     var pageName = e.target.value;  
    //     switch (pageName) {
    //         case "page-b":
    //             //切换到页面B，然后捕获到切换后的通知
    //             changePage($pageA, "effect-out", function() {
    //                 new pageB()
    //             })
    //             break;
    //         case "page-c":
    //             //切换到页面C，然后捕获到切换后的通知
    //             changePage($pageC, "effect-in", function() {
    //                 new pageC()
    //             })
    //             break;
    //     }
    // })
    //观察值
    var observer = new Observer();

    //A场景页面
    new pageA(function(){  //传入的为回调函数
        observer.publish("completeA");
        alert("A");
    })

    //进入B场景
    observer.subscribe("pageB",function(){
        new pageB(function(){
            observer.publish("completeB")
        })
    })

    //进入C场景
    observer.subscribe("pageC",function(){
        new pageC();
    })
    //页面A-B场景切换
    observer.subscribe("completeA",function(){
        
        alert("completeA");
        changePage($pageA, "effect-out", function() {
            
            observer.publish("pageB");
        })
    })
    //页面B-C场景切换
    observer.subscribe("completeB",function(){
        // changePage($pageB,"effect-in",function(){
        //     observer.publish("pageC");
        // })  :错误原因 B-C的跳转是C慢慢从画面出现
        changePage($pageC,"effect-in",function(){
            observer.publish("pageC");
        })
    })



};


function HTML5Audio(url, loop) {
    var audio = new Audio(url);
    audio.autoplay = true;
    audio.loop = loop || false; //是否循环
    audio.play();
    return {
        end: function(callback) {
            audio.addEventListener('ended', function() {
                callback()
            }, false);
        }
    }
}

// $(function() {
//     $("button:first").click(function() {

//     })

// })



$(function() {
    $("button").click(function(){
        //圣诞主题效果，开始
                //背景音乐
        var audio1 = HTML5Audio('http://www.sunnylinner.com/Games/Music/Media/407.mp3')
        audio1.end(function() {
            alert("音乐结束")
        })
        Christmas()
    })
})