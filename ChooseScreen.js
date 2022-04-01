import Game from "./Game.js";
import Screen from "./Screen.js";

export default class ChooseScreen extends Screen {
  game;
  constructor(id) {
    super(id);

    this.game = new Game();
    this.chooseCharacters = document.getElementById("choose-characters");
  }

  populate() {}
}
