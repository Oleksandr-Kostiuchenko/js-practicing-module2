1. Модуль 1. Змінні та типи. Основи функцій


<!-- ===============  1. Змінні та типи даних =============== -->

 - Оголошення змінних з let и const
 - Перевизначення значення
 - Найменування змінних
 - Вибір між const і let
 - Виведення даних
 - Отримання даних
 - Примітивні типи даних: number, string, boolean, null, undefined, Symbol, BigInt
 - Оператор typeof
 - Суворий режим


const pricePerItem = 10;

console.log(pricePerItem);

pricePerItem = 30;

console.log(pricePerItem);

const firstName = prompt('Введіть ваше імʼя');

console.log(firstName);

const isAdult = confirm('Чи є вам 18 років?');

console.log(isAdult);

alert('Hello world!');

const someNumber = prompt('Введіть якесь число!');

console.log(typeof someNumber);

const someString = '10';
const someNumber = 10;

console.log(someString);
console.log(someNumber);

userAge = 30;

console.log(userAge);


 <!-- ===============  2. Арифметичні операції =============== -->
  
  - Оператори +, -, *, /, %, **
  - Комбіновані оператори


 const numA = 10;
 const numB = 3;

 const result = numA ** numB;

 console.log(result);


10 / 4 = 4 + 4


/*
 ? Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */
 const apples = 135;
 const grapes = 47;

 const totalFruits = apples + grapes;

 console.log(totalFruits);

 const diff = apples - grapes;

 console.log(diff);

/*
 ? Заміни вираз перевизначення комбінованим оператором
 */

 Без комбіновоного оператора
 let students = 100;

 students = students + 50;

 console.log(students);

 З використанням комбінованого оператора
 let students = 100;

 students += 50;

 console.log(students);

/*
 ? Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */
 const result = 108 + (223 - 2) * 5;

 console.log(result);

<!-- ===============  3. Рядки =============== -->

  - Конкатенація рядків
  - Шаблонні рядки
  - Довжина рядка
  - Індексація елементів
  - Незмінність рядків
 

? Обʼєднайте два рядки в один і виведіть до консолі.
const firstName = 'Chelsy';
const lastName = 'Emerald';

const fullName = firstName + ' ' + lastName + '.';

console.log(fullName);

? Підставте значення зміної quantity до рядка orderMsg, використоуючи шаблоні рядки.
? Має вийти рядок: You ordered {quantity} bots.
const quantity = 15;
const orderMsg = `You ordered ${quantity} bots.`;

console.log(orderMsg);

  ? Запросіть у користувача ім'я та прізвище і виведіть у консоль повідомлення:
  ? Hello <імʼя> <прізвище>, you are logged in.
const firstName = prompt('Your first name');
const lastName = prompt('Your last name');

const message = `Hello ${firstName} ${lastName}, you are logged in!`;

console.log(message);

? Дізнайтесь довжину рядка message.
const message = 'This string is 28 chars long';
const lengthOfMessage = message.length;

console.log(message);
console.log(lengthOfMessage);

 ? Склади фразу за допомогою шаблонних рядків
 ? {companyName} has {repairBots + defenceBots} bots in stock, 
 ? де companyName, repairBots та defenceBots - змінні вставлені в рядок.
 const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;

const msg = `${companyName} has ${repairBots + defenceBots} bots in stock.`;

console.log(msg); // "Cyberdyne Systems has 200 bots in stock"


<!-- ===============  3. Перетворення типів: рядки =============== --> 

- Явне перетворення типів
- Неявне перетворення типів


console.log(String(50));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));

console.log('5' + 3);
console.log(3 + '5');
console.log('5' + true);
console.log('5' + false);
console.log('5' + null);
console.log('5' + undefined);