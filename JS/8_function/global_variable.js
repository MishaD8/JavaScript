// глобальные переменные

let globalVar = "I'm a global variable";

function getSumm() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 1;
        console.log(globalVar);
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();

    let numSumm = numOne + numTwo;
    console.log(globalVar);
}
console.log(globalVar);

getSumm();

//в современном коде стараются свести к минимуму глобальные переменные хотя может 
//быть весьма полезной для хранения информации для всей программы.