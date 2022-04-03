import Screen from "./Screen.js";
import StartScreen from "./StartScreen.js";
import charactersJSON from "./constants/characters.js";
import Character from "./Character.js";
import ChooseScreen from "./ChooseScreen.js";
import PlayScreen from "./PlayScreen.js";

let instance;

export default class Game {
  life = 3;
  characters;
  boss;
  currentCharacter;
  enemy;
  shuffledCharacters;
  chosenCharacters = [];

  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;
    this.startScreen = new StartScreen("start");
    this.chooseScreen = new ChooseScreen("choose");
    this.playScreen = new PlayScreen("play");
    this.characters = charactersJSON.map((character) => {
      const { id, name, episode, gender, image } = character;
      return new Character(id, name, episode[0], gender, image);
    });

    this.boss = _.remove(
      this.characters,
      (char) => char.id === 74 || char.id === 118 || char.id === 119
    );
  }

  start() {
    this.startScreen.show();
    this.chooseScreen.hide();
    this.playScreen.hide();
  }

  setChosenCharacters(character) {
    this.chosenCharacters = character;
    console.log("chosen characters", this.chosenCharacters);
  }

  setCurrentCharacter(character) {
    this.currentCharacter = this.chosenCharacters[0];
    console.log("current character", this.chosenCharacters[0]);
  }
}
