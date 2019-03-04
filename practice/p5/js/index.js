const endPoint = "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=oHg5SJYRHA0";

callAjax(null, onLikeDislike);

$("#like").click(function() {
  toggleButton("like", "cancel_like");
  
});

$("#dislike").click(function() {
  toggleButton("dislike", "cancel_dislike");
});

$("#cancel_like").click(function() {
  toggleButton("cancel_like", "like");
  
});

$("#cancel_dislike").click(function() {
  toggleButton("cancel_dislike", "dislike");
});

$("#comments").click(function() {
  callAjax("comments", onComments);
})

function callAjax(action, func) {
  $.ajax({
    type: "get",
    url: endPoint + (action ? "&action=" + action : ''),
    dataType: "json",
    success: func,
    complete: function (data, status) {
      //alert(status);
    }
  });
}

function onComments(data) {
  for (let i of data){
    let to_add = $("<div></div>").addClass("card m-2 my-4");
    to_add.append(
      $("<div></div>").addClass("card-body").append(
        $("<h5></h5>").addClass("card-title").text(i.author)
      ).append(
        $("<h6></h6>").addClass("card-subtitle").text(i.date)
      ).append(
        $("<p></p>").addClass("card-text").text(i.comment)
      )
      );
    $("#comment-value").append(to_add);
  }
  

  console.log(data);
}

function onLikeDislike(data) {
  $("#like-value").text(data.likes);
  $("#dislike-value").text(data.dislikes);
  $("#ratio").css("width", (1 - (Number(data.dislikes) / Number(data.likes))) * 100 + "%")
  console.log(data);
}

function toggleButton(action, auxClass) {
  let selector = "#" + action;

  $(selector).css("display", "none");
  $("#" + auxClass).css("display", "block");

  callAjax(action, onLikeDislike);
}
