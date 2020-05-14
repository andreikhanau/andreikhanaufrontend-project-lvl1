#!/usr/bin/env node
import {gameFlow} from '../index.js';
const calcEngine = () => {
    let getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    const randNum1 = Math.floor((Math.random() * 100) + 1);
    const randNum2 = Math.floor((Math.random() * 100) + 1);
    let randomOperator = getRandomItem(['-','+','*']);
    const question = `${randNum1}${randomOperator}${randNum2}`;
     let answer = '';
      if (randomOperator === '-') {
        answer = (randNum1 - randNum2).toString(); 
        } else if (randomOperator === '+') {
        answer = (randNum1 + randNum2).toString();
        } else if (randomOperator === '*') {
        answer = (randNum1 * randNum2).toString();
        }
     return {question, answer};
      };

export const calcGame = () => {
        const gameTask = 'What is the result of the expression?'
        gameFlow(gameTask, calcEngine);
    };
        

       
        
   