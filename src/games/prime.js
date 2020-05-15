#!/usr/bin/env node
import {gameFlow} from '../index.js';
const isPrime = (num) => {
    if (num === 1) {return false;
    } if (num === 2 || num === 3 ) {
        return true;
    } for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
          return false;
          } 
        }
        return true;
      };
      const primeEngine = () => {
        const question = Math.floor(Math.random() * 100);
        const answer = isPrime(question) ? 'yes' : 'no';
        return {question, answer};
      };
export const primeGame = () => {
    const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".'
    gameFlow(gameTask, primeEngine);
};