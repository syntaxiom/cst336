const colors = ['#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6', '#4fc3f7', '#4dd0e1', '#4db6ac', '#81c784', '#fff176', '#ffd54f', '#ffb74d', '#ff8a65'];

let app = new Vue({
  el: '#app',
  data: {
    currentGame: {}
  },
  methods: {
    async getAllGames() {
      return fetch('https://itch.io/games.xml')
        .then((response) => {
          return response.text();
        })
        .then((response) => {
          return xml2js(response, {compact: true}).rss.channel.item;
        });
    },
    updateText() {
      document.getElementById('game-title-text').innerHTML = this.currentGame.plainTitle._text;
      document.getElementById('thumbnail').src = this.currentGame.imageurl._text;

      if (this.currentGame.description._cdata) {
        document.getElementById('game-description-text').innerHTML = this.currentGame.description._cdata;
      }
      else {
        document.getElementById('game-description-text').innerHTML = "((No description provided))";
      }
      
      document.getElementById('game-price-text').innerHTML = this.currentGame.price._text;
    },
    async getNewGame() {
      this.currentGame = _.sample(await this.getAllGames());
      this.currentGame.description._cdata = this.currentGame.description._cdata.split("\n")[0];
      this.updateText();
      document.getElementById('app').setAttribute('style', 'background-color: ' + _.sample(colors));
      this.addToHistory();
      console.log(this.currentGame);
    },
    goToGamePage() {
      window.location.href = this.currentGame.link._text;
    },
    addToHistory() {
      $.ajax({
            type: "GET",
            url: "api/game.php",
            dataType: "json",
            data: {"title": this.currentGame.plainTitle._text},
            success: function(data, status) {
                console.log(data);
                $("#quantity").text(data.quantity);
            },
            complete: function(data,status) {
                console.log(status);
            }
        });
    }
  },
  async beforeMount() {
    await this.getNewGame();
  }
})