// Null
/*
Null, также как и Undefind,
содержит только одно значение null
*/
/*
// пример
let userName = null;
console.log(userName);
*/

// пример 
// попытка обратиться к объекту которого нет 
let block = document.querySelector(' .block');

// получаем null
console.log(block);

// вернет тип object (официальная ошибка со времен создания JS). null не является объектом
console.log(typeof block);
