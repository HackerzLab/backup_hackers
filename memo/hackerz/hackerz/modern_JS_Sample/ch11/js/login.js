// Script 11.x - login.js #2

// フォームの送信時に呼びdされる関数。
// フォームデータを検証し、Boolean値を返す
function validateForm() {
    'use strict';
    
    // フォーム要素への参照を取得
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // 検証！
	if ( (email.value.length > 0) && (password.value.length > 0) ) {

	   // Ajax要求を実行
	   var ajax = getXMLHttpRequestObject();

        ajax.onreadystatechange = function() {
            console.log(ajax.status)
            if (ajax.readyState == 4) {
                // ステータスコードをチェック
                if ( (ajax.status >= 200 && ajax.status < 300) || (ajax.status == 304) ) {

                    if (ajax.responseText == 'VALID') {
                        alert('ログインしました！');
                    } else {
                        alert('送信された値はファイルのものと一致しません！');
                    }

                } else {
                    document.getElementById('loginForm').submit();
                }
            }

        };

        ajax.open('POST', 'resources/login.php', true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var data = 'email=' + encodeURIComponent(email.value) + '&password=' + encodeURIComponent(password.value);
        ajax.send(data);	
	
        return false;

    } else {
        alert('フォームをすべて埋めてください！');
        return false;
    }
    
} // validateForm()関数の終わり

// ウィンドウがロードされたときに呼び出される関数。
// イベントリスナーをフォームに追加する
function init() {
    'use strict';
    
    // document.getElementById()が使用できることを確認
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
    }

} // init()関数の終わり

// イベントリスナーをウィンドウのロードイベントに割り当てる
window.onload = init;