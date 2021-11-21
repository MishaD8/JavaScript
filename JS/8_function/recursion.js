//рекурсия

/*
function calcSumm(numOne, numTwo) {
    let result = 1;
    / умножим result на numOne numTwo раз в цикле
    for (let i = 0; i < numTwo; i++) {
        result *= numOne;
    }
    return result;
}
console.log(calcSumm(2, 3)); // 8
*/

//-------------
function calcSumm(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else {
        return numOne * calcSumm(numOne, numTwo -1);
    }
}
console.log(calcSumm(2,3)); // 8