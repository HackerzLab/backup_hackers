//
/// ウィンドウがロードされたら呼び出される関数。
function init() {
	'use strict';

	var message1 = 'Hello';
	message1 = message1 + ', World!';
	console.log(message1);

	var message2 = 'Hello';
	message2 += ', World!';
	console.log(message2);

	var address = '100 Main Street';
	console.log(address.concat(' Anytown', ' ST', ' 12345', ' US'));

	var language = 'JavaScript';
	console.log(language.indexOf('script'));

	console.log(language.toLowerCase());
	console.log(language.toLowerCase().indexOf('script'));



} // init()関数の終わり
window.onload = init;