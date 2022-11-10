class Circle {
  constructor(x, y, d, c, opt) {
    thid.d = d;
    this.c = c;
    this.bodies = Bodies.circle(x, y, this.d * 0.5, opt);
  }

  render() {
    push();
    translate(
      this.bodies.position.x,
      this.bodies.position.y
    );
    rotate(this.bodies.angle);
    fill(this.c);
    circle(0, 0, this.d);
    pop();
  }
}
