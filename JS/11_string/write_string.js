let someStringOne = 'Antonia!'; //одинарные
let someStringTwo = "Antonia!"; // двойные
let someStringThree = `Antonia!`; // обратные

console.log(someStringOne);
console.log(someStringTwo);
console.log(someStringThree);

/*
одинарные и двойные кавычки работают, по сути одинаково, а если использовать обратные кавычки, 
то в такую строку можно вставлять произвольные выражения, обернув их в ${_}:
*/

let textHi = "Hello!";
let textAll = `${textHi} I'm Duisburg!`;

console.log(textAll);

function someSum(a, b) {
    return a + b;
}

console.log(`Summ: ${someSum(4, 7)}`);

// многострочная запись

let text = `Hello!
You are on the ship
Antonia!`;
console.log(text);

/*
всё что заключено в любые кавычки будет иметь тип данных строка
*/

let someString = "158";
let someNum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof  someNum);

console.log(someString + someNum); // будет строка 158158

// спецсимволы

/*
внутри строк можно использовать ряд спецсимволов
все спецсимволы начинаются с обратного слеша,
\ - так называемого "символа экранирования"
вот несколько:
*/

// перевод строки \n

let textOne = `Hello!
You are on the
ship Antonia!`;
console.log(textOne);

let textTwo = "Hello! \n You are on the \n ship Antonia!";
console.log(textTwo);

// табуляция (отступ) \t

let textThree = "Hello! \n\tYou are on the\n\t\tair!";
console.log(textThree); 

// обратный слеш \\

let textFour = "Hello! You are on the air \\ Antonia!";
console.log(textFour);

// кавычки \' \" "

let textFive = "Hello! \"You are in the game!\"";
console.log(textFive);

// иконки , символы UTF-16 \uКОД, UTF-32 \u{КОД}

let textSix = "Live forever! \u00A9 \u{1F60D}";
console.log(textSix);






