// random.js
// ６つのランダムな数値を生成するスクリプト

// この関数はdocument.getElementById()のショートカットの役割を果たす
// 唯一の引数としてストリングのidを取る。
// エレメントへの参照（つまりオブジェクト）を返す。
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
} // $関数の終わり

function setText(elementId, message) {
    'use strict';
    if ( (typeof elementId == 'string')
    && (typeof message == 'string') ) {
        var output = $(elementId);
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    } // メインのIFの終わり
} // etText()関数の終わり

// ランダムな数値を返す関数。
// ランダムな数値の最大数を制限する引数を取る
function getRandomNumber(max) {
    'use strict';
    
    // ランダムな数値を生成
    var n = Math.random();
    
    // 最大値が与えられている場合には、その数を掛け、
    // 端数を切り捨て整数にする
    if (typeof max == 'number') {
        n *= max;
        n = Math.floor(n);
    }
    
    // 計算した数値を返す
    return n;

} // getRandomNumber()関数の終わり

// ウィンドウのロード時に呼び出される関数。
// ６つのランダムな数値を求め、<p></p>内に表示する

function showNumbers() {
    'use strict';

    // 当選番号を保持する変数
    var numbers = '';

	for (var i = 0; i < 6; i++) {
        numbers += getRandomNumber(100) + ' ';
    }

    // 数を表示
    setText('output', numbers);

} // showNumbers()関数の終わり

// 初期設定
window.onload = showNumbers;