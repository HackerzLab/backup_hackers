// Script 11.1 - ajax.js
// XMLHttpRequestオブジェクトを作成する関数を定義するスクリプト

// XMLHttpRequestオブジェクトを返す関数
function getXMLHttpRequestObject() {
	
    var ajax = null;

	// ほとんどのブラウザ
	if (window.XMLHttpRequest) {
	    ajax = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // 旧式のIE
	    ajax = new ActiveXObject('MSXML2.XMLHTTP.3.0');
	}
	
	// オブジェクトを返す
    return ajax;

} // getXMLHttpRequestObject()関数の終わり