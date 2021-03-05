class Log extends Base_Class {
    constructor(x, y, width, height, angle) {
      super(x, y, width, height,angle);
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("Sprites/wood2.png");
    }
  }