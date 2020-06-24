import createGameFlow from '../index.js';
import getRandomInt from '../tools.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeGameData = () => {
  const minRandNum = 1;
  const maxRandNum = 100;
  const question = getRandomInt(minRandNum, maxRandNum);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

const primeGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  createGameFlow(gameTask, generatePrimeGameData);
};
export default primeGame;
