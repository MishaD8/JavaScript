//домашка

/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/

//Вариант №1
let userAge = 36;
let userInfo = `Freelancer ${userAge}`; // были двойные кавычки

console.log(userInfo);

//Вариант №2 
let userHeight = 145 / 0;
// вернется значение NaN (не верно)
console.log(userHeight);  // вернулось infinity

//Вариант №3
let userName;
// вернется тип данных Null (не верно)
console.log(typeof userName); // вернулось undefined

//Вариант №4
let userSize = "25" / "5";
//вернется тип данных Number (верно)
console.log(typeof userSize);