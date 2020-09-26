// fader.js
// フェーダーを作成するスクリプト

// この関数ですべて行う
window.onload = function() {
	'use strict';
	
	// ターゲット(DIV)の取得
	var target = document.getElementById('target');
	
	// 初めの不透明度を100に設定
	var opacity = 100;

	// フェーダーを作成
	var fader = setInterval(function() { 

		// 不透明度を下げる（徐々に透明に近づける）
		opacity -= 10;

		// 不透明度が正数である限り、以下をつづける
		if (opacity >= 0) {
	
			// いくつかのブラウザ用
			if (typeof target.style.opacity == 'string') {
				target.style.opacity = (opacity/100);
			} else { // ほかのブラウザ用
				target.style.filter = 'alpha(opacity=' + opacity + ')';
			}
		} else {
			clearInterval(fader);
		}
		
	}, 100); // setInterval()の終わり
	
}; // onloadの無名関数の終わり