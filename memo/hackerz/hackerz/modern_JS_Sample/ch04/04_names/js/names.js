// Script 4.9 - names.js
// ２つのストリングを連結し、名前をフォーマットするスクリプト

// フォームの送信時に呼び出される関数。
// テキストをフォーマットし、falseを返す
function formatNames() {
	'use strict';
	
	// フォーマットする名前を保持する変数
	var formattedName;
    
    // フォームの値への参照を取得する
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	
	// 名前のフォーマット
	formattedName = lastName + ', ' + firstName;

	// フォーマットした名前を表示
	document.getElementById('result').value = formattedName;
	
	// 送信を回避するためfalseを返す
	return false;
    
} // formatNames()関数の終わり
// ウィンドウがロードされたら呼び出される関数。
// ここではフォームにイベントリスナーを追加する必要がある
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = formatNames;
} // init()関数の終わり
window.onload = init;