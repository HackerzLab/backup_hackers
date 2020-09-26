// content.js

// ウィンドウロード時に機能性を確立
window.onload = function() {
    'use strict';

	// ページを管理するための変数
	var pages = ['model', 'view', 'controller'];
	var counter = 0;

	// 次のデータを取ってくる
	var ajax = getXMLHttpRequestObject();
	ajax.open('GET', 'resources/content.php?id=' + pages[counter], false);
	ajax.send(null);
	
	// データを取得
	var title = ajax.responseXML.getElementsByTagName('title')[0].firstChild.nodeValue;
	var content = ajax.responseXML.getElementsByTagName('content')[0].firstChild.nodeValue;
			
	// クリックハンドラ
	var nextLink = document.getElementById('nextLink');
	nextLink.onclick = function() {
	
		// コンテンツを更新
		document.getElementById('title').innerHTML = title;
		document.getElementById('content').innerHTML = content;
		
		// カウンタをインクリメント
		counter++;

		if (counter == 3) { // 全部見終わった
			nextLink.parentNode.removeChild(nextLink);
			ajax = null;
		} else { // 次のコンテンツを取得
			ajax.open('GET', 'resources/content.php?id=' + pages[counter], false);
			ajax.send(null);
			title = ajax.responseXML.getElementsByTagName('title')[0].firstChild.nodeValue;
			content = ajax.responseXML.getElementsByTagName('content')[0].firstChild.nodeValue;
		}
		
		// リンクを開かないようにfalseを返す
		return false;
			
	}; // onclickの無名関数の終わり
		
}; // onloadの無名関数の終わり