function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function getPrimeFactors(num) {
  const factors = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    while (num % i === 0 && isPrime(i)) {
      factors.push(i);
      num /= i;
    }
  }

  if (num > 1) factors.push(num);

  return factors;
}

// Example usage:
console.log(getPrimeFactors(36)); // [2, 2, 3, 3]
