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
});
