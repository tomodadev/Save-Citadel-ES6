import Screen from "./Screen.js";
import StartScreen from "./StartScreen.js";
import charactersJSON from "./constants/characters.js";
import Character from "./Character.js";

let instance;

export default class Game {
  characters;
  boss;

  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;
    this.startScreen = new StartScreen("start");
    this.chooseScreen = new Screen("choose");
    this.playScreen = new Screen("play");
    this.characters = charactersJSON.map((character) => {
      const { name, episode, gender, image } = character;
      return new Character(name, episode[0], gender, image);
    });
    this.boss = [
      this.characters[74],
      this.characters[118],
      this.characters[119],
    ];
  }

  start() {
    this.startScreen.show();
    this.chooseScreen.hide();
    this.playScreen.hide();
  }
}
