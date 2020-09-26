// Script 10.1 - errorMessages.js
// エラーメッセージの追加と削除を行う関数を定義するスクリプト

// エラーメッセージを追加する関数。
// 引数として、フォーム要素のIDとメッセージを取る
function addErrorMessage(id, msg) {
   	'use strict';
    
    // フォーム要素への参照を取得
    var elem = document.getElementById(id);
    
    // 新しいspan用のID値を定義
    var newId = id + 'Error';
    
    // spanが存在するかどうかを調べる
    var span = document.getElementById(newId);
    if (span) {
        span.firstChild.value = msg; // 更新
    } else { // 新たに作成
    
        // spanを作成
        span = document.createElement('span');
        span.id = newId;
		span.className = 'error';
        span.appendChild(document.createTextNode(msg));
        
        // spanを要素の親に追加
        elem.parentNode.appendChild(span);
        // console.log(id);
        // console.log(elem.parentNode);
        elem.previousSibling.className = 'error';
        // console.log(elem.previousSibling);

    } // IF-ELSEの終わり

} // addErrorMessage()関数の終わり

// エラーメッセージを削除する関数。
// 引数にフォーム要素のIDを取る
function removeErrorMessage(id) {
   	'use strict';

    // spanへの参照を取得
    var span = document.getElementById(id + 'Error');
	if (span) {
    
	    // ラベルからクラスを削除
        // console.log(span.previousSibling.previousSibling);
        // console.log(span.previousSibling.previousSibling.className);
	    span.previousSibling.previousSibling.className = null;
    
	    // spanを削除
	    span.parentNode.removeChild(span);

	} // IFの終わり
    
} // removeErrorMessage()関数の終わり