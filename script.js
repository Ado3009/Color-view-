'use strict';

document.querySelector('.add-color').addEventListener('input', function (e) {
  document.querySelector('.box').style.backgroundColor =
    document.querySelector('.add-color').value;
  document.querySelector('.box').style.borderColor =
    document.querySelector('.add-color').value;
});

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function AnimateObject(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.dx = dx;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fillStyle = '#B3B7EE';
    c.fill();
  };

  this.update = function () {
    if (x + radius > innerWidth || x - radius < 0) {
      dx = -dx;
    }

    if (y + radius > innerWidth || y - radius < 0) {
      dy = -dy;
    }

    x += dx;
    y += dy;
    this.draw();
  };
}

let circleArr = [];

for (let i = 0; i < 40; i++) {
  let radius = 50;
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let dy = (Math.random() - 0.5) * 5;
  let dx = (Math.random() - 0.5) * 5;

  circleArr.push(new AnimateObject(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update();
  }
}

animate();
