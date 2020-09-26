<?php # Script 13.3 - login.php

header('Content-Type: application/json');

if ( isset($_GET['term'])){
	
    echo json_encode([$_GET['term']]);
}
?>