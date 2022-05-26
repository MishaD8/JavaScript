// имена свойств

// Имя из двух и больше слов
let userInfo = {
    name: "Alena",
    age: 20, 
    "likes javascript": true, // имя из более чем двух слов надо записывать в кавычках
};
console.log(userInfo.name);
console.log(userInfo["likes javascript"]); // такое имя вписываем в квадратные скобки

// вычисляемое либо передаваемое имя

// вычисляемое имя
let firstPart = "likes";
let userInfo1 = {
    name: "Ulya",
    age: 20,
    [firstPart + " javascript"]: true,
};
console.log(userInfo1["likes javascript"]);

// передаваемое имя
let firstPart1 = "likes";
let userInfo2 = {
    name: "Kristina",
    age: 21,
    [firstPart1]: true,
};
console.log(userInfo2[firstPart1]);

// преимущество квадратных скобок
let key = "name";
console.log(userInfo2[key]);

// зарезервированные слова в именах
let userInfo3 = {
    let: "'Karina", // внутри объектов эти правила резервации не работают. Можем использовать как let так и for
    for: 21,
};
console.log(userInfo3.let);
console.log(userInfo3.for);

let userInfo4 = {
    0: "Tanya", // 0 тоже самое что "0"
};
console.log(userInfo4[0]);
console.log(userInfo4["0"]);


