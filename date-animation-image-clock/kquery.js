//getStyle()获取样式 obj：元素对象 attr：元素对象的属性，必须是字符串
function getStyle(obj,attr){
    return window.getComputedStyle(obj)[attr]
}

//moveFn() ele:元素 attr:长度属性 step:步长 target:目标点 callback: 回调函数
function moveFn(ele, attr, step, target, callback) {
    //2.变量
    let l = parseInt(getStyle(ele, attr))
    step = l < target ? step : -step
    clearInterval(ele.timer)
    ele.timer = window.setInterval(function () {
        l = parseInt(getStyle(ele, attr)) + step
        if (l > target && step > 0 || l < target && step < 0) l = target
        ele.style[attr] = l + 'px'
        if (l == target) {
            clearInterval(ele.timer)
            // if(callback) callback() 
            callback && callback()
        }
    }, 10)
}

//double Digits
function double(n) {
    return n > 9 ? "" + n : "0" + n;
}