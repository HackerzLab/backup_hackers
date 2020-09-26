// エスケープシーケンスのテスト	

// ウィンドウがロードされたら呼び出される関数。
function init() {
	'use strict';

	var res1 = "ここで\n改行";
	console.log(res1);

	var res2 = "ここで\r復帰";
	console.log(res2);

	var res3 = "バックスラッシュの表示\\";
	console.log(res3);



} // init()関数の終わり
window.onload = init;