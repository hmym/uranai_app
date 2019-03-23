'use strict'

{
  const btn = document.getElementById('btn');
  const msg = document.getElementById('msg');

  btn.addEventListener('click', () => {
    const results = ['bad', 'soso', 'good!', 'crazy!'];
    const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];
    if (n === 0) {
      msg.textContent = "Don't worry!";
    }else if ( n === 3){
      msg.textContent = "Let's calm down!";
    }else{
      msg.textContent = "Good Luck!";
    }
  });

  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });

  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const context = document.getElementById("canvas").getContext("2d");

  function drowLine(startX, startY, endX, endY, color1, color2, color3) {
    context.globalCompositeOperation = 'lighter';
    context.strokeStyle = "rgba(" + color1 +", " + color2 + ", " + color3 + ", 1)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
  }

  function call() {
    context.clearRect(0, 0, 300, 200);
    for (let i = 0; i < 100; i ++) {
      drowLine(
        getRandomInt(100),
        getRandomInt(100),
        getRandomInt(300),
        getRandomInt(300),
        255 - getRandomInt(180),
        255 - getRandomInt(255),
        255 - getRandomInt(255)
      );
    }
  }
  setInterval(call, 33);
}
