'use strict';

let curScore0 = 0;
let curScore1 = 0;
let finalScore0 = 0;
let finalScore1 = 0;
let activeplayer = 0;
const player0 = prompt('Enter Player 1 Name: ');
const player1 = prompt('Enter Player 2 Name: ');
let playing = true;
document.querySelector('#name--0').textContent = player0;
document.querySelector('#name--1').textContent = player1;
document.querySelector('#score--0').textContent = finalScore0;
document.querySelector('#score--1').textContent = finalScore1;
document.querySelector('.dice').setAttribute('src', `dice-6.png`);

// When Roll Dice Button is Clicked
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    let diceroll = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').setAttribute('src', `dice-${diceroll}.png`);

    if (diceroll === 1) {
      changePlayer();
    } else {
      if (activeplayer === 1) {
        curScore1 += diceroll;
        document.querySelector('#current--1').textContent = curScore1;
      } else {
        curScore0 += diceroll;
        document.querySelector('#current--0').textContent = curScore0;
      }
    }
  }
});

// When Hold Button is Clicked
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    if (activeplayer === 1) {
      finalScore1 += curScore1;
      document.querySelector('#score--1').textContent = finalScore1;
      changePlayer();
    } else {
      finalScore0 += curScore0;
      document.querySelector('#score--0').textContent = finalScore0;
      changePlayer();
    }

    // When One Player Wins the Game
    if (finalScore0 >= 50 || finalScore1 >= 50) {
      if (finalScore0 >= 50) {
        console.log('Player 1 Wins!');
        document.querySelector('#name--0').textContent = `${player0} Wins!`;
      } else if (finalScore1 >= 50) {
        console.log('Player 2 Wins!');
        document.querySelector('#name--1').textContent = `${player1} Wins!`;
      }
      document.querySelector('.dice').style.display = 'none';
      playing = false;
    }
  }
});

// When New Game Button is Clicked
document.querySelector('.btn--new').addEventListener('click', function () {
  curScore0 = 0;
  curScore1 = 0;
  finalScore0 = 0;
  finalScore1 = 0;
  activeplayer = 0;
  playing = true;
  document.querySelector('#score--0').textContent = finalScore0;
  document.querySelector('#score--1').textContent = finalScore1;
  document.querySelector('.dice').setAttribute('src', `dice-6.png`);
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('#name--0').textContent = player0;
  document.querySelector('#name--1').textContent = player1;
  document.querySelector('#current--0').textContent = curScore0;
  document.querySelector('#current--1').textContent = curScore1;
});

// Function to Change Player
const changePlayer = function () {
  if (activeplayer === 1) {
    activeplayer = 0;
    curScore1 = 0;
    document.querySelector('#current--1').textContent = curScore1;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  } else {
    activeplayer = 1;
    curScore0 = 0;
    document.querySelector('#current--0').textContent = curScore0;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  }
};
