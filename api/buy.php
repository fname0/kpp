<?php
header('Access-Control-Allow-Origin: *');
require_once __DIR__ . "/vendor/autoload.php";
class_alias("\RedBeanPHP\R", "\R");
R::setup( 'mysql:host=95.174.102.106;dbname=kamaz', 'remote', 'yaDumalPass');
$order = R::dispense('orders');
$order->products=$_GET['products'];
$order->productscount=$_GET['count'];
$order->productspricesum=$_GET['sum'];
$order->fio=$_GET['fio'];
$order->phone=$_GET['phone'];
$order->whats=$_GET['whats'];
$order->completed=false;
R::store($order);
?>