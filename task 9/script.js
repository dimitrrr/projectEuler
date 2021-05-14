let perimeter = 1000;
let a, b, c;

for(let a = 1; a <= perimeter + 1; a++) {
    for(let b = a + 1; b < perimeter + 1; b++) {
        c = perimeter - a - b;
        if (a ** 2 + b ** 2 === c ** 2) {
            console.log(a * b * c);
            break;
        }
    }
}