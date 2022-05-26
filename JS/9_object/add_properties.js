// добавление свойства
let userInfo = {
    name: "Melana",
}

console.log(userInfo);

userInfo.age = 30;

console.log(userInfo);

userInfo['likes javascript'] = true;

console.log(userInfo);

userInfo.address = {
    city: "Izmail",
    street: "Pirogova",
};

console.log(userInfo);

// удаление свойства

let userInfo1 = {
    name: "Lorenco",
    age: 30,
    "likes javascript": false
}
console.log(userInfo1);

delete userInfo1.age;

console.log(userInfo1);

delete userInfo1["likes javascript"];

console.log(userInfo1);