$(document).ready(function () {
  $("#get-product").click(function () {
    $.ajax({

      type: "GET",
      url: "api/getRandomProduct.php",
      dataType: "json",
      success: function(data,status) {
        console.log(data);
        console.log(status);
      },
      complete: function(data,status) { //optional, used for debugging purposes
        console.log(data);
        console.log(status);
      }

    })
  });
});

