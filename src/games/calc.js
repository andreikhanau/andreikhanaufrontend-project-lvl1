import gameFlow from '../index.js';
import randNumGenerator from '../tools.js';

const getRandomItem = (arrayOfItems) => arrayOfItems[randNumGenerator(arrayOfItems.length - 1)];
const calcGameDataGenerator = () => {
  const maxRandNum = 100;
  const randNum1 = randNumGenerator(maxRandNum);
  const randNum2 = randNumGenerator(maxRandNum);
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
  gameFlow(gameTask, calcGameDataGenerator);
};
export default calcGame;
