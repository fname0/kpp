<?php
require_once __DIR__ . "/vendor/autoload.php";
class_alias("\RedBeanPHP\R", "\R");
R::setup( 'mysql:host=95.174.102.106;dbname=kamaz', 'remote', 'yaDumalPass');

$product = R::dispense("products");
$product->title = $_GET['title'];
$product->num = $_GET['num'] != '' ? $_GET['num'] : "-";
$product->price = $_GET['price'];
$product->cat = 'metiz';
$product->out = $_GET['out'];
R::store($product);
?>