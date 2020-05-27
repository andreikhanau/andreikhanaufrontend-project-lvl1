import readlineSync from 'readline-sync';

const gameFlow = (gameTask, gameEngine) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(gameTask);
  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = gameEngine();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameFlow;
