'use strict';

let number = 5;
const number1 = 1000;

//camelCase
//snake_case
//UPPER_SNAKE_CASE
// kebab-case
//PascalCase

//console.log(number);
//console.log(number1);

// прямих констант не буває
const obj = {
    age: 20
}
obj.age = 18;
console.log(obj.age);

var firstName = 'TAras';
firstName = 'Dima';

//var існує в пам'яті до того як виконається js 

console.log(lastName);
let lastName = 'Petrenko';

console.log(lastName1);
var lastName1 = 'Petrenko';

//область видимості
{
    let number2 = 4
}
console.log(number2)

{
    var number5 = 4
}
console.log(number5)


const a = 3000;
const b = 2000;
//100 lines of code
console.log('Ширина: ' + a + ', довжина:' + b);

const width = 3000;
const lenght = 2000;
//100 lines of code
console.log('Ширина: ' + width + ', довжина:' + lenght);

const carBodyWidth = 2000;
const carBodyLenght = 3000;