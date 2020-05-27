import gameFlow from '../index.js';
import randNumGenerator from '../tools.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  } if (num === 2 || num === 3) {
    return true;
  } for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const primeEngine = () => {
  const maxRandNum = 100;
  const question = randNumGenerator(maxRandNum);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};
const primeGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameFlow(gameTask, primeEngine);
};
export default primeGame;
