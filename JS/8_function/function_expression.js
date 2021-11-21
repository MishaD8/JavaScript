// функциональное выражение (function expression)
// вызвать такую функцию можно только после создания (непосредственно в конце функции )

// let имя переменной = function (параметр, ...параметр) {
//    return выражение;
//};
let showMessage = function () {
    console.log('привет!');
};

showMessage();

// объявление функции (Function Declaration)
// вызвать такую функцию можно из любого места программы
// до обьявления функции, после обьявления и т.д.
function getSumm() {
    let summ = 1 + 2;
    console.log(summ);
};

let someVar = getSumm;

someVar();
getSumm();

// есть проблема с областью видимости здесь нам приходит на
// помощь функциональное выражение

'use strict'
if (2 > 1) {
    function getSumm() {
        let summ1 = 1 + 2;
        console.log(summ1);
    };
}
getSumm();

let getSumm2;

if  (2 > 1) {
    getSumm2 = function () {
        let summ2 = 1 + 2;
        console.log(summ2);
    };
}
getSumm2();

// стрелочная функция (arrow function)
//let имя переменной = (параметр, ...параметр) => выражение
// однострочная стрелочная функция
let getMessage = (text, name) => text + ', ' +name + '!';

console.log(getMessage('Привет', 'Di'));

// многострочная стрелочная функция
let getMessage1 = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;
};
console.log(getMessage1('Привет', 'Lolo'));