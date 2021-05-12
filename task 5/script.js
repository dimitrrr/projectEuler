// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

function isDividingFrom1To20(num) {
    for (let i = 2; i <= 20; i++) {
        if (num % i !== 0) return false;
    }
    return true;
}

let minDivisible = 2520;
while (!isDividingFrom1To20(minDivisible)) minDivisible++;
console.log(minDivisible);
