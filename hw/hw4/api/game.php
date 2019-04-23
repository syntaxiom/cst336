<?php

include '../../../inc/dbConnection.php';
$conn = getDatabaseConnection("games");

$arr = array();
$arr[":title"] = $_GET["title"];
$arr[":quantity"] = 0;
$sql = "";
$game = null;

function selectGame() {
    $sql = "SELECT * FROM game_selects WHERE game_selects.title = :title";
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);   
    $game = $stmt->fetch(PDO::FETCH_ASSOC);
}

selectGame();

if ($game == null) {
    $sql = "INSERT INTO `game_selects` (`id`, `title`, `quantity`) VALUES (NULL, :title, 0);";
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
    selectGame();
}

$arr[":quantity"] = $game[":quantity"] + 1;

$sql = "UPDATE game_selects
        SET quantity = :quantity
        WHERE game_selects.title = :title";
$stmt = $conn->prepare($sql);
$stmt->execute($arr);

selectGame();

echo json_encode($game);

?>