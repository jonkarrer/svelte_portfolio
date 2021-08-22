export function drawRain(canvasElement) {
  let canvas = canvasElement;
  let ctx = canvas.getContext("2d");
  let height;
  let speed;
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerWidth;

  if (window.innerWidth < window.innerHeight) {
    height = 3;
    speed = 10;
  } else {
    height = 10;
    speed = 30;
  }

  class Raindrop {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * 80 - 80;
      this.height = Math.random() * height + 3;
      this.speed = Math.random() * speed + 3;
    }
    update() {
      this.y += this.speed;

      if (this.y + this.height >= canvas.height) {
        this.y = Math.random() * 80 - 80;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.strokeStyle = "#F77F00";
      ctx.lineWidth = 2;
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y + this.height);
      ctx.stroke();
    }
  }

  let rain = [];

  for (let i = 0; i <= 300; i++) {
    rain[i] = new Raindrop();
  }
  init();

  function init() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < rain.length; i++) {
      rain[i].update();
      rain[i].draw();
    }

    requestAnimationFrame(init);
  }
}
