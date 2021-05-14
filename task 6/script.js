// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sumOfSquares = 0, squareOfSum = 0;
for(let i = 1; i <= 100; i++) {
    sumOfSquares += i ** 2;
    squareOfSum += i;
}

squareOfSum = squareOfSum ** 2;

let result = Math.abs(sumOfSquares - squareOfSum);
console.log(result);