<?php echo '<?xml version="1.0" encoding="UTF-8" ?>'."\n" ?>
<!doctype html>
<html lang="js">
<head>
    <meta charset="utf-8">
    <title>別のページ</title>
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="css/styles.css">    
</head>
<body>
<?php echo "別のページ<br>"; ?>
<?php
	echo $_POST['email'] . "<br>";
	echo $_POST['password'];
?>
</body>
</html>
