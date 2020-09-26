// Script 11.3 - test.js
// プログレッシブ

// ウィンドウのロード時に機能性を確立
window.onload = function() {
    'use strict';

	// Ajaxオブジェクトの作成
	var ajax = getXMLHttpRequestObject();
	var loader = document.getElementById('loader');

	ajax.onprogress = function(e) {
		if(typeof e=='undefined') e = window.event;
		var pct = e.loaded/e.total;
		console.log(pct);
	}

	ajax.onabort = function(e) {
		console.log('中断');
		loader.style.visibility = 'hidden';
		document.getElementById('output').innerHTML = '処理は中断されました。';
	}
	
	// readyStateが変化したときに呼び出される
	ajax.onreadystatechange = function() {

		// readyStateプロパティを調べる
		if (ajax.readyState == 4) {
			
			// ステータスコードを調べる
		    if ( (ajax.status >= 200 && ajax.status < 300) 
		    || (ajax.status == 304) ) {
			
				// ページの更新

				// 単純なテキスト
				// document.getElementById('output').innerHTML = ajax.responseText;
				// 複数の情報を含むテキスト
				// var employee = ajax.responseText.split('|');
				// document.getElementById('output').innerHTML = employee[0] + employee[1] + employee[2];
	
				// XMLバージョン
				/*
				var data = ajax.responseXML;
				var records = data.getElementsByTagName('record');
				var str = '';

				for (var i = 0, count = records.length; i < count; i++) {
					var id = records[i].getElementsByTagName('id')[0].firstChild.nodeValue;
					var comment = records[i].getElementsByTagName('comment')[0].firstChild.nodeValue:
					var email = records[i].getElementsByTagName('email')[0].firstChild.nodeValue;
					str += comment + ': ' + email + '<br>';

				}
				document.getElementById('output').innerHTML = str;
				*/


				

				// JSONバージョン
				
				var data = JSON.parse(ajax.responseText);
				
				var str = '';
				str += data[0].comment + ': ' + data[0].email + '<br>';
				str += data[1].comment + ': ' + data[1].email + '<br>';
				document.getElementById('output').innerHTML = str;
			
				loader.style.visibility = 'hidden';
				
				
		    } else { // ステータスエラー！
				document.getElementById('output').innerHTML = ajax.statusText;
		    }
					
		} // readyStateのIFの終わり

	}; // onreadystatechangeの無名関数の終わり

    // ボタンにイベントハンドラを追加
    document.getElementById('btn').onclick = function() {

    	
		loader.style.visibility = 'visible';

		var ajaxTimer = setTimeout(function(){
			// 要求を開く
	    	ajax.open('GET', 'resources/returntest.php', true);
	    	// ajax.open('GET', 'resources/test.xml', true);
	   	 	// ajax.open('GET', 'resources/test.json', true);
	
			// 要求を送信する
			ajax.send(null);
			
			// ajax.abort();

		}, 2000);
		
		
	}; // onclickの無名関数の終わり
    
}; // onloadの無名関数の終わり