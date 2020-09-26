<?php

// テキスト
// echo 'AVAILABLE';
// echo "ラリー| ウルマン | sample@example.com";

// XML
/*
$dbc = mysqli_connect('localhost','root','root','myDB') or die('Error connecting to MySQL server');
header('Content-Type:text/xml');
echo '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>';
echo '<comments>';
$q = 'SELECT id, comment, email, date_submitted FROM comments ORDER BY date_submitted DESC';
$r = mysqli_query($dbc, $q);
while ($row = mysqli_fetch_array($r)) {
	echo "<record>";
	echo "<id>" . $row['id'] . "</id>";
	echo "<comment>" . $row['comment'] . "</comment>";
	echo "<email>" . $row['email'] . "</email>";
	echo "<date>" . $row['date_submitted'] . "</date>";
	echo "</record>";
}
echo '</comments>';
*/

// JSON
$dbc = mysqli_connect('localhost','root','root','myDB') or die('Error connecting to MySQL server');
header('Content-Type:text/json');
$data = array();
$q = 'SELECT id, comment, email, date_submitted FROM comments ORDER BY date_submitted DESC';
$r = mysqli_query($dbc, $q);
while ($row = mysqli_fetch_array($r)) {
	$data[] = $row;
}
echo json_encode($data);
?>