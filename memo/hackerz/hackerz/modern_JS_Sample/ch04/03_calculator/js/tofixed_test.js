

// ウィンドウがロードされたら呼び出される関数。
function init() {
	'use strict';

	var num = 4095.3892;
	console.log(num.toFixed(0));
	console.log(num.toFixed(1));
	console.log(num.toFixed(2));
	console.log(num.toFixed(3));
	console.log(num.toFixed(4));
	console.log(num.toFixed(5));

} // init()関数の終わり

// イベントリスナーをウィンドウのロードイベントに割り当てる
window.onload = init;