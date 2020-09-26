// ajax.js # 2
// XMLHttpRequestオブジェクトを作成する関数を定義するスクリプト

// XMLHttpRequestオブジェクトを返す関数
function getXMLHttpRequestObject() {
	
    var ajax = null;

	// ほとんどのブラウザ
	if (window.XMLHttpRequest) {
	    ajax = new XMLHttpRequest();

	} else if (window.ActiveXObject) { 旧式のIE

		try {
   			ajax = new ActiveXObject('MSXML2.XMLHTTP.3.0');
		} catch (ex) {
			console.log('ActiveXObjectが作成できませんでした: ' + error.message + '\n');
		}
	}
	
	// オブジェクトを返す
    return ajax;

} // getXMLHttpRequestObject()関数の終わり