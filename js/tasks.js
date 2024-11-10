//TODO: Завдання 1
//*  Оголоси функцію calculateBMI(weight, height), яка приймає вагу (в кг) і зріст (в м) і повертає обчислений індекс маси тіла. Результат округли до одного знака після коми.

// let weight = prompt('What is your body weight? (in kg)');
// let height = prompt('What is your height? (in m)');


// function calculateBMI(weight, height){
//     bmi = Number.parseFloat(weight) / Number.parseFloat((height**2));
//     bmiRounded = Number(bmi.toFixed(1));
//     console.log(`Your body mass index is ${bmiRounded}`);

//     if(bmiRounded <= 18.5) {
//         console.log('This index shows insuficcent weight. You should gain weight!');
//         console.log();
//     } else if (bmiRounded >= 18.5 && bmiRounded <= 25){
//         console.log('This is normal index. Everything is great!');
//     } else if (bmiRounded >= 25 && bmiRounded <= 40){
//         console.log('This index shows overweight. You should lose weight!');
//     }
// }

// calculateBMI(weight, height);

//TODO: Завдання 2
//*  Напиши функцію isEven(number), яка приймає число і повертає true, якщо число парне, і false, якщо непарне.

// let userNum = prompt('Write random number');

// function checkEvenNum(userNum){
//     if(Number(userNum) % 2 === 0){
//         console.log('Number is even');
//     } else {
//         console.log('Number is odd');
//     }
// }

// checkEvenNum(userNum);

//TODO: Завдання 3
//*  Оголоси цикл fizzBuzz(n), яка виводить числа від 1 до n. Для чисел, кратних 3, виводь "Fizz", для чисел, кратних 5 — "Buzz", а для чисел, кратних 3 і 5, — "FizzBuzz".

// let maxNum = 100;

// for(let i = 1; i <= maxNum; ++i) {
    
//     if (i % 5 === 0 && i % 3 === 0){
//         console.log('FizzBuzz');
//     }else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else{
//         console.log(i);
//     }
// }

//TODO: Завдання 4
//*  Напиши програму, яка запитує у користувача пароль, доки він не введе правильний пароль "secure123". Після кожної невірної спроби виводь повідомлення "Wrong password, try again.". Якщо пароль введено правильно, виведи повідомлення "Access granted!".

// const correctPassword = "secure123";
// let userPassword;

// do{
//     userPassword = prompt('Write password');
    
//     if(userPassword !== correctPassword){
//         alert('Wrong password, try again.');
//     } else if(userPassword === correctPassword){
//         alert('Access granted!');
//     }
// }while(userPassword !== correctPassword)

//TODO: Завдання 5
//*  Оголоси функцію orderCoffee, яка приймає три параметри:
//? coffeeType — тип кави.
//? size — розмір (малий, середній або великий).
//? hasDiscount — логічне значення, яке вказує, чи має клієнт знижку.

// *Ціни:
//? Малий — 5 доларів
//? Середній — 7 доларів
//? Великий — 9 доларів
//? Якщо hasDiscount дорівнює true, нараховується знижка 10%.

//* Функція повинна повертати повідомлення:
//? "You ordered a [size] [coffeeType] coffee. Total price is [totalPrice]$.",
//? де totalPrice — загальна вартість із врахуванням знижки, якщо вона є.

let coffeeType;
let coffeSize = prompt("What size would you like? small - 5$, medium - 7$, large - 9$");
let coffePrice;

if(coffeSize.toLowerCase() = "small"){
    coffePrice = 5;
}else if(coffeSize.toLowerCase() = "medium"){
    coffePrice = 7;
} else if(coffeSize.toLowerCase() = "large"){
    coffePrice = 9;
}

const correctPromo = "COFFEE20";

let totalPrice ;

let userPromo = prompt('Write promo to recieve a discount');
let hasDiscount = userPromo === correctPromo ? true : false;

