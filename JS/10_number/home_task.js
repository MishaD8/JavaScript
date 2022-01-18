// задача №1. Получить верное значение округления

let fixOne = 1.005 +Number.EPSILON;
let numOne = Math.round(fixOne * 100) / 100;
console.log(numOne);

// задача №2. Получить число 135.58 из строки

let value = parseFloat("135.58px");
console.log(value);
console.log(typeof value);

// задача №3. Построить верное условие ветвления 

let valueOne = 58 + "Antonia";
if (58 + "Antonia" !== NaN) {
    console.log('результат NaN');  // будет NaN 
}

console.log(isNaN(58 + "Antonia"));// true

// задача №4
// найти максимальное число из 10, 58, 39, -150,0

console.log(Math.max(10, 58, 39, -150, 0 ));

// задача №5
// округлить число 58.858 до числа 58

let num = Math.floor(58.858);
console.log(num); // 58
