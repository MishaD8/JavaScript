// проблема неточных вычислений 

let numOne = Math.round(1.005 * 100) / 100; // ожидаем 1.01
console.log(numOne);

let numTwo = 12.35;
console.log(numTwo.toFixed(1)); // ожидаем 12.4

let problem = 0.1 + 0.2 === 0.3;
console.log(problem); // false
console.log(0.1 + 0.2); // не будет 0.30

// читаем в интернете почему так происходит

// решение с помощью Number.EPSILON

/*
let sourceNum = 1.005;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour); // 1

console.log(sourceNum * 100); // 100.499...
console.log(Math.round(sourceNum * 100)); // 100
*/
let sourceNum = 1.005 +Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour); // 1.01

console.log(sourceNum * 100);  //100.500..1
console.log(Math.round(sourceNum * 100));  //101

//функция которая корректирует округление
// десятичных дробей можно найти по ссылке в интернете

// проверка: isFinite и isNaN

/*
существуют специальные числовые значения такие как Infinity - бесконечность и NaN - ошибка вычисления
эти значения так же являются типом данных number но не являются обычными числами
для проверки таких значений существуют специальные функции
*/

// проверка isNaN

console.log(Number(25 + "Hi!")); // Nan

console.log(isNaN(25 + "Hi!")); // true

if (25 + "Hi!" !== NaN) {
    console.log("not a NaN"); // это не правда - мы знаем что это NaN
}

console.log(NaN === NaN);// NaN это уникальное значение и NaN никогда не будет равен  NaN

// проверка isFinite
/*
преобразует аргумент в число и возвращает true, если оно является обычным числом
*/

console.log(isFinite("25")); //"25" -> 25 -> true
console.log(isFinite("Hello!")); //NaN -> false
console.log(isFinite(10 / 0)); // infinity -> false

// parseInt и parseFloat
/*
преобразовать строку в число можно с помощью унарного оператора сложения либо специальной 
функции Number
*/

let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);//number

/*
часто сталкиваемся со значениями у которых есть единица измерения, например
*/
let valueTwo = +"150px";
console.log(valueTwo); // NaN
console.log(typeof valueTwo); // number

// parseInt и parseFloat

/*
для получения чисел из такой строки существуют  parseInt и parseFloat
если в процессе чтения возникает ошибка, они возвращают полученное до 
ошибки число.

функция parseInt возвращает целое число, а parseFloat возвращает число с 
плавающей точкой:
*/

let valueThree = parseInt("150.58px");
console.log(valueThree); // 150
console.log(typeof valueThree); // number

let valueFour = parseFloat("150.58px");
console.log(valueFour); // 150.58
console.log(typeof valueFour); //number

let valueFive = parseFloat("a150.58px");
console.log(valueFive); // NaN
console.log(typeof valueFive); // number

/*
функция parseInt() имеет необязательный второй параметр
он определяет систему счисления, таким образом parseInt
может также читать строки с шестнадцатеричными числами,
двоичными числами и т.д.:
*/

console.log(parseInt('0xff' , 16)); //255
console.log(parseInt('ff', 16)); //255

// другие возможности

/*
объект Math, содержит различные математические функции и константы

-Math.random()
-возвращает псевдослучайное число в диапазоне от 0(включительно)
    до 1 (но не включая 1)
*/

console.log(Math.random());
console.log(Math.random());
console.log(Math.random()); //случайные числа

/*
Math.max(a, b, c...) / Math.min(a, b, c...)
возвращает наибольшее/наименьшее число из перечисленных аргументов
*/

console.log(Math.max(5, 85, -49)); //85
console.log(Math.min(5, 85, -49)); // -49

//Math.abs()
// возвращает абсолютное значение (модуль) числа

let num = -58;
console.log(Math.abs(num)); // 58

//Math.pow(n, power)
//возвращает число n, возведенное в степень power

console.log(Math.pow(5, 8)); //390625

// больше функций Math можно найти в интернете






