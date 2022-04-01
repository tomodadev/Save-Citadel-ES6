export default class Character {
  id;
  name;
  episode;
  gender;
  image;
  rank;
  color;
  power;

  constructor(id, name, episode, gender, image) {
    this.id = id;
    this.name = name;
    this.episode = episode;
    this.gender = gender;
    this.image = image;

    this.calculateColorAndRank();
  }

  calculateColorAndRank() {
    const power = parseInt(this.episode.slice(-2).replaceAll("/", ""));
    this.power = 100 - power;
    if (power <= 5) {
      this.rank = "Rickillable";
      this.color = "red";
    } else if (power <= 10) {
      this.rank = "A";
      this.color = "blue";
    } else if (power <= 20) {
      this.rank = "B";
      this.color = "green";
    } else if (power <= 30) {
      this.rank = "C";
      this.color = "orange";
    } else if (power <= 40) {
      this.rank = "garbage";
      this.color = "white";
    } else {
      this.rank = "Jerry";
      this.color = "grey";
    }
  }

  //if win, return true
  attack(character) {
    console.log(this.power, character.power);
    if (this.power === character.power) {
      const random = Math.random();
      if (random < 0.5) {
        console.log(this.name, "Win");
        return true;
      } else {
        console.log(this.name, "Lost");
        return false;
      }
    } else if (this.power > character.power) {
      console.log(this.name, "Win");
      return true;
    } else {
      console.log(this.name, "Lost");
      return false;
    }
  }
}
