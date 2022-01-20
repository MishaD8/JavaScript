// 32 
// неизменяемость примитивных типов
let firstName = 'Alexander';
console.log(firstName);
firstName[0] = 'B';
console.log(firstName);

firstName = 'Blexander'
console.log(firstName);

//задание (составить и вывести на экран слово из символов в определенном порядке)
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';
console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`); // hodor
