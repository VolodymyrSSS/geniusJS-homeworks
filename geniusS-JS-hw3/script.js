// =============== Задача: У вас є масив об’єктів fruits, і в кожному з них є name
// =============== Напишіть код, який перетворює їх в масив імен.
// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// варіат рішення циклом for..of та методом push
// const arrNames = [];
// for (let item of fruits) {
//   arrNames.push(item.name);
// }

// варіант рішення методом forEach та методом push
// const arrNames = [];
// fruits.forEach((item) => arrNames.push(item.name));

// варіант рішення через метод map
// const arrNames = fruits.map((item) => item.name);

// варіант рішення через метод map та деструктуризацію
// const arrNames = fruits.map(({ name }) => name);

// варіант рішення через метод map, деструктуризацію та шаблонні рядки, ще додамо id
// const arrNames = fruits.map(({ name, id }) => `${name} (id:${id})`);

// console.log(arrNames);

// =============== Задача: виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// =============== Задача: замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.log( `цифра ${i}!` );
//   }

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

// спробуєм варіант циклу в зворотньому напрямку (рухатись від 5 до 0);
// let i = 5;
// while (i) {
//   console.log(`цифра ${i}!`);
//   i--;
// }
/*Різниця між цими двома варіантами полягає в тому, що у першому
варіанті рахунок буде вестись від 0 до 4, а в другому від 5 до 1 */

// =============== Задача: виведіть масив чисел без дублікатів
// =============== використовуючи для рішення тільки цикли
const arr = [1, 1, 2, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7];

// варіант рішення використовуючи класичний for
// let uniqueArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let exists = false;
//   // перевірка вручну чи arr[i] вже є в uniqueArr
//   for (let j = 0; j < uniqueArr.length; j++) {
//     if (uniqueArr[j] === arr[i]) {
//       exists = true;
//       break;
//     }
//   }
//   if (!exists) {
//     uniqueArr.push(arr[i]);
//   }
// }

// варіант рішення використовуючи цикл for..of
// let uniqueArr = [];
// for (let num of arr) {
//   if (!uniqueArr.includes(num)) {
//     uniqueArr.push(num);
//   }
// }

// варіант рішення використовуючи цикл while
// let uniqueArr = [];
// let i = 0;
// while (i < arr.length) {
//   if (!uniqueArr.includes(arr[i])) {
//     uniqueArr.push(arr[i]);
//   }
//   i++;
// }

// варіант рішення використовуючи метод forEach
// let uniqueArr = [];
// arr.forEach((num) => {
//   if (!uniqueArr.includes(num)) {
//     uniqueArr.push(num);
//   }
// });

// для вдосконалення - варіант використання Set методу де
// new Set(arr) - автоматично створює множину унікальних елементів
// а ... конвертує в нормальний масив
// const uniqueArr = [...new Set(arr)];

// варіант використання Set разом з Array.from де цей метод
// просто конвертує в масив
// const uniqueArr = Array.from(new Set(arr));

// варіант фільтрації методом filter використовуючи Set
// const seen = new Set();
// const uniqueArr = arr.filter((num) => {
//   if (seen.has(num)) return false;
//   seen.add(num);
//   return true;
// });

// console.log(uniqueArr);

// =============== Задача: Напишіть цикл, який пропонує prompt ввести число більше за 100.
// =============== Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
// =============== Цикл повинен запитувати число доти, доки відвідувач не введе число,
// =============== більше за 100, або не скасує ввід/введе порожній рядок.

// варіант за допомогою циклу while
// let userInput;
// while (true) {
//   userInput = prompt("Введіть число більше 100", 101);

//   if (userInput === null) break; // якщо натиснув ESC чи Cansel в prompt

//   let number = Number(userInput); // конвертуємо в число
//   // тут перевіряємо умову число > 100
//   if (number > 100) {
//     console.log(`Ви ввели число більше 100`);
//     break;
//   } else {
//     console.log(`Ви ввели число менше 100, спробуйте ще раз`);
//   }
// }

// варіант за допомогою циклу do..while та перевіркою на введення нечисла
// let userInput;
// do {
//   userInput = prompt("Введіть число більше 100", 101);

//   if (userInput === null) break; // якщо натиснув ESC чи Cansel в prompt

//   let number = Number(userInput); // конвертуємо в число

//   // тут перевіряємо на нечисло і умову > 100
//   if (!Number.isNaN(number) && number > 100) {
//     console.log(`Ви ввели число ${number}`);
//     break;
//   } else {
//     console.log(`Ви ввели нечисло або число менше 100, спробуйте ще раз`);
//   }
// } while (true);

// =============== Задача: вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// варіант з використанням циклу for..of
// let sum = 0;
// for (const girl of girls) sum += girl.age;
// const averageAge = sum / girls.length;

// варіант з використанням методів map та reduce
// const averageAge =
//   girls.map((girl) => girl.age).reduce((acc, age) => acc + age, 0) /
//   girls.length;

// варіант з використанням лише методу reduce
// const averageAge =
//   girls.reduce((acc, girl) => acc + girl.age, 0) / girls.length;

// console.log(averageAge);

// =============== Задача: знайдіть друге найменше за значенням число y масиві
// const arr = [10, 5, 20, 8];

// варіант рішення через застосування методу Math.min. Сутність рішення заключається
// в пошуку мінімального значення масиву цим методом, а потім вилучення того мінімального
// значення з масиву і знову пошук мінімального значення в тому масиві (вже без
// попереднього мінімального значення) застосувавши повторно цей самий метод.
// const min = Math.min(...arr);
// const arrWithoutMin = arr.filter((n) => n !== min);
// const secondMin = Math.min(...arrWithoutMin);
// console.log(`Друге найменше значення є ${secondMin}`);

// варіант іншого рішення: відсортувати масив по зростанню, наприклад, і потім
// обрати друге значення. Отже:
// const sorted = [...new Set(arr)].sort((a, b) => a - b); // відсортувати масив у зростаючому порядку попередньо вилучивши дублікати
// console.log(`Друге найменше значення є ${sorted[1]}`);

// варіант наступного рішення буде: щоразу, коли знаходиться нове найменше значення,
// старе найменше стає другим найменшим. А коли знаходиться число між найменшим
// і другим найменшим, потрібно оновити друге найменше значення. Код для цього:
// let min = Infinity; // відправна точка, будь-яке дійсне число масиву буде меншим за нього або так - починаєм з максимально можливого числа
// let secd = Infinity; // відправна точка, будь-яке дійсне число масиву буде меншим за нього
// for (let n of arr) {
//   if (n < min) {
//     // знайдено нове найменше число
//     secd = min; // старе найменше стає другим найменшим
//     min = n; // оновлення найменшого
//   } else if (n < secd && n !== min) {
//     // знайдено число більше за min, але менше за поточне secd
//     secd = n;
//   }
// }
/*Алгоритм діє так:
- відправна точка: min = Infinity, secd = Infinity.
Перше число масиву: 10
- 10 < Infinity → true.
- отже: secd = Infinity, min = 10.
Друге число масиву: 5
- 5 < 10 → true.
- отже: secd = 10, min = 5.
Третє число масиву: 20
- 20 < 5 → false.
- 20 < Infinity and 20 ≠ 5 → true.
- отже: secd = 20.
четверте число масиву: 8
- 8 < 5 → false.
- 8 < 20 and 8 ≠ 5 → true.
- отже оновлюєм: secd = 8.
Кінцевий результат: min = 5, secd = 8.
*/
// console.log(`Друге найменше значення є ${secd}`);

// варіант як "pro" з використанням методу reduce
// const [min, secd] = arr.reduce(
//   ([m, s], n) => {
//     if (n < m) return [n, m]; // знайдено нове найменше значення
//     if (n > m && n < s) return [m, n]; // знайдено нове найменше друге значення
//     return [m, s]; // повернення значень без змін
//   },
//   [Infinity, Infinity]
// );
/*Алгоритм роботи метода такий:
- методом reduce працює по масиву, слідкуючи одночасно за двома значеннями:[m, s]
- початковий стан: [Infinity, Infinity]
Ітерація 1: n = 10
- 10 < Infinity → true → повертається [10, Infinity].
Ітерація 2: n = 5
- 5 < 10 → true → повертається [5, 10].
Ітерація 3: n = 20
- 20 < 5 → false.
- 20 > 5 && 20 < 10 → false.
- Повертається [5, 10].
Ітерація 4: n = 8
- 8 < 5 → false.
- 8 > 5 && 8 < 10 → true → повертається [5, 8].
Кінцевий результат: min = 5, secd = 8.
*/
// console.log(`Друге найменше значення є ${secd}`);
