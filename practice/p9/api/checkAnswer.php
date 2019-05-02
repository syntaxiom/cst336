<?php

include '../../../inc/dbConnection.php';
$conn = getDatabaseConnection("tcp");

$sql = "";

//receive email and score from the quiz

//1. Get latest score based on email
//2. If record found, first display it in JSON format, then update record
//3. If record not found, insert a new record for that email


?>