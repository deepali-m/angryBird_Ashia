class Bird extends Base_Class{
    constructor(x, y) {
      super(x, y, 50, 50);
      this.image = loadImage("Sprites/bird.png");
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }