// while.js

// ページのロード時に呼び出される関数。
function init() {
    'use strict';

    /*
    var i = 0;
    while(i < 5){
    	console.log('i = ' + i);
    	i++;
    }

    var j = 0;
    do {
    	console.log('j = ' + j);
    	j++;
    }while( j < 5);

    var k = 0;
    while(k < 5){
    	console.log('k = ' + k);
    	k++;
    	if(k > 3) {
    		console.log('while抜けた');
    		break;
    	}
    }
    */

    var l = 0;
    while(l < 3){
    	l++;
    	console.log('１つめの命令');
    	console.log('２つめの命令');
    	console.log('３つめの命令');
    	continue;
    	console.log('４つめの命令');
    	console.log('５つめの命令');
    	
    }

    for(var m = 0; m < 5; m++){

    	if(m == 3){
    		console.log(m);
    		console.log('continue前');
    		continue;
    	}
    	console.log(m);
    	console.log('continue後');
    }


    

} // init()関数の終わり

// 初期設定
window.onload = init;