/*global $*/

let wordId;
let wordLength;
let word = [];
let lettersGuessed = [];
let unguessed = 0;
const FAILS_MAX = 6;
let fails = 0;

function resetEverything() {
    word = [];
    lettersGuessed = [];
    fails = 0;
    getWord();
    
    $("#feedback").text("");
    $("#feedback").removeClass();
    
    $("#letter").prop("disabled", false);
    $("#submit").prop("disabled", false);
    checkfails();
}

function renderWord() {
    $("#word-placeholders").text(word.join(' '));
    $("#letters-guessed").text(lettersGuessed.join(' '));
}

function getWord(){
            
    //Ajax call to get the word_id and its length from the database 
    $.ajax({
        type: "GET",
        url: "api/get_word_api.php",
        dataType: "json",
        data: { },
        success: function(data, status) {
            wordId = data.word_id;
            wordLength = Number(data.length);
            unguessed = wordLength;
            
            for (let i = 0; i < wordLength; i++) {
                word.push('_');
            }
            
            renderWord();
            // $("#wordId").val(data.word_id);
        },
        complete: function(data,status) {
            
        }
    });//ajax
}

function end(text, color) {
    $("#feedback").text(text);
    $("#feedback").addClass(color);
    
    $("#letter").prop("disabled", true);
    $("#submit").prop("disabled", true);
}

function checkfails(){
    if (fails >= FAILS_MAX) {
        end("You Lose!", "text-danger");
    }
    
    $("#hangImg").attr("src", `img/stick_${Math.min(fails, FAILS_MAX)}.png`);
    
}
$(document).ready(function(){
      //getWord Function gets the random word from the database.    
    getWord();
    
    $("#new-word").click(function() {
        resetEverything();
    });

    //Ajax call to check the letter in the selected word  
    $("#submit").click( function(){  
        
        let letter = $("#letter").val().toLowerCase();
        
        if (lettersGuessed.includes(letter)){
            return;
        }
        
        $("#letter").val("");
        lettersGuessed.push(letter);

        $.ajax({
            type: "get",
            url: "api/check_word.php",
            data: {
                "id": wordId,
                "letter": letter
            },
            success: function(data,status) {
                
                let newData = JSON.parse(data);
                
                if (!newData.length){
                    fails++;
                    checkfails();
                }
                else {
                    unguessed -= newData.length;
                    
                    for (let i of newData){
                        word[i] = letter;
                    }
                }
                
                renderWord();
                
                if (unguessed <= 0) {
                    end("You Win!", "text-success");
                }
            },
            complete: function(data,status) {
                
            }
          });//AJAX  
     } );//username changes
 
})