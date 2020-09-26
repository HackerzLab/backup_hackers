<?php # index.php
// これはサイトのメインページ。
// 開催中のオークションを一覧表示する

// コンフィグレーションファイルは必ず最初に必要
require('includes/config.inc.php');

// ページタイトルを設定し、HTMLヘッダを読み込む
$page_title = '現在のオークション';
include ('includes/header.html');

// ログ取り用
// $_SESSION = array();

// 現在のオークションを表示
echo '<h1>現在開催中のオークション</h1>
	<p>オークションには終了直前のものや終了したばかりのものも含まれます。 ';
	
if (isset($_SESSION['timezone'])) {
	echo '表示時間はすべて、みなさんの選択されたタイムゾーンが反映されています。';
} else {
	echo '表示時間はすべてUniversal Coordinated Timeです。ご自分のタイムゾーンで表示したい場合には<a href="login.php">ログイン</a> してください。
	';
}

// テーブルの作成開始
echo '</p><table>
	<caption>オークションを見るにはアイテムをクリック</caption>
		<thead><tr><th>アイテム</th><th>開催中</th><th>終了</th></tr></thead>
		<tbody>
';

// データベース接続が必要
require(MYSQL);

// ユーザーがログインし、タイムゾーンを選択している場合には、
// 日付けと時刻を変換して使用
if (isset($_SESSION['timezone'])) {
	$tz = "CONVERT_TZ(dateClosed, 'UTC', '{$_SESSION['timezone']}')";
} else {
	$tz = 'dateClosed';
}

// クエリを作成
$q = "SELECT items.itemId, item, COALESCE(MAX(bid), openingPrice), IF($tz < DATE_ADD(UTC_TIMESTAMP(), INTERVAL 24 HOUR), DATE_FORMAT($tz,'%l:%i %p'), DATE_FORMAT($tz,'%M %D @ %l:%i %p')) FROM items LEFT JOIN bids USING (itemId) WHERE dateClosed > UTC_TIMESTAMP() GROUP BY items.itemId ORDER BY dateClosed ASC";
$r = mysqli_query ($dbc, $q) or trigger_error("Query: $q\n<br />MySQL Error: " . mysqli_error($dbc));
// 各アイテムをリストで表示
while (list($itemId, $item, $price, $dateClosed) = mysqli_fetch_array($r, MYSQLI_NUM)) {
	echo "<tr><td><a href=\"view.php?itemId=$itemId\">$item</a></td><td>\$$price</td><td>$dateClosed</td></tr>\n";
}

// 後始末
mysqli_free_result($r);
mysqli_close($dbc);

// テーブルを完了
echo '</tbody></table>';

// フッターをインクルード
include ('includes/footer.html'); 
?>