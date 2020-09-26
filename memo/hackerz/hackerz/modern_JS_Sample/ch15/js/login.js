// login.js
// このスクリプトはAjaxを使ってフォーム送信をダイナミックに処理する

// すべてを即時関数にラップする
(function() {
    'use strict';

    // エラーメッセージの表示に使用する関数
	function showErrorMessage(message) {
	    var errorDiv = U.$('errorDiv');
	    if (errorDiv) { // すでに存在するので更新
	        errorDiv.innerHTML = message;
	    } else { // 作成してページに追加
	        errorDiv = document.createElement('div');
	        errorDiv.id = 'errorDiv';
	        errorDiv.innerHTML = message;
	        var loginForm = U.$('loginForm');
	        loginForm.parentNode.insertBefore(errorDiv, loginForm);
	    } // messageDiv IF-ELSEの終わり
	}

    // フォームの送信時に呼び出される関数。
    // フォームデータを検証し、Ajax要求を実行する
	function validateForm(e) {

	    // イベントオブジェクトを取得
	    if (typeof e == 'undefined') e = window.event;

	    // フォームの送信を回避
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }

        // フォーム要素への参照を取得
		var username = U.$('username').value;
		var userpass = U.$('userpass').value;

		// 基本的な検証
		if ( (username.length > 0) && (userpass.length > 0) ) {

      // Ajax要求を実行
			var ajax = U.getXMLHttpRequestObject();
			ajax.onreadystatechange = function() {

			    // readyStateをチェック
			    if (ajax.readyState == 4) {

			        // ステータスコードをチェック
			        if ( (ajax.status >= 200 && ajax.status < 300) 
			        || (ajax.status == 304) ) {

            // 応答をチェック
						if (ajax.responseText == 'VALID') {
                            
							// フォームを隠す
							U.$('loginForm').style.visibility = 'hidden';

							// エラーDIVが存在する場合にはそれをなくす
							var errorDiv = U.$('errorDiv');
							if (errorDiv) {
							    errorDiv.parentNode.removeChild(errorDiv);
							}

							// 正常な応答なので、成功メッセージを表示
							U.setText('message', 'ログインしました。');
							U.$('message').className = 'good';
                            
						} else { // 異常な応答なので、エラーを表示
						    showErrorMessage('<h2>エラー！</h2><p class="error">入力された値はファイルのものと一致しません。</p>');
						}

						// Ajaxオブジェクトの後始末
						ajax = null;

			        } else { // 無効なステータスコードの場合は、フォームを送信
			            U.$('loginForm').submit();
			        }
  
			    } // readyState IFの終わり

			}; // onreadystatechangeの無名関数の終わり
        
			// 要求を実行
			ajax.open('POST', 'ajax/login.php', true);
			ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			var data = 'username=' + encodeURIComponent(username) + '&userpass=' + encodeURIComponent(userpass);
			ajax.send(data);    
    
			} else { // フォームの入力が完了していなかったら

			    // エラーメッセージを作成
			    var message = '<h2>エラー！</h2><p>次のエラーが発生しました：<ul>';
			    if (username.length == 0) {
			        message += '<li class="error">ユーザー名の入力を忘れています！</li>'
			    }
			    if (userpass.length == 0) {
			        message += '<li class="error">パスワードの入力を忘れています！</li>'
			    }
			    message += '</ul></p>';
    
			    // エラーをDIVに表示
			    showErrorMessage(message);

			} // 検証のIF-ELSEの終わり
    
		    // フォームの送信を回避
		    return false;

		} // validateForm()関数の終わり

    // ウィンドウがロードされたときに呼び出される関数。
    // ここではフォームにイベントリスナーを追加する必要がある
	function init() {
	    U.addEvent(U.$('loginForm'), 'submit', validateForm);
	} // init()関数の終わり

	// イベントリスナーをウィンドウのロードイベントに割り当てる
	U.addEvent(window, 'load', init);

})(); // 即時関数の終わり