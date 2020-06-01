import gameFlow from '../index.js';
import { isPrime, randNumGenerator } from '../tools.js';

const primeGameGenerator = () => {
  const maxRandNum = 100;
  const question = randNumGenerator(maxRandNum);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};
const primeGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameFlow(gameTask, primeGameGenerator);
};
export default primeGame;
