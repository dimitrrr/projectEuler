// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6 th prime is 13.

// What is the 10 001 st prime number ?

function isPrime(n) {
    for(let i = 2; i <= n / 2; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

let countOfPrimes = 0, i = 2;
while(true) {
    if(isPrime(i)) countOfPrimes++;
    if(countOfPrimes === 10001) break;
    i++;
}

console.log(i);