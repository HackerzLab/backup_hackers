// Script 11.3 - test.js
// Ajax要求を実行し、その応答を使ってページを更新するスクリプト

// ウィンドウのロード時に機能性を確立
window.onload = function() {
    'use strict';

	// Ajaxオブジェクトの作成
	var ajax = getXMLHttpRequestObject();
	
	// readyStateが変化したときに呼び出される
	ajax.onreadystatechange = function() {

		// readyStateプロパティを調べる
		if (ajax.readyState == 4) {
			
			// ステータスコードを調べる
		    if ( (ajax.status >= 200 && ajax.status < 300) 
		    || (ajax.status == 304) ) {
			
				// ページの更新

				// テキストバージョン
				document.getElementById('output').innerHTML = ajax.responseText;
	
				// XMLバージョン
				/*
				var data = ajax.responseXML;

				// <book>
				// console.log(data.documentElement);
				// <TextNode textContent="\n ">
				// console.log(data.documentElement.firstChild);
				// <chapter id="1">
				// console.log(data.documentElement.firstChild.nextSibling);//.firstChild.nodeValue);
				// <TextNode textContent="JavaScript再入門">
				// console.log(data.documentElement.firstChild.nextSibling.firstChild);
				// JavaScript再入門
				// console.log(data.documentElement.firstChild.nextSibling.firstChild.nodeValue);


				var chapters = data.getElementsByTagName('chapter');
				var str = '';
				for (var i = 0, count = chapters.length; i < count; i++) {

					console.log(chapters[i].getAttribute('id'));
					console.log(chapters[i].firstChild.nodeValue);
				    // chapters[i].idとchapters[i].valueを使う
					str += chapters[i].getAttribute('id') + '章 ' + ': ' + chapters[i].firstChild.nodeValue + '<br>';
				}
				document.getElementById('output').innerHTML = str;
				*/


				// JSONバージョン
				/*
				var data = JSON.parse(ajax.responseText);
				var str = '';
				str += '1章: ' + data[1].title + '<br>';
				str += '2章: ' + data[2].title + '<br>';
				document.getElementById('output').innerHTML = str;
				*/

				
				
		    } else { // ステータスエラー！
				document.getElementById('output').innerHTML = ajax.statusText;
				 
		    }
			

		} // readyStateのIFの終わり

	}; // onreadystatechangeの無名関数の終わり

    // ボタンにイベントハンドラを追加
    document.getElementById('btn').onclick = function() {

		// 要求を開く
	    ajax.open('GET', 'resources/test.txt', true);
	    // ajax.open('GET', 'resources/test.xml', true);
	    // ajax.open('GET', 'resources/test.json', true);
	
		// 要求を送信する
		ajax.send(null);
		
	}; // onclickの無名関数の終わり
    
}; // onloadの無名関数の終わり