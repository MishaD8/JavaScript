
// 37
// аргументы по умолчанию

// import { round } from 'hexlet-basics/math';
// const result = round(10.25, 0); //10

// Мы передали в неё два аргумента: число и точность округления. 
// 0 означает, что округление будет до целого значения, то есть дробная часть просто
// отбрасывается.

// Чаще всего нужно округлять именно до целого числа (а не до десятых, например),
// поэтому создатели функции round() сделали второй аргумент необязательным и задали
// ему внутри функции значение по умолчанию 0. Значит, можно не указывать второй аргумент,
// а результат будет тем же:

// const result = round(10.25); //10

// Если нужна другая точность, то можно передать аргумент

// округление до одного знака после запятой
// const result = round(10.25, 1); // 10.3