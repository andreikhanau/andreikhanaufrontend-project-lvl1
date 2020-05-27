import gameFlow from '../index.js';
import randNumGenerator from '../tools.js';

const greatestCommonDiviserEngine = () => {
  const maxRandNum = 100;
  const randNum1 = randNumGenerator(maxRandNum);
  const randNum2 = randNumGenerator(maxRandNum);
  const question = `${randNum1} ${randNum2}`;
  const findSmallestNum = (num1, num2) => (num1 > num2 ? num2 : num1);
  // eslint-disable-next-line consistent-return
  const findGreatestDiviser = (num1, num2) => {
    // eslint-disable-next-line for-direction
    for (let i = findSmallestNum(num1, num2); i <= findSmallestNum(num1, num2); i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      }
    }
  };
  const answer = findGreatestDiviser(randNum1, randNum2).toString();
  return { question, answer };
};
const gcdGame = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  gameFlow(gameTask, greatestCommonDiviserEngine);
};
export default gcdGame;
