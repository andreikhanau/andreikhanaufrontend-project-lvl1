import gameFlow from '../index.js';
import { randNumGenerator, findGreatestDiviser } from '../tools.js';

const gcdGenerator = () => {
  const maxRandNum = 100;
  const randNum1 = randNumGenerator(maxRandNum);
  const randNum2 = randNumGenerator(maxRandNum);
  const question = `${randNum1} ${randNum2}`;
  const answer = findGreatestDiviser(randNum1, randNum2);
  return { question, answer };
};

const gcdGame = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  gameFlow(gameTask, gcdGenerator);
};
export default gcdGame;
