<?php # config.inc.php
/* このスクリプトは：
 * - 定数と設定を定義
 * - エラーの処理方法を指示
 * - 便利な関数を定義
 */
 
// 誰が、いつ、なぜ、このサイトを作成したかなどを記載


// ********************************** //
// ************ SETTINGS ************ //

// サイトの状態を表す変数
define('LIVE', FALSE);

// 管理者の連絡先アドレス
define('EMAIL', 'InsertRealAddressHere');

// サイトURL （すべてのリダイレクトのベース）
// define ('BASE_URL', 'http://ch15/');
define ('BASE_URL', 'http://localhost:8080/ch15/');

// MySQL接続スクリプトの場所
//define ('MYSQL', '/Users/larryullman/Sites/javascript_book/mysqli_connect.php');
define ('MYSQL', 'C:\Users\himco\Desktop\ch15\mysqli_connect.php');

// PHP5.1とそれ以降用のタイムゾーンの調整
date_default_timezone_set ('US/Eastern');
// date_default_timezone_set ('Asia/Tokyo');

// ************ SETTINGS ************ //
// ********************************** //


// ****************************************** //
// ************ ERROR MANAGEMENT ************ //

// エラーハンドラの作成
function my_error_handler ($e_number, $e_message, $e_file, $e_line, $e_vars) {

	// エラーメッセージ
	$message = "An error occurred in script '$e_file' on line $e_line: $e_message\n";
	
	// 日付けと時刻を追加
	$message .= "Date/Time: " . date('n-j-Y H:i:s') . "\n";
	
	if (!LIVE) { // 開発用（エラーを出力）

		// エラーメッセージを表示
		echo '<div class="error">' . nl2br($message);
	
		// 変数とバックトレースを追加
		echo '<pre>' . print_r ($e_vars, 1) . "\n";
		debug_print_backtrace();
		echo '</pre></div>';
		
	} else { // エラーは表示しない

		// メールを管理者に送信
		$body = $message . "\n" . print_r ($e_vars, 1);
		mail(EMAIL, 'Site Error!', $body, 'From: email@example.com');
	
		// Noticeエラーでない場合には、エラーメッセージのみを出力
		if ($e_number != E_NOTICE) {
			echo '<div class="error">システムエラーが発生しました。ご不便をおかけして申し訳ありません。</div><br />';
		}
	} // !LIVE IFの終わり

} // my_error_handler()定義の終わり

// エラーハンドラを使用
set_error_handler ('my_error_handler');

// ************ ERROR MANAGEMENT ************ //
// ****************************************** //