// 数値とストリングの連結

// フォームの送信時に呼び出される関数。
// 計算を実行し、falseを返す

shipping = '5.00';
total = 23.88;

function calculate() {
	'use strict';
	var total;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var shipping = document.getElementById('shipping').value;
	//total = quantity * price;
	//tax /= 100;
	//tax++;
	//total *= tax;
	//total += shipping;
	
	//document.getElementById('total').value = total;
	return false;    
} // calculate()関数の終わり

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;


} // init()関数の終わり

window.onload = init;