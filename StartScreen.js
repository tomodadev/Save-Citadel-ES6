import Game from "./Game.js";
import Screen from "./Screen.js";

export default class StartScreen extends Screen {
  game;
  constructor(id) {
    super(id);

    this.game = new Game();
    this.playBtn = document.getElementById("playBtn");
    this.playBtn.onclick = this.playClicked.bind(this);
  }

  playClicked() {
    console.log("play clicked", this);
    this.hide();
    this.game.chooseScreen.show();
    this.game.chooseScreen.populate();
  }

  helpClicked() {
    console.log("play clicked", this);
    this.hide();
    this.game.chooseScreen.show();
    this.game.chooseScreen.populate();
  }
}
