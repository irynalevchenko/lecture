// 1. Двоє хочуть гамбургер, один хоче гамбургер і картоплю. 
// Якщо все є - "Ми поїли". Якщо не вистачає - "Ми йдемо в інше кафе".
const hamburger = 3;
const fries = 1;

if(hamburger >= 3 && fries) {
    console.log('Ми поїли')
}
else {
    console.log('Ми йдемо в інше кафе')
}


// 2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
   // Результат виводити в консоль.
let price = 0;

 if(price >= 1000 &&  price <= 1900) {
    console.log('Ціна в проміжку 1000 - 1900')
    } else {
     console.log('false')
    }

// 3. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    //Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
   // Результат виводити в консоль.

   //3.1
   let price1 = 1901;

   if(price1 <= 1000 || price1 >= 1900){
       console.log('Значення ціни товару не знаходиться між 1000 та 1900 включно')
      } else {
       console.log('Ціна в проміжку 1000 - 1900')
      }

// 3.2 не придумала як розвязати з оператором НЕ !.
// Не розумію як прописати умову для діапазона. 

//let price2 = 1700

//if(price2 <= 1000 || price2 >= 1900) {
//  console.log(price2 !== 1900)
//}

   
// 4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    
let month = 7;

if(month == 1) {
    console.log('January')
} else if(month == 2){
    console.log('February')
} else if(month == 3){
    console.log('March')
} else if(month == 4){
    console.log('April')
} else if(month == 5){
    console.log('May')
} else if(month == 6){
    console.log('June')
} else if(month == 7){
    console.log('July')
} else if(month == 8){
    console.log('August')
} else if(month == 9){
    console.log('September')
} else if(month == 10){
    console.log('October')
} else if(month == 11){
    console.log('November')
} else if(month == 12){
    console.log('December')
}

// 5. Задано 3 числа (a, b, c), які не рівні між собою.
//Визначити середнє мід цими трьома числами
//(не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//Використати вкладені оператори if

let a = 1;
let b = 15;
let c = 8;

if(((a > b) && (a < c)) || ((a < b) && (a > c))){
    console.log('a')
} else if (((b > a) && (b < c)) || ((b < a) && (b > c))){
    console.log('b')
} else {
    console.log('c')
}


// 6. Задано номер дня тижня.
// За заданим номером вивести назву дня тижня використовуючи switch.

let weekNumber = 3;

switch(weekNumber){
    case 1:
        console.log('Monday')
        break; 
    case 2:
            console.log('Tuesday')
            break; 
    case 3:
                console.log('Wednesday')
                break; 
    case 4:
        console.log('Thursday')
        break; 
    case 5:
            console.log('Friday')
            break;
    case 6:
                console.log('Saturday')
                break; 
    case 7:
                    console.log('Sunday')
                    break; 
    }

// 7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    //Математичні операції для обчислення: "+", "-", "*", "/".



//  8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let mySentence = 'A set of words that is complete in itself';

let mySentenseWithoutVowels = mySentence.replace(/[aeiou]/gi, '');

console.log(mySentenseWithoutVowels); 

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
       // так щоб в консоль виводився результат обчислень з правильним закнченням.
       // Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д. 
 
       // Потрібно об'явить змінну яка буде перевіряти чи остання цифра == 1 або 2,3,4 або 5,6,7,8,9 
       // і залежно від цього виводим кілометр або кілометри або кілометрів.
       // нагуглила, що можна в стрінгу, а потім знову цифри. Є метод який перевіряє останню цифру в Number?
       
      
       let meters = 3660;
       let kilometers = meters / 1000;
       let stringForNumber = String(kilometers).slice(-1)
       let lastNumber = Number(stringForNumber);
       
       if(lastNumber == 1){
        console.log(kilometers + " кілометр")
       } else if (lastNumber == 2 || lastNumber == 3 || lastNumber == 4) {
        console.log(kilometers + " кілометри")
    } else if (lastNumber == 5 || lastNumber == 6 || lastNumber == 7 || lastNumber == 8 || lastNumber == 9) {
        console.log(kilometers + " кілометрів")
    }
