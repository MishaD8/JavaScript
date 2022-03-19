// 40
// аргументы как выражения

// простые вызовы
round(10.25);           // 10
console.log('Dragon');  // => 'Dragon'

// выражения в аргументах
round(8 + 2.25);            // 10
console.log('Dra' + 'gon'); // => 'Dragon'

// выражения с переменными в аргументах
number = 1.25;
round(number + 7 + 2); // 10

const text = 'Dr';
console.log(text + 'ag' + 'on');  // => 'Dragon'

// Заметьте схожесть: во всех вызовах в функции передается какая-то информация, 
// но иногда это простое, «вычисленное» значение (10.25, 'Dragon'), а иногда составное
//  выражение — «не вычисленное» значение (8 + 2.25, number + 7 + 2, text + 'ag' + 'on' и т.д.).
//  При этом во всех примерах передаётся один аргумент. Когда аргументов несколько, 
// они обязательно разделяются запятыми.

// import { calculateDistanceBetweenTowns } from 'hexlet-basics/got';

const from = 'The Twins';
const to = 'The Eyrie';
const distance = calculateDistanceBetweenTowns(`${from}-${to}`);
console.log(distance);