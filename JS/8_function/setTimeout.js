
// планирование setTimeout и setInterval

/*
Что бы реализовать планирование существует два метода:
1. setTimeout позволяет вызывать функцию один раз через определенный интервал времени
2. setInterval позваляет вызывать функцию регулярно, повторяя вызов через 
    определенный интервал времени.
*/

//setTimeout(функция или код, задержка, параметр, ...параметр);
//setInterval(функция или код, задержка, параметр, ...параметр);

/*
function showMessage(text, name) {
    console.log(`${text}, ${name}!`);  
}

setTimeout(showMessage, 3000, 'Привет', 'Olya'); через 3 секунды выедет сообщение
*/

/*
function showMessage(text, name) {
    console.log(`${text}, ${name}!`);
}

setInterval(showMessage, 500, 'Привет', 'Olya'); каждые пол секунды будет выводить результат
*/
/*
function showMessage(text, name) {
    console.log(`${text}, ${name}!`);
    setTimeout(showMessage, 500, text, name);
}
*/
//setTimeout(showMessage, 500, 'Привет', 'Lena'); //такой подход даст более точную 
                                                                                // задержку в самой программе

//пример
/*
function showNumber(num) {
    console.log(num);
    if (num < 10) {
        setTimeout(showNumber, 1000, ++num);
    }
    
}
setTimeout(showNumber, 1000, 1); // каждую секунду выводит цифру (у нас выводит до 10)
/ так как условие такое if (num < 10)
*/

// clear timeout
function showNumber1(num) {
    console.log(num);
    let timeId = setTimeout(showNumber, 1000, ++num);
    if (num === 6) {
        clearTimeout(timeId);
    }
}
setTimeout(showNumber, 1000, 1); // останавливает код после того как достигает 6. 

// пример 
let result = 0;
function showNumber(num1) {
    result += num1;
    console.log(result);
    if (result === 5) {
        clearInterval(timeId);
    }
}
let timeId = setInterval(showNumber, 1000, 1);
