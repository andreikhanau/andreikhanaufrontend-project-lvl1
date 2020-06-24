import createGameFlow from '../index.js';
import getRandomInt from '../tools.js';

const generateProgression = (amountOfNumbers = 10, minDifference = 1, maxDifference = 10) => {
  const minRandNum = 1;
  const maxRandNum = 100;
  const randNum = getRandomInt(minRandNum, maxRandNum);
  const randDifference = getRandomInt(minDifference, maxDifference);
  const progression = [];
  for (let i = randNum; progression.length < amountOfNumbers; i += randDifference) {
    progression.push(i);
  } return progression;
};
const generateGcdGameData = () => {
  const progression = generateProgression();
  const randHiddenNum = getRandomInt(0, progression.length - 1);
  const answer = progression[randHiddenNum].toString();
  progression[randHiddenNum] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

const progressionGame = () => {
  const gameTask = 'What number is missing in the progression?';
  createGameFlow(gameTask, generateGcdGameData);
};
export default progressionGame;
