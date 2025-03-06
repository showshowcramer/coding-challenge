// Example function that takes an array of numbers and returns the sum of the first 3 elements
function sumFirstThreeElements(numbers: number[]): number {
  const sum = 0;

  for (let i = 0; i < 3 && i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
