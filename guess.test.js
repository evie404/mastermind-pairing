import { checkGuess } from './guess';

describe('checkGuess', () => {
  test('all correct code and correct order', () => {
    expect(checkGuess(['G', 'Y', 'G', 'Y'], ['G', 'Y', 'G', 'Y'])).toStrictEqual({
      rightGuessRightPosition: 4,
      rightGuessWrongPosition: 0,
    });
  });

  test('correct code but all incorrect order', () => {
    expect(checkGuess(['Y', 'G', 'Y', 'G'], ['G', 'Y', 'G', 'Y'])).toStrictEqual({
      rightGuessRightPosition: 0,
      rightGuessWrongPosition: 4,
    });
  });

  test('one correct code in order', () => {
    expect(checkGuess(['G', 'G', 'G', 'G'], ['G', 'R', 'O', 'Y'])).toStrictEqual({
      rightGuessRightPosition: 1,
      rightGuessWrongPosition: 0,
    });
  });

  test('one correct code in order and one correct code out of order', () => {
    expect(checkGuess(['G', 'G', 'R', 'G'], ['G', 'R', 'O', 'Y'])).toStrictEqual({
      rightGuessRightPosition: 1,
      rightGuessWrongPosition: 1,
    });
  });

  test('no correct code at all', () => {
    expect(checkGuess(['G', 'G', 'G', 'G'], ['R', 'R', 'R', 'R'])).toStrictEqual({
      rightGuessRightPosition: 0,
      rightGuessWrongPosition: 0,
    });
  });
});
