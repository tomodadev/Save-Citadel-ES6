import Game from "./Game.js";
import Screen from "./Screen.js";
import {
  createCharacterDiv,
  createEnemyDiv,
} from "./utils/createCharacterDiv.js";

export default class PlayScreen extends Screen {
  game;

  constructor(id) {
    super(id);

    this.game = new Game();
    this.playScene = document.getElementById("play-scene");
  }

  battle() {
    this.playScene.innerHTML = "";

    const enemy = _.remove(
      this.game.shuffledCharacters,
      (char, index) => index === 0
    )[0];

    const playerDiv = createCharacterDiv(this.game.player);
    this.playScene.appendChild(playerDiv);
    const enemyDiv = createEnemyDiv(
      enemy,
      () => {
        const won = this.game.player.attack(enemy);
        if (won) {
          this.battle();
        } else {
          this.game.life--;
          this.hide();
          this.game.chooseScreen.show();

          // go back to choose screen, minus 1 life
        }
      },
      () => {
        this.battle();
      }
    );
    this.playScene.appendChild(enemyDiv);
  }
}
