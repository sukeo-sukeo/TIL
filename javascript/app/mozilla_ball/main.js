'use strict'

let canvas;
let ctx;
const random = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

class Game {
  constructor(width, height) {
    this.width = width || window.innerWidth;
    this.height = height || window.innerHeight;
    canvas = document.getElementById("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    ctx = canvas.getContext("2d");
  }

  draw(obj) {
    ctx.beginPath();
    ctx.fillStyle = obj.color;
    ctx.arc(obj.x, obj.y, obj.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  createDom(obj) {
    const dom = document.createElement("span");
    dom.style.width = obj.x + 'px';
    dom.style.height = obj.y + 'px';
    document.body.appendChild(dom)
  }

  update(obj) {
    if (obj.x + obj.size >= game.width) {
      obj.velX = -obj.velX;
    }

    if (obj.x - obj.size <= 0) {
      obj.velX = -obj.velX;
    }

    if (obj.y + obj.size >= game.height) {
      obj.velY = -obj.velY;
    }

    if (obj.y - obj.size <= 0) {
      obj.velY = -obj.velY;
    }

    obj.x += obj.velX;
    obj.y += obj.velY;
  }

  createBall(limit, maxSize) {
    let balls = [];
    while (balls.length < limit) {
      let size = random(10, maxSize);
      let ball = new Ball(
        random(0 + size, this.width - size),
        random(0 + size, this.height - size),
        random(-7, 7),
        random(-7, 7),
        "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")",
        size
      );

      balls.push(ball);
    }
    return balls;
  }
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  click() {
    alert('get ball!')
  }
}

const game = new Game()
const balls = game.createBall(50, 100)
// const ball = game.createBall(1, 200)
console.log(balls);
const main = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, game.width, game.height);

  for (let i = 0; i < balls.length; i++) {
    game.draw(balls[i]);
    game.update(balls[i]);
  }


  requestAnimationFrame(main);
}

// main()
// addEventListener("load", main(), false);