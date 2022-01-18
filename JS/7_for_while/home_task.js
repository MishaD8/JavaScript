// задача №1
// вывести в консоль числа от 1 до 5

let num = 0;
while (num < 5) {
    console.log(num); //0, 1, 2, 3, 4
    num++;
}



// задача №2
let num1 = 8;
while (num1) {
console.log(num1); // 8, 7, 6, 5, 4, 3, 2, 1
num1--;
}

//задача №3. Переписать на while
// for (let num = 0; num < 3; num++) {
//    console.log(`Число: ${num}`);
//}

let num2 = 0;
while (num2 < 3) {
    console.log(num2); // 0, 1, 2
    num2++;
}

//задача №4. Прекратить работу цикла №1 когда size равна 1
//цикл №1
firsFor: for (let num3 = 0; num3 < 2; num3++) {
    //цикл №2
    for (let size = 0; size < 3; size++) {
        if (size == 1) {
            break firsFor;
        }
        console.log(size); //0
    }
}




