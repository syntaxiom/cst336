<?php

$code = $_GET['code'];

$promoCodes = array();
$promoCodes["getFifty"] = 0.5;
$promoCodes["halfPrice"] = 0.5;
$promoCodes["sand30"] = 0.3;
$promoCodes["spring30"] = 0.3;
$promoCodes["beach"] = 0.2;
$promoCodes["sunny"] = 0.2;

echo json_encode($promoCodes[$code]);

?>