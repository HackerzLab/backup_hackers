// utilities.js
// このスクリプトでは有用な関数を持ったオブジェクトを定義する

var U = {

    // ドキュメント要素をIDで取得する関数
    $: function(id) {
        'use strict';
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    }, // $()関数の終わり

    // 要素のテキストを設定する関数
    setText: function(id, message) {
        'use strict';
        if ( (typeof id == 'string')
        && (typeof message == 'string') ) {
    
            // 要素への参照を取得
            var output = this.$(id);
            if (!output) return false;
        
            // テキストを設定
            if (output.textContent !== undefined) {
                output.textContent = message;
            } else {
                output.innerText = message;
            }
            return true;
        } // IFの終わり
    }, // setText()関数の終わり
    
    // イベントリスナーを作成する関数
    addEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.addEventListener) { // W3C
            obj.addEventListener(type, fn, false);
        } else if (obj && obj.attachEvent) { // 旧式のIE
            obj.attachEvent('on' + type, fn);
        }
    }, // addEvent()関数の終わり
    
    // イベントリスナーを削除する関数
    removeEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.removeEventListener) { // W3C
            obj.removeEventListener(type, fn, false);
        } else if (obj && obj.detachEvent) { // 旧式のIE
            obj.detachEvent('on' + type, fn);
        }
    }, // removeEvent()関数の終わり

	// Ajaxオブジェクトを作成する関数
	getXMLHttpRequestObject: function() {

	    var ajax = null;

		// ほとんどのブラウザ
		if (window.XMLHttpRequest) {
		    ajax = new XMLHttpRequest();
		} else if (window.ActiveXObject) { // 旧式のIE.
		    ajax = new ActiveXObject('MSXML2.XMLHTTP.3.0');
		}

		// オブジェクトを返す
	    return ajax;

	} // getXMLHttpRequestObject()関数の終わり
	
}; // U 宣言の終わり