// Применение функций

// надо стремится к тому что бы функции были простыми и выполняли только одно действие
// если надо выполнить еще одну функцию то можно использовать объеденение

// функция соединения строк
function createMessage(text , name) {
    return `${text}, ${name}!`;
}
// функция вывода в консоль
function showMessage(message) {
    console.log(message);
}
// объединяющая функция, вызывает обе функции
function initMessage(text, name) {
    showMessage(createMessage(text, name));
}

initMessage('Привет', 'Алена');