// # contact.js
// コンタクトフォームのAjax要求を実行するスクリプト

// Ajax応答を処理する関数
function handleAjaxResponse(e) {
    'use strict';

    // イベントオブジェクトを取得
	if (typeof e == 'undefined') var e = window.event;

	// イベントターゲットを取得
	var ajax = e.target || e.srcElement;

	// readyStateプロパティを調べる
	if (ajax.readyState == 4) {
	
		// ステータスコードを調べる
    	if ( (ajax.status >= 200 && ajax.status < 300) 
    	|| (ajax.status == 304) ) {
	
			// ページを更新
			document.getElementById('contactForm').innerHTML = ajax.responseText;
			
	    } else { // ステータスエラー！
	    	
			document.getElementById('theForm').submit();
	    }
	
		ajax = null;
				
	} // readyStateのIFの終わり
	
} // handleAjaxResponse()関数の終わり

// ウィンドウのロード時に機能性を確立する
window.onload = function() {
    'use strict';

	// the Ajaxオブジェクトを作成
	var ajax = getXMLHttpRequestObject();
	
	// readyStateが変化したときに呼び出される関数
	ajax.onreadystatechange = handleAjaxResponse;

    // フォームの送信時に呼び出される関数
    document.getElementById('theForm').onsubmit = function() {
	
		// データを作成
		var fields = ['name', 'email', 'comments'];
		var data = []; // 空の配列
		for (var i = 0, count = fields.length; i < count; i++) {
			data.push(encodeURIComponent(fields[i]) + '=' + encodeURIComponent(document.getElementById(fields[i]).value));
		}
		
		// 要求を開く
		ajax.open('POST', 'resources/contact.php', true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		// 要求を送信
		ajax.send(data.join('&'));
		
		return false;
		
	}; // onsubmitの無名関数の終わり
    
}; // onload無名関数の終わり