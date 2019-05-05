<?php

 if (!empty($_FILES)) {

    // print_r($_FILES);
    
    // echo "Image size: " . $_FILES['myFile']['size'];
    move_uploaded_file( $_FILES['myFile']['tmp_name'], "gallery/" . $_FILES['myFile']['name']);
    
    if ($_FILES['myFile']['size'] > 1048576){
        echo "What";
    }

}


    function displayImagesUploaded() {

        $images = scandir("gallery"); //returns all file names within a folder
        
        //print_r($images);
        
        for ($i = 2; $i < count($images); $i++) {
            
            echo "<img src='gallery/$images[$i]' width='50' />";
            
        }//for
    
    }//function


?>


<!DOCTYPE html>
<html>
    <head>
        <title> Lab 9: File Upload </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
        <style>
            .super-center {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            img { padding-top: 3em; }
            
            img:hover { width: 250px; }
            
            .input-stuff {
                padding-top: 2em;
            }
            
            .images-row {
                display: flex;
                flex-direction: row;
            }
            
            body {
                background-color: hsl(171, 100%, 41%);
                height: 1080px;
            }
            
        </style>
    </head>
    <body>
        
        
        <div class="super-center">
            <form  method="POST" enctype="multipart/form-data">
            
                <div class="input-stuff">
                    
                    <input class="input is-link" type="file" name="myFile" />
                </div>
                <div class="input-stuff">
                    
                    <button class="button is-link"> Upload File! </button>
                </div>
                
            </form>

            
            <hr>
            <h3 class="has-text-white title is-2"> Images uploaded: </h3>
            
            <!--<div class="images-row">-->
                
                <?= displayImagesUploaded() ?>
            <!--</div>-->
        </div>
        
        <script>
            document.body.style.height = window.innerHeight + 'px'
        </script>
        
    </body>
</html>