const promptSync = require('prompt-sync')({ sigint: true });
import { checkGuess } from './guess';
import { generateSecretCode, validateInput, PossibleEntries } from './secretCode';

function mastermind(secretCodeSize: number, maxGuess: number): void {
  let tries = 0;

  // computer to set the sequence secretly
  const secretCode = generateSecretCode(secretCodeSize);

  console.log("code can be any of: " + PossibleEntries);

  // player starts guessing
  while (tries < maxGuess) {
    console.log("guess #" + (tries + 1));
    let guess = promptSync("what is your guess? ");
    let guessChars = guess.split("");
    let valid = validateInput(guessChars, secretCodeSize);

    if (valid) {
      tries++;
      let { rightGuessRightPosition, rightGuessWrongPosition } = checkGuess(guessChars, secretCode);

      if (rightGuessRightPosition === secretCodeSize) {
        console.log('you win!');
        break
      }

      console.log("Black=" + rightGuessRightPosition);
      console.log("White=" + rightGuessWrongPosition);
    } else {
      console.log("guess is invalid")
      // TODO: print reason
    }
  }

  if (tries == maxGuess) {
    console.log("you lost :C")
  }

  console.log("secret is: " + secretCode)
}

mastermind(4, 10);
