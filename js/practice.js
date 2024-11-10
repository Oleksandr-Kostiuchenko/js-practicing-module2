// ====================================== Розгалуження та цикли ====================================== //

// 1. Виведіть числа від 1 до 100, пропускаючи кожне четверте число.

// let minNum;
// let maxNum = 100;

// for(minNum = 1; minNum <= maxNum; minNum++) {
//     if(minNum % 4 !== 0) {
//         console.log(minNum);
//     }
// }

// 2. Напишіть цикл, який обчислює суму всіх парних чисел від 1 до числа n, яке вводить користувач через prompt.
// let n = prompt('Write an number');
// let sum;

// for(let i = 1; i <= n; i++ ) {
//     if (i % 2 === 0) {
//         sum = Number.parseInt(n) + i;
//     }
// }

// console.log(sum);

// 2. Напишіть цикл, який просить користувача ввести число більше 50. Якщо число менше 50, запит повторюється

// let userNumber;

// do {
//     userNumber = Number(prompt('Write a number that is bigger than 50.'));
    
//     if (userNumber > 50) {
//         console.log('Thanks!');
//         break;
//     }
// } while (userNumber <= 50);

//TODO: 3. Напишіть цикл, який просить користувача ввести число більше 50. Якщо число менше 50, запит повторюється
//? Даний рядок, що складається із символів, наприклад, 'abcde'. 
// Перевірте, що першим символом цього рядка е буква "а"
// Якщо це так виведіть "так", Інакше виведіть "ні

// let str = prompt('Write smth');

// if (str.toLowerCase().startsWith('a')){
//     console.log('так');
// }else{
//     console.log('ні');
// }

// str.toLowerCase()[0] === "a" ? console.log('yes') : console.log('no');

//TODO: 4. Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55
// до 99 включно
// Якщо так, вивести в консоль "Число
// потрапляє в діапазон
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон

// userNum = prompt('Write a number in range of 55-99');

// if (Number.parseFloat(userNum) >= 55 && Number.parseFloat(userNum) <= 99){
//     console.log('Great! Number is in range.');
// }else {
//     console.log('Number is not in range');
// }

// userNum >= 55 && userNum <= 99 ? alert('Great! Number is in range.') : alert('Number is not in range');

//TODO: 5. Є 3 вікові групи: діти (0-16), дорослі (17-60) пенсіонери (61-100). 
// До якої групи відноситься Максим, якщо ному 55 років. Назву групи вивести на екран.

// const ageMaxim = prompt('Bведіть вік Максима');

// function clasifateAge() {
//     ageMaximOptimized = Number.parseFloat(ageMaxim);
    
//     if (ageMaximOptimized >= 0 && ageMaximOptimized <= 16) {
//         return('Категорія віку: діти (0-16)');
//     } else if (ageMaximOptimized >= 17 && ageMaximOptimized <= 60) {
//         return('Категорія віку: дорослі (17-60)');
//     }else if (ageMaximOptimized >= 61 && ageMaximOptimized <= 100) {
//         return('Категорія віку: пенсіонери (61-100)');
//     }
// }

// console.log(clasifateAge());

//TODO: 6. Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати "Кава", "Чай" чи "Сік", 
// та залежно від виду напою оголоси суму досплати. Використовувати switch.

// let drink = prompt('Замовте каву, чай або сік');

// function drinkMessage(drink) {
//     switch(drink.toLocaleLowerCase()){
//         case "кава":
//             price = 4;
//             console.log(`Ви замовили каву. Сума до сплати ${price}$`);
//             break;
    
//         case "чай":
//             price = 2.5;
//             console.log(`Ви замовили чай. Сума до сплати ${price}$`);
//             break;
    
//         case "сік":
//             price = 3;
//             console.log(`Ви замовили сік. Сума до сплати ${price}$`);
//             break;

//         default:
//             console.log(`Вибачте, але в нас нема "${drink}"`);
//     }
// }

// drinkMessage(drink);


//TODO: 7. Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином


// let star = "*";
// for (let i = 1; i <= 7; i++){
//         console.log(star);
//         star += '*'; 
// }