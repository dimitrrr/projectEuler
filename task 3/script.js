// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let num = 600851475143;
let maxFactor = 1;

while (num !== 1) {
    maxFactor++;
    if (num % maxFactor === 0) num /= maxFactor;
}

console.log(maxFactor);