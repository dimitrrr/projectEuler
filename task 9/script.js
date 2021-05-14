// A Pythagorean triplet is a set of three natural numbers, a < b < c,
//     for which,

//     a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet
// for which a + b + c = 1000.
// Find the product abc.

let perimeter = 1000;
let a, b, c;

for (let a = 1; a <= perimeter + 1; a++) {
    for (let b = a + 1; b < perimeter + 1; b++) {
        c = perimeter - a - b;
        if (a ** 2 + b ** 2 === c ** 2) {
            console.log(a * b * c);
            break;
        }
    }
}