// задача №1. Верна ли запись?

let fls = "Karina";
let text = `Hello! I'm ${fls}`;

console.log(text);

// задача №2. Получить символ "r" строки:
let textOne = 'Karina';
let getSymbol = textOne[2];

console.log(getSymbol);

// задача №3. Верно?

let textTwo = 123 + "456";

console.log(textTwo); // не верно(получили 123456)
console.log(typeof textTwo); // string

// задача №4. Получить строку в верхнем регистре

let textThree = 'karina';
console.log(textThree.toLowerCase());

// задача №5. Получить подстроку "rin" из:

let textFour = 'karina';
console.log(textFour.slice(2, 5)); //rin

// задача №6. true или false?

let textFive = 'фрилансер' ;
console.log(textFive.includes('лан', 4)); // false



