import {gameFlow} from '../index.js';
const brainProgressionEngine = () => {
    const randNum = Math.floor((Math.random() * 100) + 1);
    const randNum2 = Math.floor((Math.random() * 10) + 1);
    const randNum3 = Math.floor((Math.random() * 9) + 1);
    const numbersGenerator = () => {
     let arrayOfNumbers = [];
       for (let i = randNum; arrayOfNumbers.length < 10; i += randNum2) {
        arrayOfNumbers.push(i);
      } return arrayOfNumbers;
  };
  const questionArray = numbersGenerator();
  const answer = questionArray[randNum3].toString();
  questionArray[randNum3] = '..';
  const question = questionArray.join(' ');
  return {question, answer};
  };
  export const progressionGame = () => {
    const gameTask = 'What number is missing in the progression?'
    gameFlow(gameTask, brainProgressionEngine);
};
