// Number (число)
/*
Числовой тип данных представляет значения как в виде целых чисел,
так и в виде чисел с плавающей точкой.
*/

let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);

/*
    infinity 
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/

//  -infinity 
let getInfinity = -58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);

// NaN
let getNan = 'freelancer' / 10;
console.log(getNan);
console.log(typeof getNan);

/*
если где - то в математическом выражении есть NaN, то результатом вычислений 
с его участием будет NaN.
*/
