console.log('arr ' + '- object');

console.log(2 + 2);

console.log('2' + 2);

console.log(2 + + '2');

let incr = 10,
    decr = 10;

// постфіксна форма - повертає значення, а потім додає/відміняє 
// incr++ 
// decr--

console.log(incr++);
console.log(decr--);

//префіксна форма - спочатку додає/відміняє, а потім повертає значення
console.log(++incr);
console.log(--decr);


console.log(5 < 2);
console.log(5 > 2); // <= >= ==

console.log(2 == 2);
console.log(2 === 2); // строге порівняння

console.log('2' == 2); //true
console.log('2' === 2); //false

console.log('2' !== 2); //не дорівнює

// && і

let isChecked = true,
    isClosed = false;

// console.log(isChecked && isClosed);


// || або

// console.log(isChecked || isClosed);

//console.log(!isChecked && !isClosed);

console.log(!isChecked || isClosed);

// i
const hamburger = false;
const fries = true;

console.log(hamburger && fries);


const hamburger1 = 5;
const fries1 = 1;

if(hamburger1 && fries1){
    console.log('Я ситий')
}
// null, '' (пустий рядок), undefined, 0, NaN - завжди  = false


// ми хочемо з'їсти або 3 гамбургери та 1 колу АБО 2 порції нагетсів і дві порції картоплі
const hamburger2 = 5;
const fries2 = 1;
const naggets = 1;
const cola = 1; 

if(hamburger2 >= 3 && cola || naggets >= 2 && fries2 >= 2){
    console.log('Я ситий')
}
