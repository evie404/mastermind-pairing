// Mastermind game


// comand line interface.
const promptSync = require('prompt-sync')({ sigint: true });
import { checkGuess } from './guess';

// ask what's your name
// todo - figure out why newline breaks this.
// let name = prompt("what is your name: ");

// type EntrysecretCode = "O" | "G" | "R" | "Y"

// type ResponsesecretCode = "B" | "P"

const secretCodeSize = 4;
let secretCode = Array<string>(secretCodeSize);  // 4 of entries

const PossibleEntries: string[] = ["O", "G", "R", "Y", "P"]
const PossibleResults: string[] = [
  "B", // correct in order
  "W" // correct out of order
]

function isValidCharacter(entry: string): boolean {
  return PossibleEntries.includes(entry)
}

// 1. we need the computer to set the sequence

for (let i = 0; i < secretCodeSize; i++) {
  secretCode[i] = PossibleEntries[Math.floor(Math.random() * PossibleEntries.length)];
}

console.log(secretCode);


const maxGuess = 10;
let tries = 0;

function validateInput(entry: string[]): boolean {
  if (entry.length != secretCodeSize) {
    // TODO: return error
    return false;
  }

  for (let i = 0; i < entry.length; i++) {
    if (!isValidCharacter(entry[i])) {
      // TODO: return error
      return false;
    }
  }

  return true;
}

while (tries < maxGuess) {
  console.log("guess #" + (tries + 1));
  let guess = promptSync("what is your guess? ");
  let guessChars = guess.split("");
  let valid = validateInput(guessChars);
  if (valid) {
    tries++;
    let { rightGuessRightPosition, rightGuessWrongPosition } = checkGuess(guessChars, secretCode);
    // console.log(guessResult);

    if (rightGuessRightPosition === secretCodeSize) {
      console.log('Winner!');
      break
    }

    console.log("Black=" + rightGuessRightPosition);
    console.log("White=" + rightGuessWrongPosition);
  } else {
    console.log("guess is invalid")
  }
  // 2.1 After each guess check if they won
  // 2.2 Check how many were right color (black)
  // 2.2 Check how many were right color plus right order (purple)
  // 2.3 Return that sequence
  // 2.4 Augment turn counter - if 10 they lose
}

console.log("you lost :C")
console.log("secret is: " + secretCode)

// 2. Then we need to ask the 2nd player 10 guesses
  // 2.1 After each guess check if they won
  // 2.2 Check how many were right color (black)
  // 2.2 Check how many were right color plus right order (purple)
  // 2.3 Return that sequence
  // 2.4 Augment turn counter - if 10 they lose
      // 2.4.1 if not back to top.
