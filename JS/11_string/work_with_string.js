// длина строки (свойства Lenght)

let textOne = "Hello!";
console.log(textOne.length);

// получаем символы строки

let text = "Hello!";
let firstSymbol = text[0];
let lastSymbol = text[text.length -1];
console.log(firstSymbol);
console.log(lastSymbol);

for (const char of text) {
    console.log(char); // будет выводится каждый символ строки
}

// изменение строки

let textTwo = "Antonia!";
text[6] = ".";
console.log(textTwo); 

// изменение регистра

let textThree = "Duisburg!";
console.log(textThree.toUpperCase());
console.log(textThree.toLowerCase());

// поиск подстроки 

// метод str.indexOf(substr, pos)

/*
этот метод ищет подстроку substr в строке str, начиная с позиции pos,
и возвращает позицию, на которой распологается совпадение,
либо -1 при отсутствии совпадений.
*/
let textFour = "Antonia!";
console.log(textFour.indexOf('nto'));
console.log(textFour.indexOf('nto', 3));

// методы includes, startsWith, endsWith

/*
более современный метод str.includes(substr, pos) возвращает true, если в строке есть искомая
подстрока, либо false, если нет.
*/

let textFive = "Antonia!";
console.log(textFive.includes('nto'));
console.log(textFive.includes('nto', 3));

console.log(textFive.startsWith('nto'));
console.log(textFive.endsWith('!'));

// регистр имеет значение 

let textSix = "Antonia!";
let searchText = "aN";

console.log(textSix.toLowerCase().includes(searchText.toLowerCase()));

/*
    в итоге indexOf стоит использовать тогда когда нам нужна 
позиция найденной подстроки
    в остальных случаях удобнее использовать includes
*/

// получение части строки (подстроки)

/*
в JaveScript существует ряд методов получения подстроки
но достаточно пользоваться одним
*/

/*
метод str.slice(start [, end]) - возвращает часть строки
от srart до end (не включая)
*/

let textSeven = "Antonia!";
console.log(textSeven.slice(1, 2));
console.log(textSeven.slice(-2, -1));
console.log(textSeven.slice(1));

// сравнение строк

// алфавитный порядок
console.log("А" > "Б");
console.log("а" > "Б");

console.log('Скрипт' > 'Скрипка');

// количество символов
console.log('Слайдер' > 'Слайд');

// регистр 
console.log('Фрилансер' > 'фрилансер');

/*
алгоритм сравнения двух строк:
1. Сначала сравниваются первые символы строк.
2. Если первый символ первой строки больше (меньше), чем первый символ второй,
    то первая строка больше (меньше) второй. Сравнение завершено.
3. Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.
4. Сравнение продолжается, пока не закончится одна из строк.
5. Если обе строки заканчиваются одновременн, то они равны. Иначе, большей считается более 
    длинная строка.
*/








