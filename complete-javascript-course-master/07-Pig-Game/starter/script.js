'use strict';

// Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Saving the current score
let currentScore = 0;

// Rolling Dice Functionality
btnRoll.addEventListener('click' , function (){
    // 1. Generating a Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for a rolled 1.
    if(dice !== 1) {
        // Add dice to the current score.
        currentScore += dice;
        current0El.textContent = currentScore; // Change Later
    } else {
        // Switch to the next player.

    }
});