// копирование объектов

// при копировании объекта в другую переменную сам объект не дублируется, 
// а копируется только ссылка на него

let userInfo = {
    name: "Viola",
    age:  40,
}
console.log(userInfo);

let user = userInfo;

console.log(user);

user.age = 30;

console.log(userInfo);

// дублирование объектов (Object.assign)
// синтаксис

// Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);

let userInfo1 = {
    name: "Regina",
    age: 23,
}

let user1 = Object.assign({}, userInfo1);

user1.age = 20;

console.log(userInfo1);
console.log(user1);

// еще про Object.assign

let userInfo2 = {
    name: "Tina",
    age: 22,
}
Object.assign(userInfo2, {['likes javascript']: true, city:"Izmail"});
console.log(userInfo2);