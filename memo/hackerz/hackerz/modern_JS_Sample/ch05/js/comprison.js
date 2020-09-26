// ウィンドウがロードされたら呼び出される関数。
function init() {
	'use strict';

	var n = 0;
	if(n){
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}

	if(n===false){
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}

	if(null===undefined){
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}

	if(''===NaN){
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}

	if(1===true){
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}

	if(null==undefined){
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}

	if(null!==undefined){
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}

	if(1==true){
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}

	if(1!==true){
		console.log('TRUE');
	} else {
		console.log('FALSE');
	}




} // init()関数の終わり
window.onload = init;