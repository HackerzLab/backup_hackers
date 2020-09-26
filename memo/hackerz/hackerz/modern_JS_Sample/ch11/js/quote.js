// quote.js
// 株価を取得し表示するスクリプト

// ウィンドウのロード時に機能性を確立
window.onload = function() {
    'use strict';

	// Ajaxオブジェクトを作成
	var ajax = getXMLHttpRequestObject();
	
	// readyStateの変化で呼び出される関数
	ajax.onreadystatechange = function() {

		// readyStateを調べる
		if (ajax.readyState == 4) {
		
			// ステータスコードを調べる
		    if ( (ajax.status >= 200 && ajax.status < 300) 
		    || (ajax.status == 304) ) {

				// 応答を解析
				var data = JSON.parse(ajax.responseText);

				// console.log(data[0]);

				// ページを更新
				var output = document.getElementById('quote');
				if (output.textContent !== undefined) {
				    output.textContent = data[0].l;
				} else {
				    output.innerText = data[0].l;
				}
			
		    } // statusのIFの終わり
				
		} // readyStateのIFの終わり

	}; // onreadystatechangeの無名関数の終わり
	
	// 最初に示すデータを取ってくる
	ajax.open('GET', 'resources/quote.php', true);
	ajax.send(null);
	
	// データはターマーを使って定期的に取ってくる
	var stockTimer = setInterval(function() {
	
	    ajax.open('GET', 'resources/quote.php', true);
		ajax.send(null);
	
	}, 60000);
		
    
}; // onloadの無名関数の終わり