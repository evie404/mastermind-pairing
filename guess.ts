interface GuessResults {
  rightGuessRightPosition: number,
  rightGuessWrongPosition: number,
}

interface stringCountMap { [key: string]: number; }

export function checkGuess(guess: string[], secretCode: string[]): GuessResults {
  let guessResults: GuessResults = {
    rightGuessRightPosition: 0,
    rightGuessWrongPosition: 0,
  }

  let guessCounts: stringCountMap = {};
  let secretCodeCounts: stringCountMap = {};

  guess.forEach((_, i) => {
    if (guess[i] == secretCode[i]) {
      guessResults.rightGuessRightPosition++;
    } else {
      guessCounts[guess[i]] = guessCounts[guess[i]] ? guessCounts[guess[i]] + 1 : 1;
      secretCodeCounts[secretCode[i]] = secretCodeCounts[secretCode[i]] ? secretCodeCounts[secretCode[i]] + 1 : 1;
    }
  })

  // console.log(guessCounts)
  // console.log(secretCodeCounts)

  Object.keys(guessCounts).forEach((key) => {
    if (key in secretCodeCounts) {
      guessResults.rightGuessWrongPosition += Math.min(secretCodeCounts[key], guessCounts[key])
    }
  })

  return guessResults;
}

