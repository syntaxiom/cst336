<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, DELETE");
    session_start();
    
    include '_db_connection.php';

    
    $binder = json_decode(file_get_contents("php://input"), TRUE);
    
    if ($_SERVER['REQUEST_METHOD'] === 'GET'){

        if (!isset($_SESSION['username'])) {
    
            echo "false";
            return;
        
        }
        
        $arr = array(
            "username" => $_SESSION['username']
        );
    
        echo json_encode($arr);
        return;
        
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        if (isset($binder["action"])){
            $_SERVER['REQUEST_METHOD'] = strtoupper($binder["action"]);
            unset($binder["action"]);
        } else {
            
            $conn = get_database_connection("store");
            
            $sql = "SELECT username FROM shadow_admin WHERE username = :username AND `password` = SHA1(:password);";
            
            $stmt = $conn->prepare($sql);
            $stmt->execute($binder);
            $records = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if (isset($records['username'])){
                $_SESSION["username"] = $records["username"];
            }
        
            echo json_encode($records);
            return;
        }
        
    }
    
    if ($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        
        session_destroy();
        echo "true";
        
    }
    
?>