<?php

$bonuses = array();

for ($i = 0; $i < 100; $i++) {
    if ($i < 85) {
        $bonuses[$i] = 1;
    }
    elseif ($i < 95) {
        $bonuses[$i] = 10;
    }
    elseif ($i < 97) {
        $bonuses[$i] = 100;
    }
    else {
        $bonuses[$i] = 1000;
    }
}

echo json_encode($bonuses[rand(0, 99)]);

?>