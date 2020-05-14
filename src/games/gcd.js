import {gameFlow} from '../index.js';
const gcdEngine = () => {
    const randNum1 = Math.floor((Math.random() * 100) + 1);
    const randNum2 = Math.floor((Math.random() * 100) + 1);
    const question = `${randNum1} ${randNum2}`;
    const findSmallestNum = (num1, num2) => num1 > num2 ? num2 : num1;
    const findGreatestDiviser = (num1, num2) =>{
      for (let i = findSmallestNum(num1, num2); i <= findSmallestNum(num1, num2); i--) {
        if (num1 % i === 0 && num2 % i === 0) {return i};
    }};
    const answer = findGreatestDiviser(randNum1, randNum2);
    
    return {question, answer};
  };
  export const gcdGame = () => {
    const gameTask = 'Find the greatest common divisor of given numbers.'
    gameFlow(gameTask, gcdEngine);
};
