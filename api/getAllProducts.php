<?php
header('Access-Control-Allow-Origin: *');
require_once __DIR__ . "/vendor/autoload.php";
class_alias("\RedBeanPHP\R", "\R");
R::setup( 'mysql:host=95.174.102.106;dbname=kamaz', 'remote', 'yaDumalPass');
echo json_encode(R::findAll("products", "WHERE cat = ?", [$_GET['cat']]), JSON_UNESCAPED_UNICODE);
?>