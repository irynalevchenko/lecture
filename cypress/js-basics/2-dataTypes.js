/*
Типи даних:

Прості або примітиви:
- числа
- текст
- логічний тип або булевий
- null
- undefined
- Symbol
-BigInt

Об'єкти:
- масиви
- функції
- об'єкт дати
- регулярні вирази
- помилки
- об'єкт
*/

// int - числа до 2^53

let number = 4;
let floatNumber = 5.5;

console.log(4/0);
console.log(-4/0);

console.log('a'* 5);

let text = '4';

let booleanType = true; //false

let a = null;

let b;
console.log(a);

let person = {
    age: 20,
    name: 'Iryna',
    isMarried: true
};
console.log('Вік: ' + person.age);
console.log(`Одружений ${person.isMarried}`);

// приклад з автотестів арі
let endpoint = 'help';
console.log(`https://someUrl/${endpoint}`);

// виводим перший елемент масива arr
let arr = ['text', 6, {}, []];
console.log(arr[0]);

let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3};

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna' : 1000,
    'Vlada': 1200
};

let salaryArr = ['Anna', 1000, 'Vlada', 1200];

let someArr = [1, 2, 3];
let objArr = {
    0:1,
    1:2, 
    2:3
};
console.log(someArr[1]);
console.log(objArr[1]);

let objArr1 = {
    a:1,
    b:2, 
    c:3
};
console.log(objArr1["a"]);

let num = 1;
console.log(num);
num = 2;
console.log(num);

let objArr2 = {
    a:1,
    b:2, 
    c:3
};
console.log(objArr2["a"]);

objArr2.a = 5;
console.log(objArr2.a);

const objArr3 = {
    a:1,
    b:2, 
    c:{
        someKey: {
            someKey: 12
        }
    },
    d: {
        someKey: [1, 2, 3]
    }
};

console.log(objArr3.c.someKey.someKey);
console.log(objArr3.d.someKey[1]);


let someText = 'Hello world';

console.log(someText.length); // довжина рядка
console.log(someText.substring(0, 4)); //перші чотири символи виводим
console.log(someText.toLowerCase());
console.log(someText.toUpperCase());
console.log(someText.indexOf('o')); //довжина рядка

console.log(someText.substring(0, someText.length -4)); // обрізати останні чотири символи

console.log(someText.slice(0, 4)); //перші чотири символи виводим
console.log(someText.trim()); // прибирає пробіли на початку і в кінці

console.log(someText.charAt(1)); //виводить символ за індексом
console.log(someText[1]); //вивести другий символ


// ----- масиви

let myArr = [];

myArr.push('Доброго вечору'); //додавання нового елементу в масив
myArr.push('Доброго ранку');

console.log(myArr);
console.log(myArr.length); //повертає довжину масиву
console.log(myArr.join(" ")); // поєднує елементи масиву
console.log(myArr.pop()); //виводить останнє значення

