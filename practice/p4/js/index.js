let totals = [0, 0, 0];

let shipping = 0;
let subTotal = 0;
const tax = 0.1;
let total = 0;

function totalsUpdate() {
  subTotal = totals[0] + totals[1] + totals[2] + shipping;
  let taxedAmount = subTotal * tax;
  total = subTotal + taxedAmount;
  $("#tax").html("$" + taxedAmount);
  $("#subtotal").html("$" + subTotal);
  $("#total").html("$" + total);
}

$("#quantity-1").change(function() {
  let amount = Number($("#quantity-1").val());
  let price = 30;
  totals[0] = amount * price;
  totalsUpdate()
  $("#total-1").html("$" + amount * price);
});

$("#quantity-2").change(function() {
  let amount = Number($("#quantity-2").val());
  let price = 10;
  totals[1] = amount * price;
  totalsUpdate()
  $("#total-2").html("$" + amount * price);
});

$("#quantity-3").change(function() {
  let amount = Number($("#quantity-3").val());
  let price = 20;
  totals[2] = amount * price;
  totalsUpdate()
  $("#total-3").html("$" + amount * price);
});

$("#shipping-options").change(function() {
  let index = $("#shipping-options option:selected").index();
  shipping = index * 5;
  totalsUpdate()
  $("#shipping").html("$" + shipping)
});

$("#purchase").click(function() {
  let shippingIndex = $("#shipping-options option:selected").index();
  let confirmed = $("#confirm").is(":checked");

  if (shippingIndex == 0) {
    $("#must-ship").html("A shipping option must be selected")
  }
  else {
    $("#must-ship").html("")
  }

  if (!confirmed) {
    $("#accept").addClass("red");
  }
  else {
    $("#accept").removeClass("red");
  }

  if (shippingIndex > 0 && confirmed) {
    $("#thanks").html("THANK YOU FOR YOUR PURCHASE!");
  }

  console.log(confirmed)
});
