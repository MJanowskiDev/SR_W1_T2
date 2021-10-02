const prompt = require('prompt');

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

prompt.start();

prompt.get(
  [{ name: 'guess', required: 'true', description: 'Wprowadź liczbę z zakresu [1;10]' }],
  function (err, result) {
    const randomNumber = getRandom(1, 10);
    const res =
      Number(result.guess) === randomNumber ? '  Udalo się' : `  Spróbuj ponownie, poprawna liczba to ${randomNumber}`;
    console.log(res);
  }
);
