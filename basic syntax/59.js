/* JavaScript: Отрицание
Наряду с конъюнкцией (И) и дизъюнкцией (ИЛИ), часто используется операция «отрицание». Отрицание меняет логическое значение на противоположное. В программировании ему соответствует унарный оператор !.

Если есть функция, проверяющая чётность числа, то с помощью отрицания можно выполнить проверку нечётности:

const isEven = (number) => number % 2 === 0;

isEven(10);  // true
!isEven(10); // false
То есть мы просто добавили ! слева от вызова функции и получили обратное действие.

Отрицание — мощный инструмент, который позволяет лаконично выражать задуманные правила в коде без необходимости писать новые функции.

А что если написать так !!isEven(10)? Внезапно, но код сработает. В логике двойное отрицание подобно отсутствию отрицания вообще.

isEven(10);   // true
!isEven(10);  // false
!!isEven(10); // true
Задание
Реализуйте функцию isPalindrome(), которая определяет, является ли слово палиндромом или нет. Палиндром это слово, которое читается одинаково в обоих направлениях.
  isPalindrome('шалаш'); // true
  isPalindrome('ага'); // true
  isPalindrome('хекслет'); // false

  // Слова в функцию могут быть переданы в любом регистре
  // Поэтому сначала нужно привести слово в нижний регистр word.toLowerCase()
  isPalindrome('Ага'); // true
Для определения палиндрома необходимо перевернуть строку и сравнить ее с исходной. Для этого воспользуйтесь функцией reverse()

  reverse('мама'); // 'амам'
Реализуйте функцию isNotPalindrome(), которая проверяет что слово НЕ является палиндромом:
  isNotPalindrome('шалаш'); // false
  isNotPalindrome('ага'); // false
  isNotPalindrome('хекслет'); // true
Для этого, вызовите функцию isPalindrome() внутри isNotPalindrome() и примените отрицание. */

// решение учителя
//import { reverse } from '../../../src/hexlet/string.js';

//const isPalindrome = (word) => {
    //const lowerWord = word.toLowerCase();
    //return lowerWord === reverse(lowerWord);
//};

//const isNotPalindrome = (word) => !isPalindrome(word);

//export default isNotPalindrome;

// решение человека с форума
import { reverse } from '../../../src/hexlet/string.js';

function reverseString (str) {
    return str.split("").reverse().join("");
};

const isPalindrome = (word) => {
    const checkIn = (word = word.toLowerCase()) && (word === reverseString(word));

return checkIn;
};

'isPalindrome'
const isNotPalindrome = (word) => {
    return !isPalindrome(word);
};

console.log("is Palidrome: ");
console.log(isPalindrome('Wow'));
console.log(isPalindrome('wow'));
console.log(isPalindrome('text'));
console.log(isPalindrome('eyE'));

console.log("\nis Not Palidrome: ");
console.log(isNotPalindrome('Wow'));
console.log(isNotPalindrome('wow'));
console.log(isNotPalindrome('text'));
console.log(isNotPalindrome('eyE'));

export default isNotPalindrome;