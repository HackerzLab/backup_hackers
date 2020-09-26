// eventtest2.js

// ページのロード時に呼び出される関数。
function init() {
    'use strict';
   console.log('init関数が呼ばれた');
}

function addEvent(obj, type, fn){
	if(obj && obj.addEventListener){
    	obj.addEventListener(type, fn, false);
    	console.log('W3C, addEvent');
	} else if(obj && obj.attachEvent) {
    	obj.attachEvent('on' + type, fn);
    	console.log('古いIE, addEvent');
	}
}

addEvent(window, 'load', init);

