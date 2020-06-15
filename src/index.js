import readlineSync from 'readline-sync';

const gameFlow = (gameTask, gameDataGenerator) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(gameTask);
  const amountOfRounds = 3;
  for (let i = 0; i < amountOfRounds; i += 1) {
    const { question, answer } = gameDataGenerator();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');
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
