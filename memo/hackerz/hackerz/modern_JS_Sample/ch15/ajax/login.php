<?php # login.php
// このページはAjax経由でログインフォームを処理する

// コンフィグレーションファイルは必ず最初に必要
require('../includes/config.inc.php');

// セッションをスタートさせる必要がある
session_start();

// フォーム送信をチェック
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	
	// データベースが必要
	require (MYSQL);
	
	// エラーを保持する配列
	$errors = array();
	
	// ユーザー名の検証
	if (isset($_POST['username']) && !empty($_POST['username'])) {
		$u = mysqli_real_escape_string ($dbc, $_POST['username']);
	} else {
		$errors[] = 'ユーザー名の入力を忘れています！';
	}
	
	// パスワードの検証
	if (isset($_POST['userpass']) && !empty($_POST['userpass'])) {
		$p = mysqli_real_escape_string ($dbc, $_POST['userpass']);
	} else {
		$errors[] = 'パスワードの入力を忘れています！';
	}
	
	if (empty($errors)) { // エラーなし！
		
		// データベースにクエリを出す
		$q = "SELECT userId, username, timezone FROM users WHERE (username='$u' AND userpass=SHA1('$p'))";		
		$r = mysqli_query ($dbc, $q) or trigger_error("Query: $q\n<br />MySQL Error: " . mysqli_error($dbc));
		
		if (@mysqli_num_rows($r) == 1) { // 一致するものがあった
			
			// データをセッションに保持
			$_SESSION = mysqli_fetch_array ($r, MYSQLI_ASSOC); 
			
			// 後始末
			mysqli_free_result($r);
			mysqli_close($dbc);
			
			// 状態を返す
			echo 'VALID';
			
			// スクリプトを終了
			exit(); 
			
		}

	}// $errors IFの終わり

	mysqli_close($dbc);
	
} // フォーム送信チェックの終わり

echo 'INVALID';