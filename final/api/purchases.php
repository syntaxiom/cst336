<?php
    session_start();
    
    include '_db_connection.php';
    $conn = get_database_connection("store");
    
    $binder = json_decode(file_get_contents("php://input"), TRUE);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $sql = "INSERT INTO purchases (productId, unitPrice, purchaseDate) VALUES (:productId, :unitPrice, :purchaseDate)";
    
        $stmt = $conn->prepare($sql);
        $stmt->execute($binder);
    
        echo "true";
        return;
    
    }
    
    if (!isset($_SESSION['username'])) {
        
            echo "false";
            return;
        
        }

    if ($_SERVER['REQUEST_METHOD'] === 'GET'){

        $sql = "SELECT * FROM purchases;";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        
        $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($records);
        
        return;
    
    }
    
?>