import { checkGuess } from './guess';

describe('checkGuess', () => {
  test('all correct code and correct order', () => {
    expect(checkGuess(['G', 'Y', 'G', 'Y'], ['G', 'Y', 'G', 'Y'])).toStrictEqual({
      rightGuessRightPosition: 4,
      rightGuessWrongPosition: 0,
    });
  });
});
