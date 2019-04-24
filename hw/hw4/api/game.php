<?php
header("Access-Control-Allow-Origin: *");

include '../../../inc/dbConnection.php';
$conn = getDatabaseConnection("games");

$arr = array();
$arr[":title"] = $_GET["title"];

$sql = "SELECT * FROM game_selects WHERE title = :title";

$stmt = $conn->prepare($sql);
$stmt->execute($arr);
$records = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$records) {
    $sql = "INSERT INTO game_selects (`id`, `title`, `quantity`) VALUES (NULL, :title, 1)";
} else {
    $count = $records["quantity"] + 1;
    $sql = "UPDATE game_selects
        SET quantity = " . $count . " 
        WHERE title = :title";
}

$stmt = $conn->prepare($sql);
$stmt->execute($arr);

$sql = "SELECT * FROM game_selects WHERE title = :title ";

$stmt = $conn->prepare($sql);
$stmt->execute($arr);
$records = $stmt->fetch(PDO::FETCH_ASSOC);

echo json_encode($records);

?>