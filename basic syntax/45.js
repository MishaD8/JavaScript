// 45
// свойства
/* Данные, которыми мы оперируем в своих программах, могут обладать важными свойствами — например, у строк есть длина. Как вы увидите далее, это свойство очень важно для реализации алгоритмов, связанных с преобразованием строки (как пример — переворот строки). Как узнать длину строки? Во многих языках длина строки вычисляется с помощью специальной функции и выглядит это примерно так:

import { length } from 'hexlet-basics/string';

const name = 'Robb';
console.log(length(name)); // => 4

В JavaScript свойства встроены прямо в язык. Они указываются через точку сразу после переменной (или константы):

const name = 'Robb';
const len = name.length;
console.log(len); // => 4

Свойства связаны с данными, у которых они берутся. Для примитивных типов все свойства описаны в документации, как например, у строк. При этом у чисел вообще нет свойств.

JavaScript позволяет обращаться к свойствам, которые не существуют (например, при опечатках). В таком случае их значением является undefined:

const name = 'Robb';
console.log(name.whatIsThat); // => undefined

Вопрос для самопроверки. Что распечатает код console.log(name[name.length]) для name, определенного выше? Почему ответ такой? */

const name = 'Robb';
const len = name.length;
console.log(len); // => 4

console.log(name.whatIsThat); // => undefined

console.log(name[name.length]); // undefined потому что 2 два раза name..

const name1 = 'misha';
console.log([name.length]) // 4

const text = 'a mind needs books as a sword needs a whetstone, if it is to keep its edge.';
console.log(text.length);