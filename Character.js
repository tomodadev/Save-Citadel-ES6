export default class Character {
  name;
  episode;
  gender;
  image;
  rank;
  color;

  constructor(name, episode, gender, image) {
    this.name = name;
    this.episode = episode;
    this.gender = gender;
    this.image = image;

    this.calculateColorAndRank();
  }

  calculateColorAndRank() {
    const power = parseInt(this.episode.slice(-2).replaceAll("/", ""));
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

  attack(character) {
    if (this.episode < character.episode) {
      console.log(this.name, "Win");
    } else {
      console.log(this.name, "Lose");
    }
  }
}
