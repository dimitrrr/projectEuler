// A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91× 99.

// Find the largest palindrome made from the product of two 3 - digit numbers.

function isPalindrome(n) {
    let str = n.toString();
    return str === str.split('').reverse().join('');
}

let maxPal = 1;
for(let i = 100; i < 1000; i++) {
    for(let j = 100; j < 1000; j++) {
        let pal = i * j;
        if(isPalindrome(pal) && pal > maxPal) maxPal = pal;
    }
}

console.log(maxPal);