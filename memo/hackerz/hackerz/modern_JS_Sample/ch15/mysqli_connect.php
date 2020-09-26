<?php # Script 19.x - mysqli_connect.php
// このファイルはデータベースにアクセスする情報を含む。
// またMySQLへの接続を確立し、データベースを選択する

// データベースへのアクセス情報を定数で設定
DEFINE ('DB_USER', 'username');
DEFINE ('DB_PASSWORD', 'password');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'jsdd_ch15');

// 接続を作成
$dbc = @mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// 接続が作成できない場合には、エラーを発生させる
if (!$dbc) {
	trigger_error ('Could not connect to MySQL: ' . mysqli_connect_error() );
} else { // そうでない場合には、エンコーディングを設定
	mysqli_set_charset($dbc, 'utf8');
}