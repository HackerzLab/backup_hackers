// random.js
// ６つのランダムな数値を生成するスクリプト

// ページのロード時に呼び出される関数。
// ６つのランダムな数値を求め、<p></p>内に表示する
function showNumbers() {
    'use strict';

    // 当選番号を保持する変数
    var numbers = '';

	// 数値を取得
    for (var i = 0; i < 6; i++) {
        numbers += parseInt((Math.random() * 100), 10) + ' ';
    }

    // 数字を表示
	var output = document.getElementById('output');
	if (output.textContent !== undefined) {
		output.textContent = numbers;
	} else {
		output.innerText = numbers;
	}

} // showNumbers()関数の終わり

// 初期設定
window.onload = showNumbers;