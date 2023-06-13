<?php
header('Access-Control-Allow-Origin: *');
require_once __DIR__ . "/vendor/autoload.php";
class_alias("\RedBeanPHP\R", "\R");
R::setup( 'mysql:host=95.174.102.106;dbname=kamaz', 'remote', 'yaDumalPass');
$products = [];
foreach (explode(",", $_GET['ids']) as $id) {
    array_push($products, R::findOne("products", "WHERE id = ?", [$id]));
}
echo json_encode($products, JSON_UNESCAPED_UNICODE);
?>