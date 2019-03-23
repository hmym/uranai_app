'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['bad', 'soso', 'good!', 'crazy!'];
    const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];
    // btn.textContent = n;
    // switch (n) {
    //   case 0:
    //     btn.textContent = "bad"
    //     break;
    //   case 1:
    //     btn.textContent = "soso"
    //     break;
    //   case 2:
    //     btn.textContent = "good!"
    //     break;
    // }
  });

  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });

  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });

}
