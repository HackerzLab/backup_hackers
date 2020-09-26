<?php # getBids.php
// このページは一定額を超えた、アイテムの入札を返す

// コンフィグレーションファイルは必ず最初に必要
require('../includes/config.inc.php');

// スクリプトからはJSONを返す
header('Content-Type: application/json');

// 結果を保持する変数
$data = array();

// アイテムIDと現在価格が必要
if (isset($_GET['itemId']) && filter_var($_GET['itemId'], FILTER_VALIDATE_INT, array('min_range' => 1)) && isset($_GET['currentPrice']) && filter_var($_GET['currentPrice'], FILTER_VALIDATE_FLOAT)) {
	
	// データベース接続が必要
	require (MYSQL);
	
	// セッションが必要
	session_start();

	// ユーザーがログインし、タイムゾーンを選択している場合には、
	// 日付けと時刻を変換して使用
	// 
	if (isset($_SESSION['timezone'])) {
		$tz = "CONVERT_TZ(dateSubmitted, 'UTC', '{$_SESSION['timezone']}')";
	} else {
		$tz = 'dateSubmitted';
	}
	
	// クエリを作成
	$q = "SELECT bid, IF($tz > DATE_SUB(UTC_TIMESTAMP(), INTERVAL 24 HOUR), DATE_FORMAT($tz,'%l:%i %p'), DATE_FORMAT($tz,'%M %D @ %l:%i %p')) AS dateSubmitted FROM bids WHERE itemId={$_GET['itemId']} AND bid>{$_GET['currentPrice']} ORDER BY dateSubmitted ASC";
	$r = mysqli_query ($dbc, $q) or trigger_error("Query: $q\n<br />MySQL Error: " . mysqli_error($dbc));
	
	// 結果が存在する場合には、それを取ってくる
	if (@mysqli_num_rows($r) > 0) {
		while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
			$data[] = $row;
		}
	}
	
	// 後始末
	mysqli_free_result($r);
	mysqli_close($dbc);
	
} // 検証の終わり

// JSONデータを出力
echo json_encode($data);