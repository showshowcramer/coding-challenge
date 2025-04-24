function calculateGCD(a: number, b: number): number {
    if (b === 0) return a;
    else return calculateGCD(b, a % b);
}

function generatePrimeFactors(n: number): { prime: string; count: number }[] {
    const factors = [];
    let divisor = 2;

    while (divisor <= n) {
        if (n % divisor === 0) {
            factors.push(`* ${divisor}`);
            n /= divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

function filterNumbers(n: number, primeFactors: { prime: string; count: number }[]): number[] {
    const filtered = [];
    for (let i = 0; i < primeFactors.length; i++) {
        if (primeFactors[i].count > 1) {
            if ((i + 1) % 2 === 0) {
                filtered.push(primeFactors[i]);
            } else {
                filtered.push((n / primeFactors[i].prime).toString());
            }
        }
    }

    return filtered;
}
