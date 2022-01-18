// цикл "for_in"

// для перевода всех свойств объекта используется цикл for...in.
// этот цикл отличается от изученного ранее цикла for(;;).

/*
for (let key in object) {
    тело цикла выполняется для каждого свойства объекта
}
*/

let userInfo = {
    name: "Ester",
    age: 23,
    address: {
        city: "Izmail",
        street: "Freedom",
    }
}

for (let key in userInfo) {
    // ключи
    console.log(key); // name, age, address
    // значение ключей
    console.log(userInfo[key]); // Ester, 23, {city: 'Izmail', street:'Freedom'}
}

for (let key in userInfo.address) {
    //ключи
    console.log(key); // city, street
    // значения ключей
    console.log(userInfo.address[key]); // Izmail, Freedom
}
