export const randNumGenerator = (maxNumber) => Math.floor((Math.random() * maxNumber) + 1);

export const findGreatestDiviser = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return findGreatestDiviser(num2, num1 % num2);
};

export const isEven = (num) => num % 2 === 0;

export const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

export const isPrime = (num) => {
  if (num <= 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
