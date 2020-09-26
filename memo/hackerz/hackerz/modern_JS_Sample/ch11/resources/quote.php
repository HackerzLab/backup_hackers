<?php # Script 13.3 - quote.php

// Content-Typeの設定
header('Content-Type: application/json');

// cURLの設定
$curl = curl_init('http://www.google.com/finance/info?infotype=infoquoteall&q=AAPL');

// 結果を変数に代入したい
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);

// 閉じる
curl_close($curl);

// 最初の３文字をカット
print substr($result,3);
// print '[{"l":"111,11"}]';

?>