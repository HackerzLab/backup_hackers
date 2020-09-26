// Script 9.11 - cookies.js
// クッキー関数を備えたオブジェクトを定義するスクリプト

// １つのグローバルオブジェクトを作成
var COOKIE = {
    
    // クッキーを設定するための関数
    setCookie: function(name, value, expire) {
        'use strict';

        // 検証を加えること！
        
        // console.log('エンコード前 : ' + name + '=' + value);
        // 値にするストリングの作成で始める
        var str =  encodeURIComponent(name) + '=' + encodeURIComponent(value);
        // console.log('エンコード後 : ' + str);
        // 有効期限を追加
        str += ';expires=' + expire.toGMTString(); 

        //console.log(str);
    
        // クッキーを作成
        document.cookie = str;

    }, // setCookie()関数の終わり
    
    // クッキー値を取得するための関数
    getCookie: function(name) {
        'use strict';

        // クッキーの名前の長さを知っておくと後々便利
        var len = name.length;
        
        // クッキー値を;で分割
        var cookies = document.cookie.split(';');

        // その値をループ処理
        for (var i = 0, count = cookies.length; i < count; i++) {

            // 最初のスペースははずす
            var value = (cookies[i].slice(0,1) == ' ') ? cookies[i].slice(1) : cookies[i];
            // console.log('デコード前 : ' + value);
			// 値をデコード
			value = decodeURIComponent(value);
            // console.log('デコード後 : ' + value);

            // 名前に一致するかどうかを調べる
            if (value.slice(0,len) == name) {

                // 等記号の後の部分を返す
                return value.split('=')[1];

                /*
                var v = value.split('=');
                console.log(v);
                console.log(v[1]);
                return v[1];
                */
            } // IFの終わり
            
        } // FORループの終わり
            
        // 何も返さない場合はfalseを返す
        return false;

    }, // getCookie()関数の終わり
    
    // クッキーを消去するための関数
    deleteCookie: function(name) {
        'use strict';
        document.cookie = encodeURIComponent(name) + '=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
    } // deleteCookie()関数の終わり

}; // COOKIE宣言の終わり