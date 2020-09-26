// Script 4.3 - shopping.js - version 2
// 注文合計を計算するスクリプト

// フォームの送信時に呼び出される関数。
// 計算を実行し、falseを返す
function calculate() {
	'use strict';
	var total;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
	total = quantity * price;
	tax /= 100;
	tax++;
	total *= tax;
	total -= discount;
	
	// 合計をフォーマット
	total = total.toFixed(2);
	
	document.getElementById('total').value = total;
	return false;    
} // calculate()関数の終わり

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} // init()関数の終わり

window.onload = init;