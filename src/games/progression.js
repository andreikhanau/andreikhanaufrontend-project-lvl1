import gameFlow from '../index.js';
import randNumGenerator from '../tools.js';

const progressionGenerator = () => {
  const amountOfNumbersInProgression = 10;
  const maxRandNum = 100;
  const randNum = randNumGenerator(maxRandNum);
  const maxDiffBetwNumbers = 10;
  const randDifference = randNumGenerator(maxDiffBetwNumbers);
  const numbers = [];
  for (let i = randNum; numbers.length < amountOfNumbersInProgression; i += randDifference) {
    numbers.push(i);
  } return numbers;
};
const gcdGameDataGenerator = () => {
  const progression = progressionGenerator();
  const randHiddenNum = randNumGenerator(progression.length - 1);
  const answer = progression[randHiddenNum].toString();
  progression[randHiddenNum] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

const progressionGame = () => {
  const gameTask = 'What number is missing in the progression?';
  gameFlow(gameTask, gcdGameDataGenerator);
};
export default progressionGame;
