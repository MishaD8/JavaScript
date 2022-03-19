//47
// неизменяемость
/* Что напечатает на экран последний вызов? */

/* const name = 'Tirion';
console.log(name.toUpperCase()); // => TIRION
console.log(name); // Tirion */

/* Ответ на этот вопрос зависит от того, как вы поняли урок про неизменяемость примитивных типов данных. Вызов метода .toUpperCase() возвращает новое значение, в котором все буквы преобразованы в верхний регистр, но он не меняет (и не может этого сделать) исходную строку. Поэтому внутри константы (или переменной — это не важно) окажется старое значение: 'Tirion'. Эта логика справедлива для методов всех примитивных типов. Более того, попытка изменить значение свойства этих данных ни к чему не приведет: */ 

/* const name = 'Tirion';
console.log(name.length); // => 6
name.length = 100;
console.log(name.length); // => 6 */ 

// Вместо изменения значения можно заменить значение. Для этого понадобятся переменные:
let name = 'Tirion';
name = name.toUpperCase();
console.log(name); // => TIRION

let firstName = '  Grigor  \n';
firstName = firstName.trim();
console.log(firstName);

let secondName = '  Grigor   \n';
console.log(secondName.length);
console.log(secondName);