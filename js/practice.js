// ====================================== Змінні та типи даних ====================================== //

// 1. Оголоси змінні для назви товару, ціни за одиницю і кількості товару. Виведи їх значення в консоль.
console.log("TASK 1")

const product = "apple";
const productPrice = 10;
const productQuantity = 3;

console.log(product)
console.log(productPrice)
console.log(productQuantity)

// 2.  Є корзина з яблуками. Задай три змінні: basketWeight (маса корзини в грамах), appleWeight (маса одного яблука в г), totalApples (загальна кількість яблук). Виведи, скільки яблук у корзині, якщо знаєш лише її масу і масу одного яблука. Завдання: Створи змінні для обчислення кількості предметів у контейнері, знаючи загальну вагу та вагу одного предмета. Виведи кількість предметів у консоль.
console.log("TASK 2")

const basketWeight = 800;
const appleWeight = 100;
let totalApples = undefined;

totalApples = basketWeight / appleWeight;
console.log(`There are ${totalApples} apples in basket, that weights 800g. One apple is 100g.`);

// 3.  Попроси користувача ввести імя, вік і країну. Виведи повідомлення у форматі "Привіт, Олена! Тобі 25 років, ти з України." Завдання: Запроси у користувача три різні дані (наприклад, ім'я, вік, місто). Виведи результат, зібравши ці дані в одному повідомленні.
console.log("TASK 3")

const userName = prompt('Ведіть ваше імя')
const userAge = prompt('Скільки Вам років?')
const userCountry = prompt('Звідки Ви?')

console.log(`Дайте трохи подумати, хмм.... Вас звати ${userName}, Вам ${userAge} років та ви з ${userCountry}, все вірно, правда?`);

// ====================================== Арифметичні операції ====================================== //

// 4.  Визнач ціну одного ананасу і одного банана, загальну кількість фруктів та обчисли загальну суму витрат на їх покупку. Виведи результат.
console.log("TASK 4")

const banana = 5;
const bananaPrice = 3;

const pineapple = 1;
const pineapplePrice = 9;

const totalFruits = banana + pineapple;
const totalPrice = banana * bananaPrice + pineapple * pineapplePrice;

console.log(`Number of total fruits is ${totalFruits} with ${banana} bananas and ${pineapple} pineapple. Total cost is ${totalPrice} coins`);

// 5.  Створи змінну для початкової кількості студентів у класі, збільш її на 20% та виведи нове значення.
console.log("TASK 5")

let initialStudentsQuantity = 40;
const additionalPercentage = 20;
const additionalStudents = initialStudentsQuantity/100 * additionalPercentage;

actualStudentsQuantity = initialStudentsQuantity + additionalStudents;

console.log(`There were ${initialStudentsQuantity} students, but then ${additionalStudents} have joined. So now there are ${actualStudentsQuantity} students in total.`);

// ====================================== Рядки ====================================== //

// 6.  Об'єднай ім'я та прізвище користувача в один рядок і додай повідомлення про те, що користувач увійшов в систему. Використовуй функції
console.log("TASK 6");

const firstName = undefined;
const secondName = undefined;

function loginMessage(firstName, secondName) {
    const message = `Hello dear, ${firstName} ${secondName} you are logged in!`;
    return message;
}

console.log(loginMessage("Alex", "Kostiuchenko"));
console.log(loginMessage("David", "Goggins"));

// 7.  Визнач довжину рядка, який зберігає ім'я продукту, та виведи результат з повідомленням: "Довжина назви продукту: [значення]" Використовуй функції
console.log("TASK 7");

const productName = undefined;

function lengthCalculator(productName) {
    const finalLength = productName.length;
    return finalLength;
}

console.log(`Довжина назви продукту: ${lengthCalculator("Laptop")}`);

// ====================================== Перетворення типів ====================================== //

// 8.  Попроси користувача ввести ціну продукту в гривнях (5грн), перетвори значення на число і попроси вести кількість товару, обчисли загальну вартість. Виведи відповідне повідомлення.
console.log("TASK 8");

const price = prompt('Ведіть вартість булки хлібу у форматі: число+грн (5грн, 10грн)');
const quantity = prompt('Ведіть кількість булок хлібу');

const breadPrice = Number.parseFloat(price) * Number.parseFloat(quantity);

console.log(`Одна булка коштує: ${price}, кількість булок: ${quantity}. Загальна ціна: ${breadPrice} грн`);

// 9.  Оголоси змінні з числовим значенням і рядковим числом, додай їх та виведи тип отриманого результату.
console.log("TASK 9");

const num = 10;
const str = '10';

console.log(typeof num);
console.log(typeof str);

// 10.  Оголоси функцію calculateVacationCost, яка приймає три параметри:

// days — кількість днів відпустки.
// pricePerDay — вартість одного дня перебування в готелі.
// additionalExpenses — додаткові витрати на харчування та розваги, які потрібно покрити за весь період.
// Доповни код функції так, щоб вона повертала рядок з повідомленням про загальну вартість відпустки:
// "Your vacation will cost totalCost credits for days days.",
// де:

// totalCost — це загальна вартість відпустки, яка включає оплату проживання та додаткові витрати.
// days — кількість днів, протягом яких триватиме відпустка.
console.log("TASK 10");

const days = undefined;
const pricePerDay = undefined;
const additionalExpenses = undefined;

function calculateVacationCost(days, pricePerDay, additionalExpenses) {
    const totalCost = Number.parseInt(pricePerDay) * days + Number.parseInt(additionalExpenses);
    
    const messageCost =  `Your vacation will cost ${totalCost} dollars for ${days} days`;
    return messageCost;
}

console.log(calculateVacationCost(5, '100$', '400$'));

// 11.  Оголоси функцію createEventMessage, яка приймає чотири параметри:
    // eventName — назва події.
    // location — місце проведення події.
    // date — дата проведення події у форматі рядка.
    // time — час початку події у форматі рядка.

    // Функція повинна повертати рядок:
    // "Don't miss eventName at location on date at time!",
    // де eventName, location, date і time відповідають параметрам, переданим функції.
    // Реалізуй функцію покупки квитків
console.log("TASK 11");

let eventName = undefined;
let partyLocation = undefined;
let date = undefined;
let time = undefined;
function createEventMessage(eventName, partyLocation, date, time) {
    return(`Don't miss ${eventName} at ${partyLocation} on ${date} at ${time}.`);
}
console.log(createEventMessage("Dancing concert", "Ibiza", "05.11.2024", "23:00"));

function paymentMessage() {
    let ticketPrice = 100;
    console.log(`Price of one ticket is ${ticketPrice}$`)

    let ticketQuantity = prompt("How many tickets you want to buy?");
    let correctPromo = "PartywUs";
    let userPromo = prompt("Write promo to receive discount!");
    let discount = ticketPrice/100 * 30;
    let totalPrice = undefined;

    if (userPromo === correctPromo) {
        totalPrice = (ticketPrice - discount) * ticketQuantity;
        console.log(`Congrats! Your promo is correct and you received 30% discount! You bought ${ticketQuantity} tickets with total price of ${totalPrice}$ `)
    } else{
        totalPrice = ticketPrice * ticketQuantity;
        console.log(`Sorry! Your promo is incorrect, we can't give you a discount:( You bought ${ticketQuantity} tickets with total price of ${totalPrice}$ `)
    }
}

console.log(paymentMessage());

// 12.  Оголоси функцію createMeetingMessage, яка приймає чотири параметри:

// meetingName — назва зустрічі.
// location — місце проведення зустрічі.
// date — дата зустрічі у форматі рядка.
// time — час початку зустрічі у форматі рядка.
// Функція повинна повертати рядок:
// "Reminder: Your meeting meetingName at location is scheduled for date at time.",
// де meetingName, location, date і time відповідають параметрам, переданим функції.

// Додатково створи функцію confirmMeeting, яка запитує у користувача, чи зможе він бути на зустрічі (через confirm) і додай prompt і перевести в нижній регістр. Якщо так, виведи в консоль повідомлення "Great! See you there!", інакше — "We'll reschedule the meeting.".
console.log("TASK 12");

let meetingName = undefined;
let locationMeet = undefined;
let dateMeet = undefined;
let timeMeet = undefined;

function createMeetingMessage(meetingName, locationMeet, dateMeet, timeMeet){
    console.log(`Reminder: Your meeting: ${meetingName} at ${locationMeet} is scheduled for ${dateMeet} at ${timeMeet}.`);
}
createMeetingMessage("Product presentation training", "cafe Manhattan", "05.11", "11:00");

function confirmMeeting(){
    let confirmMeet = prompt("Are you able to visit this meeting? Just let us know;) Do you confirm your present?");

    if (confirmMeet.toLocaleLowerCase() == "confirm"){
        console.log("Great! See you there!");
    }else if (confirmMeet.toLocaleLowerCase() == "reject"){
        console.log("We'll reschedule the meeting.");
    }
    else if (confirmMeet.toLocaleLowerCase() != "confirm"){
        console.log("to confirm your present write 'confirm' To reject your present, write 'reject'");
        let confirmMeet = prompt("Are you able to visit this meeting? Just let us know;) Do you confirm your present?");
    } 
}
confirmMeeting();

// 13.  Оголоси функцію orderPizza, яка приймає три параметри:

// pizzaType — тип піци.
// quantity — кількість замовлених піц.
// promoCode — промокод для знижки.
// Функція повинна обчислити загальну вартість замовлення, виходячи з того, що ціна однієї піци становить 10 доларів. Якщо promoCode дорівнює "PIZZA20", нараховується знижка 20%.

// Функція повинна повертати повідомлення:
// "You ordered quantity pizzaType pizza(s). Total price is totalPrice$.",
// де totalPrice — загальна вартість із врахуванням знижки.
console.log("TASK 13");

// Pizza types vars
const pepperoni = "pepperoni";
const pepperoniPrice = 7;

const spicySalami ="spicy salami";
const SalamiPrice = 10;

// User message
console.log("--------------------- Welcome to pizza cafe, fren! ---------------------");
console.log(`[OUR MENU:]
-${pepperoni}: something about the combination of pepperoni, tomato sauce and cheese creates a flavour sensation unlike anything else. Price: ${pepperoniPrice}$
-${spicySalami}:This fiery and delicious pizza is known for its spicy salami, chili pepper kick and melty mozzarella cheese. Price: ${SalamiPrice}$`);

// General vars
let pizzaType = prompt("What do you want to order?");
let pricePizza = undefined;
let pizzaQuantity = prompt("How many pizzas would you like?");
const correctPizzaPromo = "PIZZA20";
let userPizzaPromo = prompt("Write promo to receive 20% discount!");

// Pizza order function
function pizzaOrder(){
    if (pizzaType.toLowerCase() == "pepperoni" && userPizzaPromo == correctPizzaPromo){
        pizzaType = pepperoni;
        pricePizza = pepperoniPrice;

        let discountPizza = (pricePizza / 100) * 20;
        let totalPizzaPrice = (pricePizza - discountPizza) * pizzaQuantity;

        console.log(`Great, your promo is correct! You ordered ${pizzaType}. Quantity:${pizzaQuantity}. Total price: ${totalPizzaPrice}$ with 20% discount!`)
    } else if (pizzaType.toLowerCase() == "pepperoni" && userPizzaPromo != correctPizzaPromo){
        pizzaType = pepperoni;
        pricePizza = pepperoniPrice;

        let totalPizzaPrice = pricePizza  * pizzaQuantity;

        console.log(`Sorry, your promo is incorrect. We can't give you a discount:( You ordered ${pizzaType}. Quantity:${pizzaQuantity}. Total price: ${totalPizzaPrice}$`)
    }

}

pizzaOrder();

// Закінчити процес замовлення та додати піцу салямі. Після викоанння додати методи рядкім щоб наприклад з відступами програма розуміла, що користовач хоче 