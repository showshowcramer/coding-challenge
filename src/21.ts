function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n === 2 || n % 2 === 0) return true;

  const sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

function sumOfMultiples(target: number, factors: number[]): number {
  let sum = 0;

  for (let factor of factors) {
    if (target % factor === 0) {
      sum += factor * 2;
    }
  }

  return sum;
}
