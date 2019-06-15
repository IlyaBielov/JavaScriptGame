var $start = document.querySelector('#start');
var $game = document.querySelector('#game');

$start.addEventListener('click', startGame);

function startGame() {
  $game.style.backgroundColor = '#fff';
  $start.classList.add('hide');

  renderBox();
}

function renderBox() {
  var box = document.createElement('div');

  box.style.height = box.style.width = '50px';
  box.style.position = 'absolute';
  box.style.backgroundColor = '#000';
  box.style.top = '50px';
  box.style.left = '70px';
  box.style.cursor = 'pointer';

  $game.insertAdjacentElement('afterbegin', box);
}
