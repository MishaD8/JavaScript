//КОНСТАНТЫ

//Имена констант с заранее известными значениями 
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

/*
Имя константы со значением присвоенным
в процессе выполнения программы 
*/
const summSizes = 25 + 30;

// Смена значений в константе
// Объект с данными 
const userProfile = {
    name: "Freelance",
    age: 35,
    message: "Live, and work on free time!"
}
console.log(userProfile);

// Меняем значение одного из полей объекта
userProfile.age = 18;

//Ошибки нет, данные изменились
console.log(userProfile);



//VAR
// использование переменной до ее объявления 
// не важно используем "use strict" или нет 

// область видимости 

function testBlockLet() {
    let myAgeLet = 35;
}
testBlockLet();

//Переменная Не видна за пределами блока
//console.log(myAgeLet); 

function testBlockVar() {
    var myAgeVar = 35;
}
testBlockVar();

//Переменная НЕ видна за пределами блока 
//console.log(myAgeVar)

if (true) {
    let sezeLet = 50;
}
// Переменная НЕ видна за пределами блока 
//console.log(sizeLet);

if (true) {
    var sizeVar = 50;
}
// Переменная  ВИДНА за пределами блока 
console.log(sizeVar);

// Рекомендуется создавать новую переменную, что бы при большом проекте не запутаться, что
// у нас лежит в переменной.

//let userName = 'Freelance for live';
let userAge = 35;
let userMassage = 'Live, and work on free time!';

//ДОМАШКА

let userEyeColor = 'blue';

let user = 'Dimas';
let userName = 'Vasya';
user = userName;
console.log(user);

const BLOCK_SIZE_TWO = 14+50;

if (true) {
    var size = 15;
}
console.log(size);