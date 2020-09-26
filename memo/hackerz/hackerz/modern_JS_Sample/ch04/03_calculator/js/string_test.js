//
/// ウィンドウがロードされたら呼び出される関数。
function init() {
	'use strict';

	var fullName = 'Larry Ullman';
	console.log('length : ' + fullName.length);

	console.log('charAt(0) : ' + fullName.charAt(0));
	console.log('charAt(0) : ' + fullName.charAt(11));
	console.log('charAt(0) : ' + fullName.charAt(fullName.length - 1));

	console.log("indexOf('L') : " + fullName.indexOf('L'));
	console.log("indexOf('a') : " + fullName.indexOf('a'));
	console.log("indexOf(' ') : " + fullName.indexOf(' '));

	var language = 'JavaScript';
	console.log("indexOf('Script') : " + language.indexOf('Script'));
	console.log("indexOf('a') : " + language.indexOf('a'));
	console.log("indexOf('a',2) : " + language.indexOf('a',2));

	console.log("indexOf('script') : " + language.indexOf('script'));

	console.log("indexOf('a') : " + fullName.indexOf('a'));
	console.log("lastIndexOf('a') : " + fullName.lastIndexOf('a'));
	console.log("lastIndexOf('a',5) : " + fullName.lastIndexOf('a',5));

	console.log('slice(4) : ' + language.slice(4));
	console.log('slice(0,4) : ' + language.slice(0,4));

	console.log('slice(0,-6) : ' + language.slice(0,-6));
	console.log('slice(-6) : ' + language.slice(-6));

	console.log('substr(0,4) : ' + language.substr(0,4));
	console.log('substr(4) : ' + language.substr(4));
	console.log('substr(-6,6) : ' + language.substr(-6,6));

} // init()関数の終わり
window.onload = init;