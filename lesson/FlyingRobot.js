import Robot from "./Robot";

export default class FlyingRobot extends Robot {
  constructor(...params) {
    super(...params);
  }

  fly() {
    console.log(this.name, "is taking off...");
  }
}
