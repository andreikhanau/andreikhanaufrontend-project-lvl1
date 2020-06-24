import createGameFlow from '../index.js';
import getRandomInt from '../tools.js';

const isEven = (num) => num % 2 === 0;
const generateEvenGameData = () => {
  const minRandNum = 1;
  const maxRandNum = 100;
  const question = getRandomInt(minRandNum, maxRandNum);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const evenGame = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  createGameFlow(gameTask, generateEvenGameData);
};
export default evenGame;
