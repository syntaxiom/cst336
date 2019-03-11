const tax = 0.1;
let taxAmount = 0;
let taxPrice = 0;

let productPrice = 0;
let totalPrice = 0;
let discountPercent = 0;
let discountAmount = 0;
let discountPrice = 0;

function updateTotalPrice() {
  totalPrice = $("#product-quantity").val() * productPrice;
  $("#product-total").html('$' + totalPrice)
}

function updateSubtotal() {
  discountAmount = totalPrice * discountPercent;
  discountPrice = totalPrice - discountAmount;
  totalPrice = discountPrice;
  
  $("#discount").html((discountPercent * 100) + '%');
  $("#discount-amount").html('$' + discountAmount);
  $("#subtotal").html('$' + discountPrice);
}

function updateTotal() {
  taxAmount = totalPrice * tax;
  taxPrice = totalPrice + taxAmount;
  
  $("#tax").html('$' + taxAmount);
  $("#total").html('$' + taxPrice);
}

function updateEverything() {
  updateTotalPrice();
  updateSubtotal();
  updateTotal();
}

$(document).ready(function () {
  $.ajax({

    type: "GET",
    url: "api/getRandomProduct.php",
    dataType: "json",
    success: function(data,status) {
      $("#product-name").html(data.name)
      $("#product-price").html('$' + data.price)
      $("#product-quantity").val(data.quantity)
      
      productPrice = data.price;
      updateEverything();
      
      // console.log(data);
      // console.log(status);
    },
    complete: function(data,status) { //optional, used for debugging purposes
    }

  });
  
  updateSubtotal();
    
  $("#product-quantity").change(function() {
    updateEverything();
  });
  
  $("#promo-code").change(function() {
    $.ajax({

      type: "GET",
      url: "api/applyPromoCode.php",
      dataType: "json",
      data: {"code": $("#promo-code").val()},
      success: function(data,status) {
        discountPercent = data;
        updateEverything();
        
        // console.log(data);
        // console.log(status);
      },
      complete: function(data,status) { //optional, used for debugging purposes
      }

    })
  });
  
  $("#get-promo").click(function () {
    $.ajax({

      type: "GET",
      url: "api/applyPromoCode.php",
      dataType: "json",
      data: {"code": "getFifty"},
      success: function(data,status) {
        updateEverything();
        console.log(data);
        console.log(status);
      },
      complete: function(data,status) { //optional, used for debugging purposes
      }

    })
  });
});

