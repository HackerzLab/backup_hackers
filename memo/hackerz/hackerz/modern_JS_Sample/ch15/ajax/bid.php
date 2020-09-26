<?php # bid.php
// このページはAjax経由で入札を処理する。
// JSONを返す。

// コンフィグレーションファイルは必ず最初に必要
require('../includes/config.inc.php');

// スクリプトからはJSONを返す
header('Content-Type: application/json');

// デフォルトの応答
$data = array('status' => 'error', 'message' => 'An invalid bid was submitted.');
// $data = array('status' => 'error', 'message' => '無効な入札額が送信されました。');

// アイテムIDと入札値、ユーザーIDを検証
if (isset($_GET['itemId']) && filter_var($_GET['itemId'], FILTER_VALIDATE_INT, array('min_range' => 1))) {
	$itemId = $_GET['itemId'];
}
if (isset($_GET['bid']) && filter_var($_GET['bid'], FILTER_VALIDATE_FLOAT) && ($_GET['bid'] > $_GET['currentPrice']) ) {
	$bid = $_GET['bid'];
} 
// セッションが必要
session_start();
if (isset($_SESSION['userId']) && filter_var($_SESSION['userId'], FILTER_VALIDATE_INT, array('min_range' => 1))) {
	$userId = $_SESSION['userId'];
}

if (isset($itemId, $bid, $userId)) { // 入札に問題なければ
		
	// データベース接続が必要
	require (MYSQL);
		
	// クエリを作成
	$q = "INSERT INTO bids (itemId, userId, bid, dateSubmitted) VALUES ($itemId, $userId, $bid, UTC_TIMESTAMP())";
	$r = mysqli_query ($dbc, $q) or trigger_error("Query: $q\n<br />MySQL Error: " . mysqli_error($dbc));

	if (@mysqli_affected_rows($dbc) == 1) { // 入札は受理された
		$data = array('status' => 'accepted', 'message' =>  'あなたの入札 $' . number_format($bid, 2) . ' は受理されました。');
		// $data = array('status' => 'accepted', 'message' =>  'Your bid of $' . number_format($bid, 2) . ' has been accepted.');
	} else { 
		$data = array('status' => 'error', 'message' => 'あなたの入札はシステムエラーにより受理されませんでした。ご不便をおかけして申し訳ありません。');
	}

	mysqli_close($dbc);
	
}// 検証のIF-ELSEの終わり

// JSONデータを出力
echo json_encode($data);