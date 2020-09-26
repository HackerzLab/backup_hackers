<?php # Script 13.3 - login.php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<item>';

if (isset($_GET['id']) && ($_GET['id'] == 'view')) {
	echo '<title>ビュー　コンポーネント</title>
		<content>ビュー ビュー ビュー Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</content>';
} else if (isset($_GET['id']) && ($_GET['id'] == 'controller')) {
	
	echo '<title>コントローラ　コンポーネント</title>
		<content>コントローラ コントローラ コントローラ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</content>';
} else if (isset($_GET['id']) && ($_GET['id'] == 'model')) {
	
	echo '<title>モデル　コンポーネント</title>
		<content>モデル モデル モデル Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</content>';
}
echo '</item>';
?>