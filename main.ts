const promptSync = require('prompt-sync')({ sigint: true });
import { checkGuess } from './guess';

const secretCodeSize = 4;
let secretCode = Array<string>(secretCodeSize);  // 4 of entries

const PossibleEntries: string[] = ["O", "G", "R", "Y", "P"]

function isValidCharacter(entry: string): boolean {
  return PossibleEntries.includes(entry)
}

// computer to set the sequence secretly

for (let i = 0; i < secretCodeSize; i++) {
  secretCode[i] = PossibleEntries[Math.floor(Math.random() * PossibleEntries.length)];
}

// console.log(secretCode);

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

// player starts guessing
while (tries < maxGuess) {
  console.log("guess #" + (tries + 1));
  let guess = promptSync("what is your guess? ");
  let guessChars = guess.split("");
  let valid = validateInput(guessChars);

  if (valid) {
    tries++;
    let { rightGuessRightPosition, rightGuessWrongPosition } = checkGuess(guessChars, secretCode);

    if (rightGuessRightPosition === secretCodeSize) {
      console.log('Winner!');
      break
    }

    console.log("Black=" + rightGuessRightPosition);
    console.log("White=" + rightGuessWrongPosition);
  } else {
    console.log("guess is invalid")
  }
}

console.log("you lost :C")
console.log("secret is: " + secretCode)
