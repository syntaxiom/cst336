/*global $*/

const tax = 0.1;
let taxAmount = 0;
let taxPrice = 0;

let productPrice = 0;
let totalPrice = 0;
let discountPercent = 0;
let discountAmount = 0;
let discountPrice = 0;

let firstProduct;
let firstProductQuantity = 1;
let extraProduct;
let extraProductPrice = 0;
let extraProductQuantity = 1;

function updateTotalPrice() {
  totalPrice = firstProductQuantity * productPrice;
  totalPrice += extraProductQuantity * extraProductPrice;
  $("#product-total").html('$' + totalPrice.toFixed(2))
}

function updateSubtotal() {
  discountAmount = totalPrice * discountPercent;
  discountPrice = totalPrice - discountAmount;
  totalPrice = discountPrice;
  
  $("#discount").html((discountPercent * 100) + '%');
  $("#discount-amount").html('$' + discountAmount);
  $("#subtotal").html('$' + discountPrice.toFixed(2));
}

function updateTotal() {
  taxAmount = totalPrice * tax;
  taxPrice = totalPrice + taxAmount;
  
  $("#tax").html('$' + taxAmount.toFixed(2));
  $("#total").html('$' + taxPrice.toFixed(2));
}

function updateEverything() {
  $("#product-total").text("$" + (productPrice * firstProductQuantity));
  $("#extra-product-price").text("$" + extraProductPrice.toFixed(2));
  $("#extra-product-total").text("$" + (extraProductPrice * extraProductQuantity).toFixed(2));
  updateTotalPrice();
  updateSubtotal();
  updateTotal();
}

$(window).on('wheel', function(event){
    let current = $(document.activeElement);
    if (!current.is("#product-quantity,#extra-product-quantity")){
        current = $("#product-quantity:hover,#extra-product-quantity:hover");
        if (current.length == 0){
            return;
        }
    };
    
    if (current.val() == ""){
        return;
    }
    let value = parseFloat(current.val());
    
    current.val(value + event.originalEvent.deltaY);
    return false;

});
$(document).ready(function () {
  $.ajax({

    type: "GET",
    url: "api/getRandomProduct.php",
    dataType: "json",
    success: function(data,status) {
      const product = data[0];
      $("#product-name").html(product.productName);
      $("#product-modal-name").html(product.productName);
      $("#product-description").html(product.productDescription);
      $("#product-image").attr("src", product.productImage);
      $("#product-price").html('$' + product.productPrice);
      
      firstProduct = product;
      productPrice = Number(product.productPrice)
      
      for (let i = 1; i<data.length; i++){
        $("#extra-products").append(
          $("<option></option>").text(data[i].productName).attr("value", data[i].productPrice));
      }
      
      // productPrice = product.price;
      updateEverything();
      
      // console.log(data);
      // console.log(status);
    },
    complete: function(data,status) { //optional, used for debugging purposes
    }

  });
  
  updateSubtotal();
    
  $("#product-quantity").change(function() {
    firstProductQuantity = Number($("#product-quantity").val())
    updateEverything();
  });
  
   $("#extra-product-quantity").change(function() {
    extraProductQuantity = Number($("#extra-product-quantity").val())
    updateEverything();
  });
  
  $("#extra-products").change(function() {
    extraProductPrice = Number($("#extra-products").val())
    updateEverything();
  });

  $("#promo-code").change(function() {
    $.ajax({

      type: "GET",
      url: "api/applyPromoCode.php",
      dataType: "json",
      data: {"code": $("#promo-code").val()},
      success: function(data,status) {
        discountPercent = Number(data[0]["discount"])/100;
        $("#expiry").text("Expiry: " + data[0]["expirationDate"]);
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

