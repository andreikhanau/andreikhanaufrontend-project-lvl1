import gameFlow from '../index.js';
import { randNumGenerator } from '../tools.js';

const brainProgressionGenerator = () => {
  const maxRandNum = 100;
  const maxDifferenceBetwNums = 10;
  const amountOfNumbersInQuestion = 10;
  const maxIndexOfHiddenNum = amountOfNumbersInQuestion - 1;
  const randNum = randNumGenerator(maxRandNum);
  const randDifference = randNumGenerator(maxDifferenceBetwNums);
  const randHiddenNum = randNumGenerator(maxIndexOfHiddenNum);
  const numbersGenerator = () => {
    const numbers = [];
    for (let i = randNum; numbers.length < amountOfNumbersInQuestion; i += randDifference) {
      numbers.push(i);
    } return numbers;
  };
  const lineOfNumbers = numbersGenerator();
  const answer = lineOfNumbers[randHiddenNum];
  lineOfNumbers[randHiddenNum] = '..';
  const question = lineOfNumbers.join(' ');
  return { question, answer };
};
const progressionGame = () => {
  const gameTask = 'What number is missing in the progression?';
  gameFlow(gameTask, brainProgressionGenerator);
};
export default progressionGame;
