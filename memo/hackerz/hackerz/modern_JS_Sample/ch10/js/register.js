// Script 10.7- register.js
// フォームを検証するスクリプト

// フォームの送信時に呼び出される関数。
// フォームデータを検証する
function validateForm(e) {
    'use strict';

    // イベントオブジェクトを取得
	if (typeof e == 'undefined') e = window.event;

    // フォームへの参照を取得
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var phone = U.$('phone');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var terms = U.$('terms');

	// フラグ用変数
	var error = false;

	// ファーストネームの検証
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'ファーストネームを入力してください。');
		error = true;
	}
	
	// メールアドレスの検証
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'メールアドレスを入力してください。');
		error = true;
	}
	
	// 電話番号の検証
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', '電話番号を入力してください。');
		error = true;
	}
	
	// 州の検証
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
	} else {
		addErrorMessage('state', '州を選択してください。');
		error = true;
	}
	
	// 郵便番号の検証
	if (/^\d{5}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
	} else {
			addErrorMessage('zip', '郵便番号を入力してください。');
		error = true;
	}

    // エラーがあった場合は、デフォルトの振る舞いを回避する
	if (error) {

		// フォームの送信を回避
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // validateForm()関数の終わり

// チェックボックスの選択に変化があったときに呼び出される関数。
// 送信ボタンの有効化と無効化を行う
// 
function toggleSubmit() {
	'use strict';
    
	// 送信ボタンへの参照を取得
	var submit = U.$('submit');
	
	// disabledプロパティのtrue/falseを切り替え
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // toggleSubmit()関数の終わり

// ウィンドウのロード時、機能性を確立
window.onload = function() {
    'use strict';

	// validateForm()でフォームを処理する
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// 初め、送信ボタンは無効にする
	U.$('submit').disabled = true;

	// チェックボックスの変化を監視
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// 電話番号用のツールチップを有効にする
	U.enableTooltips('phone');
    
};