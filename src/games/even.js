import gameFlow from '../index.js';
import randNumGenerator from '../tools.js';

const isEven = (num) => num % 2 === 0;
const evenGameDataGenerator = () => {
  const randMaxNumber = 100;
  const question = randNumGenerator(randMaxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const evenGame = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameFlow(gameTask, evenGameDataGenerator);
};
export default evenGame;
