// число
let someNum = 458;
console.log(someNum);

// десятичные числа
let someNums = 4.58; // через точку обязательно
console.log(someNums);

// много нулей

let someBigNum = 1e6; // 1 * 1000000;
console.log(someBigNum);

//let someLittleNum = 0.000001;
//console.log(someLittleNum);

let someLittleNum = 1e-6; // 1 / 1000000;
console.log(someLittleNum);

// шестнадцатеричные, двойчные и восьметричные числа

/*
шестнадцетричные числа широко используются в JavaScript для представления цветов,
кодировки символов многого другого.
*/

console.log(0xFF); // 255

// реже используются двоичные и восьмеричные числа

console.log(0b11111111); //255
console.log(0o377); //255

// метод toString(base)
// метод num.toString(base) возвращает строковое
// представление числа в той или иной системе счисления (base).
// base может принимать значения от 2 до 36 (по умолчанию 10).

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

//округление чисел

// в JavaScript встроен объект Math, который содержит несколько функций для работы с округлением:

// Math.floor - округление в меньшую сторону

let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne); //5
console.log(numTwo); // 2
console.log(numThree); // -3

// Math.ceil - округление в большую сторону
let num_One = Math.ceil(5.8);
let num_Two = Math.ceil(2.2);
let num_Three = Math.ceil(-2.2);

console.log(num_One); // 6
console.log(num_Two); // 3
console.log(num_Three);// -2

// Math.round - округление до ближайшего целого
let numSix = Math.round(5.8);
let numSeven = Math.round(2.2);
let numEight = Math.round(-2.2);

console.log(numSix); // 6
console.log(numSeven); // 2
console.log(numEight); // -2

// как получить 5.8 или 5.85?

// способ умножения и деления 

let num_Six = Math.round(5.845 * 10) / 10; // 58.45 -> 58 -> 5.8
console.log(num_Six); // 5.8

let num_Seven = Math.round(5.845 * 100) / 100; // 584.5 -> 585 -> 5.85
console.log(num_Seven);// 5.85

let num_Eight = Math.round(5.8449 * 100) / 100; // 584.49 -> 584 -> 5.84
console.log(num_Eight);// 5.84

// метод toFixed(n) - округляет число до n знаков после запятой
// и возвращает строковое представление результата.

let numNine = 5.845;
console.log(numNine.toFixed(1)); // цифра в скобках указывает сколько чисел после запятой будет

console.log(typeof numNine.toFixed(1)); // string

// преобразовать в число 
console.log(+numNine.toFixed(1));
console.log(Number(numNine.toFixed(1)));

