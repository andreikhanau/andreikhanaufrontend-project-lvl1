import createGameFlow from '../index.js';
import getRandomInt from '../tools.js';

const getRandomItem = (arrayOfItems) => arrayOfItems[getRandomInt(0, arrayOfItems.length - 1)];
const generateCalcGameData = () => {
  const minRandNum = 1;
  const maxRandNum = 100;
  const randNum1 = getRandomInt(minRandNum, maxRandNum);
  const randNum2 = getRandomInt(minRandNum, maxRandNum);
  const randomOperator = getRandomItem(['-', '+', '*']);
  const question = `${randNum1}${randomOperator}${randNum2}`;
  let calcResult;
  switch (randomOperator) {
    case '-':
      calcResult = (randNum1 - randNum2);
      break;
    case '+':
      calcResult = (randNum1 + randNum2);
      break;
    case '*':
      calcResult = (randNum1 * randNum2);
      break;
    default:
      break;
  }
  const answer = calcResult.toString();
  return { question, answer };
};

const calcGame = () => {
  const gameTask = 'What is the result of the expression?';
  createGameFlow(gameTask, generateCalcGameData);
};
export default calcGame;
