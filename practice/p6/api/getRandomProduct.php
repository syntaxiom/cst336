<?php

$products = array();
$p = array();

$p["name"] = "Microfiber Beach Towel";
$p["price"] = 40;
$p["quantity"] = 2;

array_push($products, $p);

$p["name"] = "Sandals";
$p["price"] = 30;
$p["quantity"] = 5;

array_push($products, $p);

$p["name"] = "Sunscreen";
$p["price"] = 25;
$p["quantity"] = 3;

array_push($products, $p);

$p["name"] = "Plastic Flying Disc";
$p["price"] = 15;
$p["quantity"] = 4;

array_push($products, $p);

$p["name"] = "Beach Umbrella";
$p["price"] = 75;
$p["quantity"] = 1;

array_push($products, $p);

echo json_encode($products[rand(0,4)])

?>