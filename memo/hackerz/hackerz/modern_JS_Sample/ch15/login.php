<?php # login.php
// このページでは、ログインフォームを表示し、それを処理する

// コンフィグレーションファイルは必ず最初に必要
require('includes/config.inc.php');

// ページタイトルを設定し、HTMLヘッダを読み込む
$page_title = 'ログイン';
include ('includes/header.html');

echo '<h1>ログイン</h1><p id="message">登録ユーザーが入札を送信するにはログインする必要があります。</p>';

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
			
			// 状態を表示
			echo '<p class="good">ログインしました。</p>';
			
			// フッターをインクルード
			include ('includes/footer.html');
			
			// スクリプトを終了
			exit(); 
			
		} else { // 一致しない
			$errors[] = '入力された値はファイルのものと一致しません。';
		}

	} // $errors IFの終わり

	// データベース接続を閉じる
	mysqli_close($dbc);
	
} // フォーム送信チェックの終わり

// エラーを表示
if (isset($errors) && is_array($errors)) {
	echo '<h2>エラー！</h2><p>次のエラーが発生しました：<ul>';
	foreach ($errors as $error) {
		echo "<li class=\"error\">$error</li>";
	}
	echo '</ul></p>';
	
}

// フォームを表示
?>
<form action="login.php" method="post" id="loginForm">
	<label>ユーザー名</label>
	<input name="username" id="username" type="text">
	<label>パスワード</label>
	<input name="userpass" id="userpass" type="password">
	<br>
	<input class="button" type="submit" value="ログイン">
</form>

<script src="js/login.js"></script>

<?php include ('includes/footer.html'); ?>