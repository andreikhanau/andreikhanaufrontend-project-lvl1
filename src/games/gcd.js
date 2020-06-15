import gameFlow from '../index.js';
import randNumGenerator from '../tools.js';

const findGreatestDiviser = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return findGreatestDiviser(num2, num1 % num2);
};

const gcdGameDataGenerator = () => {
  const maxRandNum = 100;
  const randNum1 = randNumGenerator(maxRandNum);
  const randNum2 = randNumGenerator(maxRandNum);
  const question = `${randNum1} ${randNum2}`;
  const answer = findGreatestDiviser(randNum1, randNum2).toString();
  return { question, answer };
};

const gcdGame = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  gameFlow(gameTask, gcdGameDataGenerator);
};
export default gcdGame;
