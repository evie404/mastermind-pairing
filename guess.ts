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
    }
  })

  // order-insensitive match
  let guessSorted = guess.sort()
  let secretCodeSorted = secretCode.sort()

  guessSorted.forEach((_, i) => {
    if (guessSorted[i] == secretCodeSorted[i]) {
      guessResults.rightGuessWrongPosition++;
    }
  })

  guessResults.rightGuessWrongPosition = guessResults.rightGuessWrongPosition - guessResults.rightGuessRightPosition

  return guessResults;
}

// module.exports = checkGuess;
