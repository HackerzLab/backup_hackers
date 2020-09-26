

// ウィンドウがロードされたら呼び出される関数。
function init() {
	'use strict';

	var num = 4095.3892;
	console.log(num.toPrecision(1));
	console.log(num.toPrecision(2));
	console.log(num.toPrecision(3));
	console.log(num.toPrecision(4));
	console.log(num.toPrecision(5));
	console.log(num.toPrecision(6));
	console.log(num.toPrecision(7));
	console.log(num.toPrecision(8));
	console.log(num.toPrecision(9));
	console.log(num.toPrecision(10));

} // init()関数の終わり

// イベントリスナーをウィンドウのロードイベントに割り当てる
window.onload = init;