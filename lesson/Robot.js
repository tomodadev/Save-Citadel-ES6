export default class Robot {
  constructor(name, hp = 100) {
    console.log("thank  you for  creating  me  master. my name is", name);
    this.name = name;
    this.hp = hp;
  }

  sayHi() {
    console.log("Hi, my name  is", this.name);
  }

  fly() {
    console.log(this.name, "  cannot  fly");
  }
}
