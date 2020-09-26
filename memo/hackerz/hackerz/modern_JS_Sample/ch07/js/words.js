// words.js
// 単語の大文字小文字の違いを吸収したソートを実行する関数を定義したスクリプト

// ショートカット関数
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
} // $関数の終わり

// 要素のテキストを設定する関数
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
    } // IFの終わり
} // setText()関数の終わり

// 単語のリストをソートする関数。
// ストリングの引数を１つ取る
function sortWords(max) {
    'use strict';

    // 単語のストリングを取得
    var words = $('words').value;
    
    // ストリングを配列に変換
    words = words.split(' ');
    
    // 単語をソート
    var sorted = words.map(function(value) {
        return value.toLowerCase();
    }).sort();

    // 出力をページに送る
    setText('output', sorted.join(', '));
        
    // 送信しないためにfalseを返す
    return false;

} // sortWords()関数の終わり

function init() {
    'use strict';
    $('theForm').onsubmit = sortWords;
} // init()関数の終わり
window.onload = init;