import { checkGuess } from './guess';

test('adds 1 + 2 to equal 3', () => {
  expect(checkGuess(['G', 'Y', 'G', 'Y'], ['G', 'Y', 'G', 'Y'])).toStrictEqual({
    rightGuessRightPosition: 4,
    rightGuessWrongPosition: 0,
  });
});
