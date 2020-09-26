// Script 4.7 - text.js
// テキストエリアに入力できるテキストの量を制限するスクリプト	

// フォームの送信時に呼び出される関数。
// テキストを限定し、falseを返す
function limitText() {
	'use strict';
	
	// 限定した結果のテキストを保持する
	var limitedText;
    
    // フォームの値への参照を取得する
	var originalText = document.getElementById('comments').value;

	// 100文字内の最後のスペースを探す
	var lastSpace = originalText.lastIndexOf(' ', 100);
	
	// そこまでのテキストを抜き出す
	limitedText = originalText.slice(0, lastSpace);
	
	// 送信される文字数の表示
	document.getElementById('count').value = originalText.length;

	// limitedTextの表示
	document.getElementById('result').value = limitedText;
	
	// 送信を回避するためfalseを返す
	return false;
    
} // limitText()の終わり

//ウィンドウがロードされたら呼び出される関数。
// ここではフォームにイベントリスナーを追加する必要がある
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = limitText;
} // init()関数の終わり
window.onload = init;
