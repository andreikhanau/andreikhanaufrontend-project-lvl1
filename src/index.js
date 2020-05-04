import readlineSync from 'readline-sync';
const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
};
const randNum1 = Math.floor((Math.random() * 100) + 1);
const randNum2 = Math.floor((Math.random() * 100) + 1);
const randNum3 = Math.floor((Math.random() * 100) + 1);
const randNums = [randNum1, randNum2, randNum3];

export const evenGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (const number of randNums) {
  const question = readlineSync.question(`Question: ${number}
Your answer: `);
  if (isEven(number) === question) {
    console.log('Correct');
    if (number === randNum3) {
      console.log(`Congratulations, ${userName}!`); 
     }
  } if (isEven(number) !== question){console.log(`${question} is wrong answer ;(. Correct answer was No. Let's try again, ${userName}!`)
  break;
  } } };


