#!/usr/bin/env node
import {gameFlow} from '../index.js';

const isEven = (num) => {
      if (num % 2 === 0) {
        return true;
      } return false;
  };
const evenEngine = () => {
    const question = Math.floor(Math.random() * 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return {question, answer};
  };
export const evenGame = () => {
        const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".'
        gameFlow(gameTask, evenEngine);
  };

 
    