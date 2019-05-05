<?php
    header("Access-Control-Allow-Origin: *");
    function get_database_connection($dbname) {
    
        $host = "us-cdbr-iron-east-03.cleardb.net";
        $username = "bf9749165752e5";
        $password = "d31bd484";
        $dbname = "heroku_99567faf01a9180"; // should probably change this later
        
        //          user            pass        host                            something else
        // mysql://bf9749165752e5:d31bd484@us-cdbr-iron-east-03.cleardb.net/heroku_99567faf01a9180?reconnect=true
        // go into heroku settings and click 'reveal config vars'
        // in the box below 'CLEARDB_DATABASE_URL' add 'FINAL_DATABASE_URL' and set it equal to the above string (starting with mysql)
        
        
        //checks whether the URL contains "herokuapp" (using Heroku)
        if(strpos($_SERVER['HTTP_HOST'], 'herokuapp') !== false) {
           $url = parse_url(getenv("CLEARDB_DATABASE_URL")); //
           $host = $url["host"];
           $dbname = substr($url["path"], 1);
           $username = $url["user"];
           $password = $url["pass"];
        }
        
        $dbConn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $dbConn -> exec("SET CHARACTER SET utf8");
        $dbConn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
        
        return $dbConn;
    }
?>