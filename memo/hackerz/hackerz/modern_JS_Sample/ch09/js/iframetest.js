var parentProperty = '親ドキュメント';

function parentFunction(){
	console.log('親の関数');
}

window.onload = function() {
    'use strict';
    console.log(window.frames[0]);
    console.log(window.length);
    console.log(window.frames.length);

    console.log(window.frames["iframeName1"]);

    var iframe1 = document.getElementById('iframeId1');
    console.log(iframe1);

    var frameWindow = iframe1.contentWindow || iframe1.contentDocument;
    console.log(frameWindow.iframeProperty);
    frameWindow.iframeFunction();

    if(window.parent != window.self){
    	console.log('これは子');
    } else {
    	console.log('これは親');
    }
    
}





