import gameFlow from '../index.js';
import randNumGenerator from '../tools.js';

const calcEngine = () => {
  const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
  const maxRandNum = 100;
  const randNum1 = randNumGenerator(maxRandNum);
  const randNum2 = randNumGenerator(maxRandNum);
  const randomOperator = getRandomItem(['-', '+', '*']);
  const question = `${randNum1}${randomOperator}${randNum2}`;
  let answer = '';
  switch (randomOperator) {
    case '-':
      answer = (randNum1 - randNum2).toString();
      break;
    case '+':
      answer = (randNum1 + randNum2).toString();
      break;
    case '*':
      answer = (randNum1 * randNum2).toString();
      break;
    default:
      break;
  }
  return { question, answer };
};

const calcGame = () => {
  const gameTask = 'What is the result of the expression?';
  gameFlow(gameTask, calcEngine);
};
export default calcGame;
