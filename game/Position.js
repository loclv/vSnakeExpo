export default class Position {
  y = 0;
  x = 0;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  random = () => {
    return new Position(
      Math.floor(this.x * Math.random()),
      Math.floor(this.y * Math.random()),
    );
  };
  add = pos => {
    this.x += pos.x;
    this.y += pos.y;
    return this;
  };
}
