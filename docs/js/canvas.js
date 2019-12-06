$(document).ready(function() {
  const cvs = document.querySelector("canvas");
  const c = cvs.getContext("2d");

  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;

  window.addEventListener("resize", function() {
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
  });

  class Carrot {
    constructor(x, y, offset) {
      this.x = x;
      this.y = y;
      this.offset = offset;
      this.radians = 0;
      this.velocity = 0.01;
      this.img = document.getElementById("carrot-img");
    }

    draw = () => {
      c.drawImage(this.img, this.x, this.y, 60, 80);
      this.update();
    };

    update = () => {
      this.radians += this.velocity;
      this.y = this.y + Math.cos(this.radians + this.offset)*2;
    };
  }

  const carrotArray = [];

  for (let i = 0; i < 200; i++) {
    const start = { x: -250, y: 500 }; 
    const random = Math.random() - 0.5;
    const unit = 25;

    carrotArray.push(
      new Carrot(
        start.x + (unit + random) * i,
        start.y - (i + random) * -3 + -Math.sin(i) * unit,
        0.1 + 1 * i
      )
    );
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    carrotArray.forEach(line => {
      line.draw();
    });
  }

  animate();
});
