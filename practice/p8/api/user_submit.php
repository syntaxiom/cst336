<?php

include '../../../inc/dbConnection.php';
$conn = getDatabaseConnection("poll");

$arr = array();
$arr[":option"] = $_GET["option"];

$sql = "SELECT :option from poll_response WHERE poll_response.pollId = 'q1'";

$stmt = $conn->prepare($sql);
$stmt->execute($arr);

$records = $stmt->fetch(PDO::FETCH_ASSOC);
$amount_object = (int)$records[$arr[":option"]] + 1;

$sql = "UPDATE poll_response SET :option = " . $amount_object . " WHERE poll_response.pollId = 'q1'";

$stmt = $conn->prepare($sql);
$stmt->execute($arr);

$sql = "SELECT :option FROM poll_response WHERE poll_response.pollId = 'q1'";
       
$stmt = $conn->prepare($sql);
$stmt->execute($arr);

$records = $stmt->fetch(PDO::FETCH_ASSOC);
echo json_encode($records);

?>