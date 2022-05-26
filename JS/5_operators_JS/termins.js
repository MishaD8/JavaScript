// Термины: "унарный", "бинарный", "операнд"

/*
Операнд - это то к чему применяется оператор, их еще называют аргументами.
*/

//Примеры:
const userAge = 30 - 6; // Числа 30 и 6 - это операнды
// либо 
const userHeight = h - y; // Переменные h и y - это операнды

/* 
Бинарными называются операторы которые применяются к двум операндам.
В нашем примере вычитание -, это бинарный оператор. 
*/
const userAge = 30 - 6;
/*
Унарным считается оператор, который применен только к одному операнду, например: 
*/
const userCash = -800;

const x;
//Сложение +
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

//Вычитание - 
x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

// Умножение *
x = 2 * 3;
console.log(`Результат умножения: ${x}`);

// Деление /
x = 10 / 2;
console.log(`Результат деления: ${x}`);

//Взятие остатка от деления %
x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);
//Проверка: 11 = 3*3 (неполное частное от деления) + 2 (остаток)

//Возведение в степень **.
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);
//Число 5 умноженное на себя 3 раза 5*5*5 = 125 

//Специальные возможности операторов 

// Применение оператора сложения к строкам 
const resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne);

//Если в выражении есть строка, то есть если хотя бы один операнд будет строкой,
// то конечный результат тоже будет строкой
const resultTwo = "Фрилансер " + 58;
console.log(resultTwo);
console.lot(typeof resultTwo);

//Порядок значения не имеет 
const resultThree = 58 + " Фрилансер";
console.log(resultThree);

//Казусы 
const resultFour = 2 + "2"; //"22"
console.log(resultFour);

//Операции до сложения со строкой выполняется как обычно
const resultFive = 58 - 20 + "Фрилансер";
console.log(resultFive);  

//Работа других операторов
const resultSix = "25" - 5;
console.log(resultSix); // 20
console.log(typeof resultSix); // number

// Или 

const resultSeven = 10 * "80";
console.log(resultSeven); //800
console.log(typeof resultSeven); // number

//Недопустимая операция
const resultEight = 3 * "Фрилансер";
console.log(resultEight); //Вернет NaN
console.log(typeof resultEight);

//Унарный оператор сложения +

//Со строками
const resultNine = +"25";
console.log(resultNine); //25
console.log(typeof resultNine); //number

//С числами 
const resultTen = +10;
console.log(resultTen); //10
console.log(typeof resultTen); //number

//Пример
const users = "25";
const admins = "10";
console.log(users + admins); // 2510 string

console.log(+users + +admins); //35 number

//Более длинная запись
console.log(Number(users) + Number(admins)); //35 number

//Приоритет операторов 

//Разный приоритет 
const resultEleven = 2 - 1 * 5;
console.log(resultEleven); // -3

//Скобки 
const resultTwelve = (2 - 1) * 5;
console.log(resultTwelve); // 5

//Одинаковый приоритет 
const resultThirteen = 2 - 1 + 5;
console.log(resultThirteen); // 6
//Оператор присвоения 

//Сокращенная запись вычислений с присваванием 

const assignment = 5;
assignment = assignment + 3; //8
assignment = assignment * 2; //16

//Можно записать так:

const assignment1 = 5;
console.log(assignment1);
assignment1 += 3;
console.log(assignment1); //8
assignment1 *= 2;
console.log(assignment1); //16

const assignment3 = 5;
console.log(assignment3);
assignment3 += 1 + 2;
console.log(assignment3); // 8


