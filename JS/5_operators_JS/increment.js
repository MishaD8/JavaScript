//Инкремент / декремент

//Инкремент ++
const  addUser = 2;
addUser++;
console.log(addUser); //3

/*
Работает так же как и addUser = addUser + 1; 
или 
addUser += 1; 
*/

//Декремент --
const removeUser = 2;
removeUser--;
console.log(removeUser); //1

//Инкремент / декремент можно применить только к переменной. Попытка использовать 
// его на значении, типа 5++, приведёт к ошибке.

console.log(5++); //Error

//Постфиксная форма
usersCounter++;
usersCounter--;
const usersCounter = 0;
const newUsers = usersCounter++;
console.log(newUsers); // 0

//Префиксная форма
++usersCounter;
--usersCounter;
const usersCounter1 = 0;
const newUsers1 = ++usersCounter1;
console.log(newUsers1); //1

//Итого, если результат оператора не используется, а нужно только увеличить /
// уменьшить переменную, тогда без разницы, какую форму использовать:
const usersCounter3 = 0;
++usersCounter3;
console.log(usersCounter3); //1

//Если хочется тут же использовать результат, то 
// нужна префиксная форма:
const usersCounter4 = 0;
console.log(++usersCounter4); //1

//Если нужно увеличить и при этом получить значение
// переменной до увеличения - нужна постфиксная форма:
const usersCounter5 = 0;
console.log(usersCounter5++);
console.log(usersCounter5);//1

// инкремент  / декремент можно использовать в 
// любых выражениях. При этом их приоритет будет выше, 
// чем у большинства других арифмитических операций:

const usersCounter6 = 0;
const newUsers2 = 2 * ++usersCounter6;
console.log(newUsers2); //2

//Оператор запятая 

//Предоставляет нам возможность вычислять несколько выражений,
//разделяя их запятой , . Каждое выражение выполняется, но возвращается
// результат только последнего.

const usersCounter7 = (8 + 2, 19 + 1);
console.log(usersCounter7); //20

/*
Побитовые операторы
AND(и) (&)
OR (или) ( | )
XOR (побитовое исключающее или) ( ^ )
NOT (не) ( ~ )
LEFT SHIFT (левый сдвиг) ( << )
RIGHT SHIFT (правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT (правый сдвиг с заполнением нулями) ( >>> )
*/





