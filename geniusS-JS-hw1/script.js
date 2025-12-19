//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name;
// let city;
// name = "Іван";
// city = name;
// console.log(city); // Іван

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// console.log(typeof Number.parseInt(a)); // 5
// console.log(typeof Number.parseInt(b)); // 13
// console.log(typeof Number.parseFloat(c)); // 12.9

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// let sum = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(sum); // 0.3

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// let maxNum = Math.max(20, 10, 50, 40);
// console.log(maxNum); // 50

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// let randomNum = Math.random() * (4 - 2) + 2;
// console.log(randomNum);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19

//***8**
//вивести в консоль message  великими літерами
// let upperCasedWord = message.toUpperCase();
// console.log(upperCasedWord);

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// const user = {};
// user.name = "Modest";
// user.age = 95;
// user.city = "New York";
// console.log(user);
// delete user.city;
// console.log(user);
// user["like flowers"] = true;
// console.log(user);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
// for (key in user) {
//   console.log(key);
//   console.log(user[key]);
// }
