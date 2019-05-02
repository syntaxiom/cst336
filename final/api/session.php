<?php
header("Access-Control-Allow-Origin: *");

    session_start();
    
    include '../../inc/dbConnection.php';
    $conn = get_database_connection("store");


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $binder = array(
            "username" => $_POST["username"],
            "password" => $_POST["password"],
        );
    
        $sql = "SELECT username FROM shadow_admin WHERE username = :username AND `password` = SHA1(:password);";
    
        $stmt = $conn->prepare($sql);
        $stmt->execute($binder);
        $records = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (isset($records['username'])){
            $_SESSION["username"] = $records["username"];
        }
    
        echo json_encode($records);
        return;
    } else if ($_SERVER['REQUEST_METHOD'] === 'GET'){

        if (!isset($_SESSION['username'])) {
    
            echo "false";
            return;
        
        }
        
        $arr = array(
            "username" => $_SESSION['username']
        );
    
        echo json_encode($arr);
        return;
        
    } else if ($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        
        session_destroy();
        echo "true";
        
    }
    
?>