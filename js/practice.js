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

let userNumber;

do {
    userNumber = Number(prompt('Write a number that is bigger than 50.'));
    
    if (userNumber > 50) {
        console.log('Thanks!');
        break;
    }
} while (userNumber <= 50);
