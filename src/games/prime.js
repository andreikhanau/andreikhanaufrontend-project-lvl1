import gameFlow from '../index.js';
import randNumGenerator from '../tools.js';

const isPrime = (num) => {
  if (num <= 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGameDataGenerator = () => {
  const maxRandNum = 100;
  const question = randNumGenerator(maxRandNum);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

const primeGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameFlow(gameTask, primeGameDataGenerator);
};
export default primeGame;
