//getStyle()获取样式 obj：元素对象 attr：元素对象的属性，必须是字符串
function getStyle(obj,attr){
    return window.getComputedStyle(obj)[attr]
}

//moveFn() ele:元素 attr:长度属性 step:步长 target:目标点 callback: 回调函数
function move(element, attr, step, target, callback) {
	clearInterval( element.timer );
	element.timer = setInterval(function () {
		let l = parseInt(getStyle( element, attr )) + step;
		if ( l > target && step > 0 ||  l < target && step < 0  ) {
			l = target;
		}
		element.style[attr] = l + 'px';
        
		if ( l == target ) {
			clearInterval( element.timer );
			callback && callback();
		}
	}, 30);
}

//double Digits
function double(n) {
    return n > 9 ? "" + n : "0" + n;
}

//透明度变化函数
function opacity(element, target,step,  callback) {
    // step = getStyle(element, 'opacity')*100 < target ? step : -step;
    clearInterval(element.timer2)
    element.timer2 = setInterval(function () {
        let o = parseInt(getStyle(element, 'opacity') * 100) + step
        if (o > target && step > 0 || o < target && step < 0) o = target
        element.style.opacity = o / 100
        if (o == target) {
            clearInterval(element.timer2)
            callback && callback()
        }
    }, 20)
}
