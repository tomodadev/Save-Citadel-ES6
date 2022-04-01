import Character from "./Character";

export default class Player extends Character {
  life = 3;
  constructor(...params) {
    super(...params);
  }
}
