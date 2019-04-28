<!DOCTYPE html>
<html>
    <head>
        <title> View Favorites </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <style>
            body {
                text-align: center;
                font-family: monospace;
                color: blue;
            }
            img {
                border-radius: 20px;
                padding:15px;
            }
            .favorite{
                cursor: pointer;
            }
            .buttonstyle{
                background-color:#42e5bc;
                border: none;
                color: blue;
                padding: 10px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                
                font-family: monospace;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 9px;
            }
            .jumbo{
                /*background-color: #42e5bc;*/
                background-image: url("img/banner.jpg");
                border-radius: 20px;
                padding-top: 20px;
                padding-bottom: 20px;
            }
            .letters{
                background-color:white;
                padding-top: 5px;
                padding-bottom: 5px;
            }
        </style>
        
        <script>
        /*global $*/
            function displayFavorites(keywordLink) {
                
               // alert($(keywordLink).html());
               var keyword = $(keywordLink).html();
               //alert(keyword);
               
                $.ajax({
                    method: "get",
                       url: "api/favoritesAPI.php",
                  dataType: "json",
                      data: {
                              "action": "favorites",
                             "keyword": keyword
                            },
                    success: function(data, status) {
                        //alert(data[0].keyword);
                        
                         $("#favorites").html("");
                          data.forEach(function(i){
                            
                           $("#favorites").append("<img width='200' src='" + i.imageURL+ "'> ");
                            
                        });
                        
                        
                    },
                    complete: function(data, status) { //optional, used for debugging purposes
                     // alert(status);
                    }
                  });//ajax
            
               
               
               
               
               
                
            }
        
        
            $(document).ready(function(){
            
                $.ajax({
                    method: "get",
                       url: "api/favoritesAPI.php",
                  dataType: "json",
                      data: {
                             "action": "keyword",
                            },
                    success: function(data, status) {
                        //alert(data[0].keyword);
                        
                        data.forEach(function(i){
                            
                           // $("#keywords").append("<a onclick='displayFavorites(this)' href='#'>" + i.keyword+ "</a> ");
                            
                            
                             $("#keywords").append("<a class='favorites'  href='#'>" + i.keyword+ "</a> ");
                            
                            
                        });
                        
                        
                    },
                    complete: function(data, status) { //optional, used for debugging purposes
                      //alert(status);
                    }
                  });//ajax
                  
                  
                  $("#keywords").on("click", ".favorites", function(){
                      
                      displayFavorites(this);
                      
                  });
            
            });//documentReady
            
        </script>
        
    </head>
    <body>

           <div class="jumbo">
                <h1 class="letters"> Pixabay Image Search </h1>    
           </div><br><br>
            
            <div>
                <form action="index.html">
                    <button class="buttonstyle"> Back to Search </button>
                </form>
            </div><br>
            
            <div id="keywords"></div>
            
            
            <div id="favorites"></div>

    </body>
    
    
</html>