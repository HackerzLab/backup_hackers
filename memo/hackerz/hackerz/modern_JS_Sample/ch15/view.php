<?php # view.php
// このページでは、オークションの特定アイテムの詳細を表示し、アイテムの入札を行えるようにする

// コンフィグレーションファイルは必ず最初に必要
require('includes/config.inc.php');

// ページタイトルを設定し、HTMLヘッダを読み込む
$page_title = 'View Item';
include ('includes/header.html');

// itemIdを検証
$itemId = false;
if (isset($_GET['itemId']) && filter_var($_GET['itemId'], FILTER_VALIDATE_INT, array('min_range' => 1))) {
	$itemId = $_GET['itemId'];
} elseif (isset($_POST['itemId']) && filter_var($_POST['itemId'], FILTER_VALIDATE_INT, array('min_range' => 1))) { 
	$itemId = $_POST['itemId'];
}

// itemIdが無効な場合には、エラーを表示し、スクリプトを終える
if (!$itemId) {
	echo '<h2>エラー！</h2><p class="error">このページに誤ってアクセスしました！</p>';
	include ('includes/footer.html');
	exit();
}

// データベース接続が必要
require(MYSQL);

// フォーム送信をチェック
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	
	// ユーザーIDと入札数を検証
	if (isset($_SESSION['userId']) && filter_var($_SESSION['userId'], FILTER_VALIDATE_INT, array('min_range' => 1))) {
		$userId = $_SESSION['userId'];
	}
	if (isset($_POST['bid']) && filter_var($_POST['bid'], FILTER_VALIDATE_FLOAT) && ($_POST['bid'] > $_POST['currentHidden'])) {
		$bid = $_POST['bid'];
	} 
	
	// 入札をポスト
	if (isset($userId, $bid)) { // 入札を送信
		$q = "INSERT INTO bids (itemId, userId, bid, dateSubmitted) VALUES ($itemId, $userId, $bid, UTC_TIMESTAMP())";
		$r = mysqli_query ($dbc, $q) or trigger_error("Query: $q\n<br />MySQL Error: " . mysqli_error($dbc));
		if (@mysqli_affected_rows($dbc) == 1) {
			echo '<h2>入札を受け付けました！</h2><p class="good">あなたの入札 $' . $bid . ' は受理されました。</p>';
		} else {
			echo '<h2>エラー！</h2><p class="error">あなたの入札はシステムエラーにより受理されませんでした。ご不便をおかけして申し訳ありません。</p>';
		}
	} else { // エラーを表示
		echo '<h2>エラー！</h2><p class="error">あなたの入札は受理されませんでした。現在の最高入札額を超える価格で入札してください。</p>';
	}

}

// ユーザーがログインし、タイムゾーンを選択している場合には、
// 日付けと時刻を変換して使用
if (isset($_SESSION['timezone'])) {
	$closeTz = "CONVERT_TZ(dateClosed, 'UTC', '{$_SESSION['timezone']}')";
	$bidTz = "CONVERT_TZ(dateSubmitted, 'UTC', '{$_SESSION['timezone']}')";
} else {
	$closeTz = 'dateClosed';
	$bidTz = 'dateSubmitted';
}

// クエリを作成
$q = "SELECT item, description, openingPrice, COALESCE(MAX(bid), openingPrice), DATE_FORMAT($closeTz,'%M %D @ %l:%i %p'), IF(dateClosed < UTC_TIMESTAMP(), 'closed', 'open'), CEILING((UNIX_TIMESTAMP(dateClosed) - UNIX_TIMESTAMP(UTC_TIMESTAMP()))/60) FROM items LEFT JOIN bids USING (itemId) WHERE items.itemId=$itemId GROUP BY bids.itemId";
$r = mysqli_query ($dbc, $q) or trigger_error("Query: $q\n<br />MySQL Error: " . mysqli_error($dbc));

// 行を取得
list ($item, $description, $openingPrice, $currentPrice, $dateClosed, $status, $minutesRemaining) = mysqli_fetch_array($r, MYSQLI_NUM);
mysqli_free_result($r);

// 最初の情報を出力
echo "<h1 id=\"itemHeading\">$item</h1>
<p>$description</p>
<h2>開始価格： \$$openingPrice</h2>
<h2 id=\"closingH2\">終了時刻</em>: $dateClosed";

// 間もなく終了するかどうかを調べる
if ( ($minutesRemaining < 60) && ($status == 'open')) {
	echo ' <span id="minutesRemainingSpan" class="caution">' . '残り ' . $minutesRemaining . ' 分</span>';
}

// 詳細を完了
echo '</h2>';

// 入札用フォームの作成開始
if ($status == 'open') {
	
	// ヘッダーを表示
	echo '<h3>このアイテムの入札</h3>
	<p>このアイテムに入札するには$<span id="currentSpan">' .  $currentPrice . '</span>を超える価格を入力してください。</p>';

	// ユーザーがログインしている場合にはフォームを表示
	if (isset($_SESSION['userId'])) {
		echo '<form action="view.php" method="post" id="bidForm">
		<label>入札</label>
		<input name="bid" id="bid" type="text">
		<br>
		<input class="button" type="submit" value="入札">
		<input type="hidden" name="itemId" id="itemId" value="' . $itemId . '">
		<input type="hidden" name="currentHidden" id="currentHidden" value="' . $currentPrice . '">
	</form>';
	} else { // ログインしていない
		echo '<p class="caution">入札するには<a href="login.php">ログイン</a>してください。</p>';
	}
	
	// JavaScriptを作成
	echo '<script>
		var itemId = ' . $itemId . ';
		var currentPrice = ' . $currentPrice . ';
		var minutesRemaining  = ' . $minutesRemaining . ';
	</script>
	<script src="js/view.js"></script>';

} else { // 終了している！
	echo '<p class="caution">このオークションは今終了しました。</p>
	<h2>最終価格： $' . $currentPrice .'</h2>';
}

// 入札を表示
// クエリを作成
$q = "SELECT bid, IF($bidTz > DATE_SUB(UTC_TIMESTAMP(), INTERVAL 24 HOUR), DATE_FORMAT($bidTz,'%l:%i %p'), DATE_FORMAT($bidTz,'%M %D @ %l:%i %p')) FROM bids WHERE itemId=$itemId ORDER BY bids.bid DESC";
$r = mysqli_query ($dbc, $q) or trigger_error("Query: $q\n<br />MySQL Error: " . mysqli_error($dbc));

// ヘッダーを出力
echo "<h3>現在の入札</h3>
<p id=\"refreshMessage\"><a href=\"view.php?itemId=" . $itemId . "\">更新するにはページを再読み込みしてください。</a></p>
<table>
	<caption>このアイテムに関するすべての入札（降順）</caption>
	<thead><tr><th>Bid</th><th>日付け</th></tr></thead>
	<tbody id=\"tableBody\">
";

// 結果をループ処理
while (list ($bid, $bidDate) = mysqli_fetch_array($r, MYSQLI_NUM)) {
	
	// 列を出力
	echo "<tr><td>\$$bid</td><td>$bidDate</td></tr>\n";
		
}

// 後始末
mysqli_free_result($r);
mysqli_close($dbc);

// テーブルを完了
echo '</tbody>
</table>';

// 時刻に関する注意を追加
if (isset($_SESSION['timezone'])) {
	echo '<p>表示時間はすべて、みなさんの選択されたタイムゾーンが反映されています。</p>';
} else {
	echo '<p>表示時間はすべてUniversal Coordinated Timeです。ご自分のタイムゾーンで表示したい場合には<a href="login.php">ログイン</a> してください。</p>';
}

// フッターをインクルード
include ('includes/footer.html'); 
?>