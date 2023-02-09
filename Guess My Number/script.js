'use strict';

// To Generate the Random Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guess;

// When Check! Button is Clicked
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);

  // If Nothing is Entered
  if (!guess) {
    document.querySelector('.message').textContent = 'Please Input a Number...';
  }

  // If You Win
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You Win :)';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  }

  // If the number is higher
  else if (guess > secretNumber) {
    ifGuessNotRight();
  }

  // If the number is lower
  else if (guess < secretNumber) {
    ifGuessNotRight();
  }
});

// If Again Button is Clicked
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

// Function For If Guess is not Correct
const ifGuessNotRight = function () {
  if (score > 1) {
    document.querySelector('.message').textContent = `${
      guess > secretNumber ? 'Too High!' : 'Too Low!'
    }`;
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.guess').value = '';
  } else {
    document.querySelector('.message').textContent = 'You Lose :(';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.score').textContent = 0;
  }
};
