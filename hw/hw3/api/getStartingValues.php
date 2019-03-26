<?php

$values = array();

$values["generalMultiplierCost"] = 1;
$values["speedReductionCost"] = 10;
$values["suitMultiplierCost"] = 100;

$stacked_multipliers = array();

$stacked_multipliers["generalMultiplier"] = 2;
$stacked_multipliers["speedReduction"] = 5;
$stacked_multipliers["suitMultiplier"] = 10;

array_push($values, $stacked_multipliers);

echo json_encode($values);

?>