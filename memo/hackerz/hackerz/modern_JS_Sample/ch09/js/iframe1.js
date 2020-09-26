var iframeProperty = "フレームプロパティ";

function iframeFunction(){
	console.log('iframeの関数');
}


window.onload = function() {
    'use strict';
    console.log('iframe');
    console.log(window.parent.parentProperty);
    window.parent.parentFunction();

    if(window.parent != window.self){
    	console.log('これは子');
    } else {
    	console.log('これは親');
    }
}





