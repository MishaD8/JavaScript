// тип данных Symbol

// создаем символ id с описанием (именем) "id"
let id = Symbol("id");
let userInfo = {
    name: "Katya",
    age: 19,
    [id]: "имеем что нибудь"
};
console.log(userInfo);

/*
основное применение символов:
1. "Скрытые" свойства объектов 
    Символьное свойство не появится в for..in
2. Использование системных символов 
    Symbol.iterator, Symbol.toPrimitive и т.д.
*/

// вложенность 

let userInfo1 = {
    name: "Larisa",
    age: 20,
    adress: {
        city: "Izmail",
        street: "freedom",
    }
}
console.log(userInfo1); 
console.log(userInfo1.adress);
console.log(userInfo1.adress.city);

// свойство из переменной 

function makeUserInfo(name, age) {
    return {
        name: name,
        age: age,
        // ...другие свойства
    };
}
let user = makeUserInfo("Sveta", 19);
console.log(user);

// упрощенная версия
function makeUserInfo1(name, age) {
    return {
        name, //тоже самое что и name: name,
        age, // тоже самое что и age: age, 
        "likes javascript": true,
        // ...другие свойства
    };
}
let user1 = makeUserInfo1("Anya", 20);
console.log(user1);
