<?php
//Used to check the letter the user inputed in the form, and if the letter is in the word
//Should return an array of booleans as the api
include '../../../inc/dbConnection.php';
$conn = getDatabaseConnection("hangman");

$letter = $_GET["letter"];

$a = array(
    "wordId" => (int)$_GET["id"]
    );

$randomNum = mt_rand(1, 7);
$sql = "SELECT word FROM words WHERE word_id = :wordId";
$stmt = $conn -> prepare($sql);  
$stmt->execute($a);

$record = $stmt->fetch(PDO::FETCH_ASSOC); 
$word = $record["word"];

$ret = array();

for($i=0; $i<strlen($word); $i++) {
    if ($word[$i] == $letter){
        array_push($ret, $i);
    }
}

echo json_encode($ret);

?>