function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers[i] = getRandomInt(10);
}
console.log(numbers);
