<?php
    header("Access-Control-Allow-Origin: *");
    
    if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
        return;
    }
    
    include './dbConnection.php';
    $conn = getDatabaseConnection("store");
    $sql = "SELECT catId, catName, catDesc FROM categories ORDER BY catName";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($records);
?>