<?php # Script 13.3 - login.php
 if( isset($_POST['name'], $_POST['email'],$_POST['comments'])){
	$to='knagai@himco.jp'; // 宛先
	$subject = 'タイトル';	// 件名
	$body = $_POST['comments'];	// 本文
	$from = $_POST['email'];	// 差出人
	mail($to, $subject, $body, 'From:'.$from);
	echo 'メッセージは送信されました。';
 }



?>