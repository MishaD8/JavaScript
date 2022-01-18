//Синтаксис
const message = "Привет, Миша!";

if (2 > 1) {
    //код выполняется если выражение в скобках вернет true (истину)
    console.log(message);
}

const message1 = "Antonia!";

const first = 5;
const second = 5;

if (first === second) {
    //код выполняется только если выражение в скобках вернет true 
    console.log(message1);
}

const message2 = "Amsterdam!";

if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
    console.log(message2);
}

//Преобразование типов
const message3 = "Lebara";
if ("") {
    console.log(message3);
}

//более короткая запись
if (2 > 1) console.log(message3);

//Блоки ELSE и ELSE IF
const message4 = "Hi, Misha!";
const number = 5;

if (number > 1) {
    console.log(message4);
} else {
    console.log("Error:(");
}

const message5 = "Hi, Misha!";
const number1 = 5;

if (number1 > 50) {
    console.log("5 more 50");
} else if (number1 > 30) {
    console.log("5 more 30");
} else if (number1 > 10) {
    console.log("5 more 10");
} else if (number1 > 1) {
    console.log("5 more 1");
} else {
    console.log("Error:(");
}

//Условный оператор "?"
let message6 = "Hi";
/*
let messageEnd;

if (5 > 1) {
    messageEnd = ", Ira!";
} else {
    messageEnd = ", Olya";
}

message6 += messageEnd;
console.log(message6);
*/
let messageEnd = (5 > 1) ? ", Ira!" : ", Olya!";

message6 += messageEnd;
console.log(message6);

// Оператор "?" является тернарным. Это единственный оператор у которого целых 3 операнда.
let messageEnd1;

if (5 > 50) {
    messageEnd1 = ", Ira ";
}else if (5 > 30) {
    messageEnd1 = ", Olya";
} else if (5 > 10) {
    messageEnd1 = ", Katya";
} else if (5 > 1) {
    messageEnd1 = ", Nastya";
} else {
    messageEnd1 = ", Ulya";
}

messageEnd1 = 5 > 10 ? ", Ira!":
    5 > 30 ? ", Olya!" :
        5 > 10 ? ", Katya!" :
            5 > 15 ? ", Nastya!" : ", Ulya!"

message6 += messageEnd1;
console.log(message6);

5 > 10 ? console.log("Hi, Ulya!") :
    console.log("Hi, Olya!");

if (5 > 10) {
    console.log("Hi, Ulya!")
} else {
    console.log("Hi, Olya");
}
