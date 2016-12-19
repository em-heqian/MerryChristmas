$(function() {
    var snowElement = document.getElementById("snowflake")
    var canvasContext = snowElement.getContext("2d");
    var width  = config.clientWidth;
    var height = config.clientHeight;
    //canvas尺寸修正
    snowElement.width  = width;
    snowElement.height = height;
    //构建雪球的数量
    var snowNumber = 50;

    function snow(){
        this.radius = randomInRange(3, 10);
        //初始的x位置
        this.x = (Math.random() * width);
        this.y = (Math.random() * height);
        //滤镜
        this.alpha = randomInRange(0.5,1);
        //绘制雪球
        this.render();
    }

    randomInRange(){
        
    }

})