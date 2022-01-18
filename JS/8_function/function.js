// объявление функций (function declaration)

/*
function имя(параметры) {
    тело (код) функций
}
*/

// имя функций и её предназначение
/*
Как правило, в имени используются определенные префиксы, обозначающие
действия, после которых следует объект действия.

Например, функции, начинающиеся с 
"show..." - обычно что-то показывают,
"get..." - возвращают значение,
"calc..." - что-то вычисляют,
"check..." - что-то проверяют и возвращают логическое значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры 
calcSum - посчитать сумму 
и т.д.
*/

// Функция вывода сообщения

// showMessage(); можем и перед самой функцией вызвать
function showMessage() {
    console.log('Сообщение');
}

showMessage();
//showMessage(); можем вызывать сколько захотим
//showMessage();

// вложенность и видимость функций 

//"use strict"  в таком режиме функцию не получится вызвать мы увидим ошибку.
//if (2 > 1)
function getSumm() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 1;
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();

    let numSumm = numOne + numTwo;
    console.log(numSumm); //3
}

getSumm();

// локальные и внешние переменные
// локальная переменная 
function showMessage() {
    //локальная переменная
    let message = "сообщение";
    console.log(message);
}

// console.log(message); если обьявить внутри функции то за пределами уже не будет видна эта функция.

//внешняя переменная
/*
let message1;

function showMessage() {
    //используется внешняя переменная
    message1 = "сообщение";
}
showMessage();
console.log(message1);
*/


