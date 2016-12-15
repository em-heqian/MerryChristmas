/**
 * 第二幅场景页面
 * 
 */

function pageC() {

    this.$window   = $(".page-c .window");
    this.$leftWin  = this.$window.find(".window-left");
    this.$rightWin = this.$window.find(".window-right");
    this.$sceneBg  = this.$window.find(".window-scene-bg");
    this.$closeBg  = this.$window.find(".window-close-bg");

    // 背景切换
    this.$sceneBg.transition({
        opacity: 0,
    }, 3000);
    this.$closeBg.css("transform", "translateZ(0)")
    this.$closeBg.transition({
        opacity: 1
    }, 5000);

    //关门动作
    this.closeWindow();
}

/**
 * 关闭窗
 * @return {[type]} [description]
 */
pageC.prototype.closeWindow = function() {
    var i=0
    function complete(){
        ++i;
        if(i>1){
            alert("完成");
        }
    }
    //
   this.$leftWin.addClass("close").one("animationend webkitAnimationEnd",function(){
       complete();
   }) 

   this.$rightWin.addClass("close").one("animationend webkitAnimationEnd",function(){
       complete();
   }) 
}

/**
 * 关闭窗
 * @return {[type]} [description]
 */
// pageC.prototype.closeWindow = function() {
//     var count=1;
//     var complete=function(){
//         ++count;
//         if(count==2){
//             alert("窗户关闭")
//         }
//     }
//     var bind=function(element){
//         element.addClass("close").one("animationend webkitAnimationEnd",function(event){
//         complete()    
//         })
//     }
//     bind(this.$leftWin)
//     bind(this.$rightWin)
// }

