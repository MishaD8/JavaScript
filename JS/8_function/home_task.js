// задача №1
// кто попадет в консоль первым Вася или Коля?
function showName() {
    console.log('Vasya!');
}
setTimeout(showName, 0);
console.log('Kolya!'); // коля попал первым

// задача №2
// верно ли вызвана функция 
showMessage();
function showMessage() {
    console.log('сообщение'); // функция вызвана верно
}

//задача №3
// верно ли вызвана функция

/*
showMessage1(); // cannot access before initialization
let showMessage1 = function () { // функция вызвана не верно
    console.log('сообщение');
}
*/
// задача №4
// как решить проблему?

'use strict'
if (2 > 1) {
    function showMessage2() {
        console.log('сообщение');
    }
}
showMessage2(); // просто поменять имя переменной