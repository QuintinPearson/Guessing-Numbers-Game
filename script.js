'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉'

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value =23;
console.log(document.querySelector('.guess').value); 
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number! ⛔';
    displayMessage('No number! ⛔');

    // When the Player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number! 🎉';
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // to add High score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong, (eliminating the too high and too low code to get simpler code.)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉';
      displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉');
      // score = score - 1; this is the same as score--
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game! 💥';
      displayMessage('You lost the game! 💥');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // When the Guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High! 📈';
  //     // score = score - 1; this is the same as score--
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // When the guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low! 📉';
  //     // score = score - 1; this is the same as score--
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// To reset the game
//select the again class and add event handler
document.querySelector('.again').addEventListener('click', function () {
  // Restore initial values of score and secret Number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //restore initial conditions of the , message, number, score and guess input fields
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
