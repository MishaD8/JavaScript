// функции-колбэки

function calcSumm(numOne, numTwo, more, less) {
    let numSumm = numOne + numTwo;

    if (numSumm > 3){
        more();
    } else {
        less();
    }
}

function showMoreMessage() {
    console.log('больше чем 3'); // +++
}
function showLessMessage() {
    console.log('меньше чем 3');

}
calcSumm(1, 5, showMoreMessage, showLessMessage);
