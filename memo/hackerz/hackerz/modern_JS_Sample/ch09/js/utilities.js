// Script 8.1 - utilities.js
// いくつかの実用的なメソッドを持つオブジェクトを定義するスクリプト

var U = {

    // ドキュメント要素をIDで取得するメソッド
    $: function(id) {
        'use strict';
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    }, // $()メソッドの終わり

    // 要素のテキストを設定するメソッド
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
    }, // setText()メソッドの終わり
    
    // イベントリスナーを作成するメソッド
    addEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.addEventListener) { // W3C
            obj.addEventListener(type, fn, false);
        } else if (obj && obj.attachEvent) { // 古いIE
            obj.attachEvent('on' + type, fn);
        }
    }, // addEvent()メソッドの終わり
    
    // イベントリスナーを削除するメソッド
    removeEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.removeEventListener) { // W3C
            obj.removeEventListener(type, fn, false);
        } else if (obj && obj.detachEvent) { // 古いIE
            obj.detachEvent('on' + type, fn);
        }
    } // removeEvent()メソッドの終わり

}; // U宣言の終わり