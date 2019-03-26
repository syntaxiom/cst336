<?php

$bonuses = array();

array_fill(0, 49, 1);
array_fill(50, 24, 10);
array_fill(75, 12, 100);
array_fill(87, 6, 1000);
array_fill(93, 3, 10000);
array_fill(96, 2, 100000);
array_fill(99, 1, 1000000);

echo json_encode($bonuses[rand(0, count($bonuses))]);

?>