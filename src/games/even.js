import gameFlow from '../index.js';
import { isEven, randNumGenerator } from '../tools.js';

const evenGameGenerator = () => {
  const randMaxNumber = 100;
  const question = randNumGenerator(randMaxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const evenGame = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameFlow(gameTask, evenGameGenerator);
};
export default evenGame;
