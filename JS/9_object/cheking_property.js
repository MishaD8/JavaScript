// проверка существования свойства

let userInfo = {
    name: "Olya",
    age: 21,
}
console.log(userInfo.age);

if (userInfo.age) {// true или false
    console.log(userInfo.age);
}

// опциональная цепочка

let userInfo1 = {
    name: "Rita",
    age: 22,
    //address: {
        //city: "Odessa",
       // street: "Freedom",
    //}
}
//console.log(userInfo1.address.street);
console.log(userInfo1?.address?.street);

// оператор "in"

let userInfo2 = {
    name: "Vika",
    age: 22,
    address: {
        city: "Izmail",
        street: "Freedom",
    }
}
if ("name" in userInfo2) {
    console.log(userInfo2.name); // код просто не сработает если не будет name в объекте
}

/*
в большинстве случаев сработает сравнение с undefined.
либо опциональная цепочка ?.
но есть особый случай, когда свойство существует,
но содержит значение undefined. 
в этом случае необходимо использовать "in".
*/

let userInfo3 = {
    name: undefined,
    // ... следующие свойства
}
/*
if (userInfo3.name) { // false
    console.log(userInfo3.name);
}
*/
if ("name" in userInfo3) { //true
    console.log(userInfo3.name); // вот для этого и нужен оператор "in" что бы выводить undefined
}