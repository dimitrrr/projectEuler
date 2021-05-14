// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function isPrime(n) {
    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let sum = 0;
let i = 2;

while (i < 2000000) {
    if (isPrime(i)) sum += i;
}

console.log(sum);