// задача №1 (верна ли запись)

const userInfo = {
    name: "Mira",
    age: 19,
}
console.log(userInfo); // запись верна

// задача №2 (что будет в консоли?)

let userInfo1 = {
    name: "Ulya",
    age: 19,
    "58": 'значение'
}
console.log(userInfo1[58]); // значение

// задача №3 (что будет в консоли?)

let userInfo2 = {
    name: "Elona",
    age: 24,
}
let user = userInfo2;
user.age = 19;

console.log(userInfo2); // {name: 'Elona', age: 19}

// задача №4 (что будет в консоли?)

let userInfo3 = {
    name: "Karolina",
    age: "19",
    showInfo() {
        console.log(`${this.name}`);
    }
}
let user1 = userInfo3;
userInfo3 = null;
//user.showInfo();// user.showInfo is not a function

// задача №5 (что будет в консоли?)

let userInfo4 = {
    name: "Ivana",
    age: 22,
}
for (const key in userInfo4) {
    const value = userInfo4[key];
    console.log(value);
}

// задача №6 (что будет в консоли?)
let userInfo5 = {
    name: "Vika",
    age: 21,
    address: {
        city: "Izmail"
    }
}
for (const key in userInfo5.address) {
    console.log(userInfo5.address[key]); // Izmail
}

// задача №7 (верна ли запись?)

const userInfo6 = {
    name: "Lina",
    age: 23,
    "likes js": true
}
//console.log(userInfo6."likes js"); // запись не верна так как два слова должны быть в кв.скобках и без точки
console.log(userInfo6["likes js"]);

// задача №8

/*
1. Создать пустой объект userInfo.
2. Добавить свойство name со значением Ulya.
3. Добавить свойство age co значением 20.
4. Изменить значение свойства name на Ira.
5. Удалить свойство name из объекта.
*/

let userInfo7 = {
    name: "Ulya",
    age: 20,
}

let user2 = userInfo7;
user2.name = "Ira";
console.log(userInfo7);

delete user2.name;

console.log(userInfo7);



