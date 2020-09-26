// ウィンドウがロードされたら呼び出される関数。
function init() {
	'use strict';

	var myVar;
	// 値を代入していないので、myVarはundefined
	console.log(myVar);

	if(myVar === undefined){
		// myVarは厳密にundefined
		console.log('undefined');
	}

	myVar = false;

	if(myVar == 0){
		// myVarはfalseなのに==と等しい
		console.log('myVarは0?');
	}

	if(myVar !== 0){
		console.log('myVarは0ではない');
	}

	if(myVar !== undefined){
		console.log(myVar);
	}

	if(myVar === false){
		console.log('myVarはfalse');
	}

} // init()関数の終わり
window.onload = init;