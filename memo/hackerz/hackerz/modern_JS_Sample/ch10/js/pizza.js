// Script 10.5 - pizza.js
// マスターのチェックボックスを作成するスクリプト

// チェックボックスの選択に変化があったときに呼び出される関数。
// ほかのすべてのチェックボックスをトグルする
function toggleCheckboxes() {
    'use strict';

	// マスターチェックボックスの選択状態を取得
	var status = document.getElementById('toggle').checked;
	
	// すべてのチェックボックスを取得
	var boxes = document.querySelectorAll('input[type="checkbox"]');
	
	// チェックボックスを、２つめからループ処理
	for (var i = 1, count = boxes.length; i < count; i++) {
		
		// チェック状態を更新
		boxes[i].checked = status;
		
	} // FORループの終わり
} // toggleCheckboxes()関数の終わり

// ウィンドウのロード時に機能性を確率する
window.onload = function() {
    'use strict';
    // イベントハンドラをマスターチェックボックスに追加
    document.getElementById('toggle').onchange = toggleCheckboxes;
};