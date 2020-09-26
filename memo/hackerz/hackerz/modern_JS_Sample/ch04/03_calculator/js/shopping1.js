// Script 4.2 - shopping.js
// 注文合計を計算するスクリプト

// フォームの送信時に呼び出される関数。
// 計算を実行し、falseを返す
function calculate() {
	'use strict';
	
	// 注文合計を保持する変数
	var total;
    
    // フォームの値への参照を取得する
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;

	// ここに検証を後で追加する！
	
	// 合計の最初の計算
	total = quantity * price;
	
	// 税率を扱いやすくする
	tax /= 100;
	tax++;
	
	// 税金を計算に入れる
	total *= tax;
		
	// 値引きを計算に入れる
	total -= discount;
	
	// 合計の表示
	document.getElementById('total').value = total;
	
	// 送信を回避するためfalseを返す
	return false;
    
} // calculate()関数の終わり

// ウィンドウがロードされたら呼び出される関数。
// ここではフォームにイベントリスナーを追加する必要がある
function init() {
	'use strict';
    // フォームへのイベントリスナーの追加
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;

} // init()関数の終わり
// イベントリスナーをウィンドウのロードイベントに割り当てる
window.onload = init;