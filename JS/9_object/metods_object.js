// методы объекта

let userInfo = {
    name: "Lesya",
    age: 21,
    address: {
        city: "Izmail",
        street: "Freedom",
    },
    /*
    showInfo: function () {
        console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
        
    }
    */
    showInfo () {
        console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);

    }
}
userInfo.showInfo(); // вызываем таким образом

//использование "this"

let userInfo1 = {
    name: "Lesya",
    age: 21,
    address: {
        city: "Izmail",
        street: "Freedom",
    },
    /*
    showInfo: function () {
        console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
        
    }
    */
    showInfo () {
        //console.log(`${userInfo1.name}, ${userInfo1.age} лет. Адрес: г.${userInfo1.address.city}, ул.${userInfo1.address.street}`);
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
    }
}
userInfo1.showInfo();

// пример с "this"
let userInfo2 = {
    name: "Linda",
    age: 22,
    address: {
        city: "Izmail",
        street: "Freedom",
    },
    showInfo1() {
        /*
        function show() {
            console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
        } будет ошибка так как this обращается к function show () а там нет никаких name, age, address ... 
        */ 
        // у стрелочной функции нет своего "this" используются 
        // значения из внешнего метода userInfo.showInfo()
        let show1 = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
        show1();
    }
}
userInfo2.showInfo1();

// преимущество "this"

let userInfo3 = {
    name: "Lola",
    age: 22,
    address: {
        city: "Odessa",
        street: "Freedom",
    },
    showInfo2() {
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
       // console.log(`${userInfo3.name}, ${userInfo3.age} лет. Адрес: г.${userInfo3.address.city}, ул.${userInfo3.address.street}`);
        
    }
}
userInfo3.showInfo2();

let user = userInfo3;
userInfo3 = null;
user.showInfo2();
