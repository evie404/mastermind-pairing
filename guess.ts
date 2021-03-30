interface GuessResults {
  rightGuessRightPosition: number,
  rightGuessWrongPosition: number,
}

export function checkGuess(guess: string[], secretCode: string[]): GuessResults {
  let guessResults: GuessResults = {
    rightGuessRightPosition: 0,
    rightGuessWrongPosition: 0,
  }

  guess.forEach((_, i) => {
    if (guess[i] == secretCode[i]) {
      guessResults.rightGuessRightPosition++;
    } else if (secretCode.includes(guess[i])) {
      guessResults.rightGuessWrongPosition++;
    }
  })

  return guessResults;
}

// module.exports = checkGuess;
