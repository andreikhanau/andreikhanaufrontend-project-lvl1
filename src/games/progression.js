import gameFlow from '../index.js';
import randNumGenerator from '../tools.js';

const brainProgressionEngine = () => {
  const maxRandNum = 100;
  const maxDifferenceBetwNums = 10;
  const maxIndexOfhiddenNum = 9;
  const randNum = randNumGenerator(maxRandNum);
  const amountOfNumbersInQuestion = 10;
  const randDifference = randNumGenerator(maxDifferenceBetwNums);
  const randHiddenNum = randNumGenerator(maxIndexOfhiddenNum);
  const numbersGenerator = () => {
    const arrayOfNumbers = [];
    for (let i = randNum; arrayOfNumbers.length < amountOfNumbersInQuestion; i += randDifference) {
      arrayOfNumbers.push(i);
    } return arrayOfNumbers;
  };
  const questionAsArray = numbersGenerator();
  const answer = questionAsArray[randHiddenNum].toString();
  questionAsArray[randHiddenNum] = '..';
  const question = questionAsArray.join(' ');
  return { question, answer };
};
const progressionGame = () => {
  const gameTask = 'What number is missing in the progression?';
  gameFlow(gameTask, brainProgressionEngine);
};
export default progressionGame;
