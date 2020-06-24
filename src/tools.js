const getRandomInt = (min = 1, max = 100) => {
  const lowBorder = Math.ceil(min);
  const upperBorder = Math.floor(max);
  return Math.floor(Math.random() * (upperBorder - lowBorder)) + lowBorder;
};
export default getRandomInt;
