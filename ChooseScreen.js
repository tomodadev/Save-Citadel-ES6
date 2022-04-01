import Game from "./Game.js";
import Screen from "./Screen.js";
import { createCharacterDiv } from "./utils/createCharacterDiv.js";

const NUM_CHARACTERS = 20;

export default class ChooseScreen extends Screen {
  game;

  constructor(id) {
    super(id);

    this.game = new Game();
    this.chooseCharacters = document.getElementById("choose-characters");
  }

  populate() {
    console.log(this.game.characters);
    const shuffled = _.shuffle(this.game.characters);
    const characters = _.take(shuffled, NUM_CHARACTERS);
    this.game.shuffledCharacters = shuffled.slice(20);

    for (const character of characters) {
      const div = createCharacterDiv(character, () => {
        this.game.setCurrentPlayer(character);
        this.hide();
        this.game.playScreen.show();
        this.game.playScreen.battle();
      });

      this.chooseCharacters.appendChild(div);
    }
  }
}
