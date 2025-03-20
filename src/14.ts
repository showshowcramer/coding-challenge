function sumEvenNumbers(numbers: number[]): number {
  return numbers.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}
