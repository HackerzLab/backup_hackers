// 論理演算子のテスト	

// ウィンドウがロードされたら呼び出される関数。
function init() {
	'use strict';

	var x = 5;
	if( (0 < x) && (x < 10)){
		console.log('xは0より大きくかつ10より小さい');
	}



} // init()関数の終わり
window.onload = init;