// Mastermind game


// comand line interface.
const prompt = require('prompt-sync')({ sigint: true });


// ask what's your name
// todo - figure out why newline breaks this.
// let name = prompt("what is your name: ");
let code = [];  // 4 of entries
const codeSize = 4;
const PossibleEntries = ["O", "G", "R", "Y"]
const ResponseOptions = ["B", "P"]


// 1. we need the computer to set the sequence

for (let i = 0; i < codeSize; i++) {
  code[i] = PossibleEntries[Math.floor(Math.random() * PossibleEntries.length)];
}

console.log(code);


const maxGuess = 10;
let tries = 0;
let won = false;


function validateInput(entry) {
  if (entry.length != codeSize) {
    return false;
  }

  for (let i = 0; i < entry.length; i++) {
    if (!PossibleEntries.includes(entry[i])) {
      // TODO: return error
      return false;
    }
  }

  return true;
}

function checkGuess(guess) {
  let rightGuessRightPosition = 0;
  let rightGuessWrongPosition = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] == code[i]) {
      rightGuessRightPosition++;
    } else if (code.includes(guess[i])) {
      rightGuessWrongPosition++;
    }
  }

  return [rightGuessRightPosition, rightGuessWrongPosition];
}

while (tries < maxGuess && !won) {
  console.log("guess #" + (tries + 1));
  let guess = prompt("what is your guess? ");
  let valid = validateInput(guess);
  if (valid) {
    tries++;
  }
  // 2.1 After each guess check if they won
  // 2.2 Check how many were right color (black)
  // 2.2 Check how many were right color plus right order (purple)
  // 2.3 Return that sequence
  // 2.4 Augment turn counter - if 10 they lose
}


// 2. Then we need to ask the 2nd player 10 guesses
  // 2.1 After each guess check if they won
  // 2.2 Check how many were right color (black)
  // 2.2 Check how many were right color plus right order (purple)
  // 2.3 Return that sequence
  // 2.4 Augment turn counter - if 10 they lose
      // 2.4.1 if not back to top.
