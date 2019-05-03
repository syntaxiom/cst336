<?php
    session_start();
    
    include '_db_connection.php';
    $conn = get_database_connection("store");


    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        
        $binder = array();

        $binder["search"] = "%".$_GET["search"]."%";
        
        $limit = (int)$_GET["limit"];
        $limit = isset($limit) && $limit != 0 ? " LIMIT ".$limit : "";
        
        $dir = $_GET["order"];
        $dir = isset($dir) && strtolower($dir) == "asc" ? "ASC" : "DESC";
        
        $ord = $_GET["sortby"];
        $ord = isset($ord) && strtolower($ord) == "name" ? "name" : "market_value";
        
        $cat = $_GET["category"];
        $catsql = null;
        if (isset($cat) && (int)$cat > 0){
            $cat = (int)$cat;
            $maxbit = (int)(log($cat) / log(2)) + 1;
            $catarray = array();

            
            for ($i = 0; $i < $maxbit; $i++){
                echo pow(2, $i);
                if ($cat & pow(2, $i)){
                    echo " push";
                    array_push($catarray, $i+1);
                }

            }
            
            if (count($catarray) > 0){
                $catsql = "AND category IN (" . implode(", ", $catarray) . ")";
                
            }
        }

        $fromsql = null;
        $from = $_GET["from"];
        if (isset($from)){
            $binder["from"] = (float)$from;
            $fromsql = "AND market_value >= :from";
        }
        
        $tosql = null;
        $to = $_GET["to"];
        if (isset($to)){
            $binder["to"] = (float)$to;
            $tosql = "AND market_value <= :to";
        }
    
        $extrasql = implode(" ", array_merge(array(""), array_filter(array($namesql, $catsql, $fromsql, $tosql)), array("")));

        
        $sql = "SELECT * FROM companies WHERE name LIKE :search".$extrasql." ORDER BY ".$ord." ".$dir.$limit;

        $stmt = $conn->prepare($sql);
        $stmt->execute($binder);
    
        $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($records);
        
        return;
    
    }
    
    if (!isset($_SESSION['username'])) {
        
            echo "false";
            return;
        
        }

    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        
        

        $binder = array();
        parse_str(file_get_contents("php://input"), $binder);

        $sql = "INSERT INTO companies (name, category, image, market_value, ceo, country, headquarters, description) VALUES (:name, :category, :image, :market_value, :ceo, :country, :headquarters, :description);";
        $stmt = $conn->prepare($sql);
        $stmt->execute($binder);
        
        echo "true";
        
        return;
    
    } else if ($_SERVER['REQUEST_METHOD'] === 'PATCH'){


        $binder = array();
        parse_str(file_get_contents("php://input"), $binder);

        $sql = "UPDATE companies SET
            name = :name,
            category = :category,
            image = :image,
            market_value = :market_value,
            ceo = :ceo,
            country = :country,
            headquarters = :headquarters,
            description = :description
        WHERE
            compId = :id;";

        $stmt = $conn->prepare($sql);
        $stmt->execute($binder);
        
        echo "true";
        
        return;
        
    } else if ($_SERVER['REQUEST_METHOD'] === 'DELETE'){

        $binder = array();
        parse_str(file_get_contents("php://input"), $binder);

        $sql = "DELETE FROM companies WHERE compId = :id;";

        $stmt = $conn->prepare($sql);
        $stmt->execute($binder);
        
        echo "true";
        
        return;
        
    }
    
?>