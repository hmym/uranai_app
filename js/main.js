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

}
