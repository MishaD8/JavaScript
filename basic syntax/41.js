// 41
// вызов функций в аргументах функций
// import { round } from 'hexlet-basics/math';

// const number = -100.234203;
// const result = round(Math.abs(number), 2); // 100.23

// Можно сделать то же самое, но с промежуточными шагами:
// const number = -100.234203;
// const module = Math.abs(number); // 100.234203
// const result = round(module, 2); // 100.23

import { getParentFor } from 'hexlet-basics/got';

const joffreyMom = getParentFor('Joffrey Baratheon');
console.log(getParentFor(joffreyMom, 'father'));