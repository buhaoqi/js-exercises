//getStyle()获取样式 obj：元素对象 attr：元素对象的属性，必须是字符串
function getStyle(obj,attr){
    return window.getComputedStyle(obj)[attr]
}

//moveFn() ele:元素 attr:长度属性 step:步长 target:目标点 callback: 回调函数
function move(obj, attr, dir, target, endFn) {
    // console.log(1)
    // let l = parseInt(getStyle(ele, attr))
    // step = l < target ? step : -step
    // clearInterval(ele.timer)
    // ele.timer = window.setInterval(function () {
    //     l = parseInt(getStyle(ele, attr)) + step
    //     if (l > target && step > 0 || l < target && step < 0) l = target
    //     ele.style[attr] = l + 'px'
    //     if (l == target) {
    //         clearInterval(ele.timer)
    //         // if(callback) callback() 
    //         callback && callback()
    //     }
    // }, 30)
    dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
		
	}, 30);
}

//double Digits
function double(n) {
    return n > 9 ? "" + n : "0" + n;
}

//透明度变化函数
function opacity(element, step, target, callback) {
    // step = getStyle(element, 'opacity')*100 < target ? step : -step;
    // clearInterval(element.timer)
    // element.timer = setInterval(function () {

    //     let o = parseInt(getStyle(element, 'opacity') * 100) + step
    //     if (o > target && step > 0 || o < target && step < 0) o = target

    //     element.style.opacity = o / 100
    //     // element.style.filter = 'alpha(opacity='+ speed +')';

    //     if (o == target) {
    //         clearInterval(element.timer)
    //         callback && callback()
    //     }
    // }, 20)
    step = getStyle(element, 'opacity')*100 < target ? step : -step;
		
		clearInterval( element.opacity );
		
		element.opacity = setInterval(function () {
			
			var opa = parseInt(getStyle(element, 'opacity')*100) + step;
			
			if ( opa > target && step > 0 || opa < target && step < 0 ) {
				opa = target;
			}
			
			element.style.opacity = opa/100;
			// element.style.filter = 'alpha(opacity='+ opa +')';
			
			if ( opa == target ) {
				clearInterval( element.opacity );
				callback && callback();
			}

		}, 20);
}
