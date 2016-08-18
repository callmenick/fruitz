module.exports = function(button, output, goat) {
  'use strict';

  if (!button) throw 'Button not defined.';
  if (!output) throw 'Output not defined.';
  if (!goat) throw 'Goat not defined.';

  button.addEventListener('click', e => {
    e.preventDefault();

    fetch('/count/increment', {
      method: 'post'
    })
    .then(res => res.json())
    .then(res => {
      if (res.newCount > 4) {
        let img = document.createElement('img');
        img.setAttribute('src', '/img/goat.jpg');
        goat.appendChild(img);
      }

      output.innerHTML = res.newCount;
    });
  });
};
