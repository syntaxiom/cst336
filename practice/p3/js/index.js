const imageArray = ['cherry', 'grapes', 'seven'];
const winningAmount = [100, 300, 500];
let totalWinnings = 0;

function setsWinnings(){
  $("#total-winnings").text(totalWinnings);
}

setsWinnings();

$("#play").click(function() {
  let chosenImages = {};

  for (let i = 0; i < 3; i++) {
    let slotId = `#slot-${i+1}`;
    let randomIndex = Math.floor(Math.random() * imageArray.length);
    let randomImage = imageArray[randomIndex];
    chosenImages[randomImage] = winningAmount[randomIndex];

    $(slotId).css("display", "inline");
    $(slotId).attr("src", `img/${randomImage}.png`);
  }

  if (Object.keys(chosenImages).length == 1) {
    $("#winning-audio").trigger('play');
    $("#result").text('JACKPOT!!');
    let amount = Object.values(chosenImages)[0];
    $("#winnings").text("You Won $" + amount);
    totalWinnings += amount;
  } else {
    $("#result").text('Try Again!');
    $("#winnings").text('');
  }

  setsWinnings();
})