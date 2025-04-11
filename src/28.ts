function sumOfSquares(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i * i === n) {
      break;
    }
    sum += i * i;
  }
  return sum;
}
