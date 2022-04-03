import Game from "./Game.js";
import Screen from "./Screen.js";
import {
  createCharacterDiv,
  createCharacterImage,
} from "./utils/createCharacterDiv.js";

const NUM_CHARACTERS = 20;

export default class ChooseScreen extends Screen {
  game;
  count = 0;

  constructor(id) {
    super(id);

    this.game = new Game();
    this.listOfCharactersEl = document.getElementById("list-of-characters");
    this.chosenCharatersEl = document.getElementById("chosen-characters");
  }

  populate() {
    console.log(this.game.characters);
    const shuffled = _.shuffle(this.game.characters);
    const characters = _.take(shuffled, NUM_CHARACTERS);
    this.game.shuffledCharacters = shuffled.slice(20);

    for (const character of characters) {
      const div = createCharacterImage(character, () => {
        this.pickedCharacter(character);
      });

      this.listOfCharactersEl.appendChild(div);
    }
  }

  pickedCharacter(character) {
    if (this.count === 3) {
      this.game.setChosenCharacters(choosedCharaters);
      this.game.setCurrentCharacter(choosedCharaters[0]);
      console.log(this.game.chosenCharacters);
      this.hide();
      this.game.playScreen.show();
      this.game.playScreen.battle();
    } else {
      this.game.chosenCharacters.push(character);
      this.count++;
    }
  }

  chosenThree() {}
}
