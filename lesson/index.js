import FlyingRobot from "./FlyingRobot";
import Robot from "./Robot";

const gundam = new FlyingRobot("Gundam", 50);
const transformer = new FlyingRobot("Transformer");
const wallE = new Robot("Wall-E");

gundam.sayHi();
gundam.fly();
wallE.fly();
