import createGameFlow from '../index.js';
import getRandomInt from '../tools.js';

const finfGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return finfGcd(num2, num1 % num2);
};

const generateGcdGameData = () => {
  const minRandNum = 1;
  const maxRandNum = 100;
  const randNum1 = getRandomInt(minRandNum, maxRandNum);
  const randNum2 = getRandomInt(minRandNum, maxRandNum);
  const question = `${randNum1} ${randNum2}`;
  const answer = finfGcd(randNum1, randNum2).toString();
  return { question, answer };
};

const gcdGame = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  createGameFlow(gameTask, generateGcdGameData);
};
export default gcdGame;
