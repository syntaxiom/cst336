let app = new Vue({
  el: '#app',
  data: {
    currentGame: {}
  },
  methods: {
    async getAllGames() {
      return fetch('https://itch.io/games/free.xml')
        .then((response) => {
          return response.text();
        })
        .then((response) => {
          return xml2js(response, {compact: true}).rss.channel.item;
        });
    },
    async getNewGame() {
      this.currentGame = _.sample(await this.getAllGames());
      let protocol = this.currentGame.imageurl._text.split("://");
      protocol[0] = protocol[0].slice(0, -1);
      this.currentGame.imageurl._text = protocol.join("://");
    },
    addToHistory() {

    }
  },
  async beforeMount() {
    await this.getNewGame();
    console.log(this.currentGame);
  }
})