class Ball {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      restitution: 0.1,
      friction: 0.5,
      density: 1.9,
    };
    this.body = Bodies.rectangle(200, 300, 10, 10, options);
    this.image = loadImage("paper.png");

    World.add(world, this.body);
  }

  display() {
    image(this.image, 1100, 0);
  }
}
