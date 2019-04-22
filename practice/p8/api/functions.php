<?php

include '../../../inc/dbConnection.php';
$conn = getDatabaseConnection("poll");

$arr = array();
$arr[":option1"] = $_GET["option1"];
$arr[":option2"] = $_GET["option2"];
$arr[":option3"] = $_GET["option3"];
$arr[":option4"] = $_GET["option4"];
$arr[":option5"] = $_GET["option5"];

$sql = "UPDATE poll_response
        SET option1 = :option1,
        option2 = :option2,
        option3 = :option3,
        option4 = :option4,
        option5 = :option5
        WHERE poll_response.pollId = 'q1'";

$stmt = $conn->prepare($sql);
$stmt->execute($arr);

$sql = "SELECT * from poll_response WHERE poll_response.pollId = 'q1'";

$stmt = $conn->prepare($sql);
$stmt->execute();

$records = $stmt->fetch(PDO::FETCH_ASSOC);
echo json_encode($records);

?>