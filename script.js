'use strict';

document.querySelector('.add-color').addEventListener('input', function (e) {
  document.querySelector('.box').style.backgroundColor =
    document.querySelector('.add-color').value;
  document.querySelector('.box').style.borderColor =
    document.querySelector('.add-color').value;
});
