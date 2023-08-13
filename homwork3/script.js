// 1. Переберите массив и запишите каждый элемент в консоль.

// let array = [34, 2, -3, 0, 15, 8, 23];
// array.forEach((el) => {
//     console.log(el)
// })

// 2. Умножьте каждый элемент массива на определенное значение и сохраните результат в новом массиве.

// let array = [34, 2, -3, 0, 15, 8, 23];
// let mult = 2;
// let array1 = array.map(el => el * mult);
// console.log(array1)

// 3. Отфильтруйте массив, чтобы удалить элементы, не соответствующие определенным критериям.

// let array = [34, 2, -3, 0, 15, 8, 23];
// array = array.filter((el) => el % 2 === 0);
// console.log(array)

// 4. Перебрать массив и обновить каждый элемент до нового значения.

// let array = [34, 2, -3, 0, 15, 8, 23];
//  array.forEach((el) => {
//     console.log(el * 2 / 3)
//  })

// 5. Найдите максимальное или минимальное значение в массиве с помощью функции обратного вызова.

// let array = [34, 2, -3, 0, 15, 8, 23];

// array.sort((a, b) => a - b);

// console.log(array[0]);
// console.log(array[array.length - 1])

// 6. Создайте новый массив, применив функцию к каждому элементу существующего массива.

// let array = [34, 2, -3, 0, 15, 8, 23];
// let array1 = array.map(el => el + 5);

// console.log(array1);

// 7. Выполните итерацию по массиву и обновите промежуточную сумму его значений.

// let array = [34, 2, -3, 0, 15, 8, 23];
// let sum = 0;
// array.forEach((el) => {
//     sum += el;
// });
// console.log(sum)

// 8. Создайте новый массив, выбрав определенные свойства объектов в существующем массиве.
// const cartItems = [
//         { name: 'Apple', price: 120, quantity: 3 },
//         { name: 'Banana', price: 50, quantity: 5 },
//         { name: 'Orange', price: 6, quantity: 2 },
//         { name: 'PineApple', price: 2, quantity: 2 },
//         { name: 'Coconut', price: 90, quantity: 2 },
//         { name: 'Peach', price: 45, quantity: 2 },
//     ]

//     let newCartItems = cartItems.map(el => el.name);

// console.log(newCartItems);

// 9. Удалите дубликаты из массива с помощью функции обратного вызова.

// let array = [1, 2, 3, 2, 4, 7, 3, 5, 7];

//  array =  array.filter((el, ind, arr) => {
//     return arr.indexOf(el) === ind;
// });

//  console.log(array);

// 10. Сгруппируйте элементы в массиве по определенному критерию с помощью функции обратного вызова.

// let cartItems = [
//   { name: "Apple", price: 120, quantity: 3 },
//   { name: "Banana", price: 50, quantity: 5 },
//   { name: "Orange", price: 6, quantity: 2 },
//   { name: "PineApple", price: 2, quantity: 2 },
//   { name: "Coconut", price: 90, quantity: 2 },
//   { name: "Peach", price: 45, quantity: 2 },
// ];
//  cartItems = cartItems.filter((item) => item.price > 45);
// console.log(cartItems);

// 11. Сортировка массива в определенном порядке с помощью функции обратного вызова.

// let array = [34, 2, -3, 0, 15, 8, 23];
// array.sort((a, b) => b - a);
//     console.log(array);

// 12. Выполните итерацию по массиву и выполните побочный эффект для каждого элемента, например, обновите модель DOM.

// let items = ['Apples', 'Bananas', 'Oranges', 'Grape']

//  items = items.map((el) => `<li>${el}</li>`)
// console.log(items)

// 13. Объедините два массива в новый массив, используя метод forEach.
// let num = [34, 2, -3, 0, 15, 8, 23];
// let num1 = [2, 6, 5, 4, 8, 4];

// num.forEach((el, ind, num) => {
//     if(ind < num1.length) {
//         num.push(num1[ind])
//     }
// })
// console.log(num);

// 14. Создайте новый массив, объединив вложенный массив с помощью метода forEach.

// let num = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let num2 = [];

// num.forEach((value) => {
//   value.forEach((elem) => num2.push(elem));
// });
// console.log(num2);

// 15. Измените существующий объект, перебирая массив пар ключ-значение.

// const cartItems = [
//     { name: 'Apple', price: 120, quantity: 3 },
//     { name: 'Banana', price: 50, quantity: 5 },
//     { name: 'Orange', price: 6, quantity: 2 },
//     { name: 'PineApple', price: 2, quantity: 2 },
//     { name: 'Coconut', price: 90, quantity: 2 },
//     { name: 'Peach', price: 45, quantity: 2 },
// ]
//  let changeTheQuantity= cartItems.map(el => ({
//     ...el, quantity: el.quantity + 3, price: el.price * 1.5
//  }));
// console.log(changeTheQuantity);

// 16. Реализуйте функцию обратного вызова, которая будет вызываться для каждого элемента массива, пока не вернет значение false.


// let numbers = [2, 4, 6, 7, 8];
// numbers.find(el => {
//     if(el % 2 === 0) {
//         console.log(el)
//     } else {
//         console.log(false);
//         return el
//     }
// });

// 17. Перебрать массив и вычислить среднее значение его значений.

// let num = [34, 2, -3, 0, 15, 8, 23];
// let result = num.reduce((sum,elem) => sum + elem / num.length, 0)
// console.log(result);


// 18. Перебрать массив и удалить любой элемент, соответствующий определенному критерию.

// let num = [34, 2, -3, 0, 15, 8, 23];
//  num = num.filter(el => el > 10)

//  console.log(num)

// 19. Создайте новый массив элементов, соответствующих определенным критериям.

// let arr = [34, -8, 5, 78, 579, 42, 8, -73, 98, 7, 3]
// let arr2 =[]
// arr.forEach(el => {
//     if(el > 40) {
//         arr2.push(el);
//     }
// });
// console.log(arr2)
    

// 20. Выполните итерацию по массиву и обновите свойство каждого элемента, используя метод forEach.

// let cartItems = [
//         { name: 'Apple', price: 120, quantity: 3 },
//         { name: 'Banana', price: 50, quantity: 5 },
//         { name: 'Orange', price: 6, quantity: 2 },
//         { name: 'PineApple', price: 2, quantity: 2 },
//         { name: 'Coconut', price: 90, quantity: 2 },
//         { name: 'Peach', price: 45, quantity: 2 },
//     ]
//     cartItems.forEach(el => {
//         el.price = el.price * 2;
//         el.quantity = el.quantity +3;
//     });
//     console.log(cartItems);


// 21. Объедините все строки в массиве в одну строку, используя метод forEach.

// let items = ['Apples', 'Bananas', 'Oranges', 'Grape'];
// let items2 = "";
// items.forEach(el => {
//     items2 += el + " ";
// });
// console.log(items2)


// 22. Создайте новый массив объектов, добавив к каждому объекту новое свойство с помощью метода forEach.

// let cartItems = [
//   { name: "Apple", price: 120, quantity: 3 },
//   { name: "Banana", price: 50, quantity: 5 },
//   { name: "Orange", price: 6, quantity: 2 },
//   { name: "PineApple", price: 2, quantity: 2 },
//   { name: "Coconut", price: 90, quantity: 2 },
//   { name: "Peach", price: 45, quantity: 2 },
// ];
// let cartItems1 = [];
// cartItems.forEach((el) => {
//   el.discont = 15;
//   cartItems1.push(el) 
// });
// console.log(cartItems1);

// 23. Подсчитайте, сколько раз элемент появляется в массиве, используя метод forEach.

// let num = [1, 2, 3, 2, 4, 7, 3, 5, 7];
// let count = {};
// num.forEach(el => {
//     count[el] = count[el] + 1 || 1;
// });
// console.log(count);

// 24. Суммируйте значения определенного свойства в массиве объектов, используя метод forEach.

// let cartItems = [
//       { name: "Apple", price: 120, quantity: 3 },
//       { name: "Banana", price: 50, quantity: 5 },
//       { name: "Orange", price: 6, quantity: 2 },
//       { name: "PineApple", price: 2, quantity: 2 },
//       { name: "Coconut", price: 90, quantity: 2 },
//       { name: "Peach", price: 45, quantity: 2 },
//     ];

//     let sum = 0;
//     cartItems.forEach(el => {
//         sum += el.price
//     });
//     console.log(sum);
// 25. Удалите элемент из массива, если он соответствует определенным критериям, используя метод forEach.

// let arr = [34, -8, 5, 78, 579, 42, 8, -73, 98, 7, 3];
// let arr2 = [];
// arr.forEach(el => {
//     if(el > 50) {
//         arr2.push(el);
//     }
// });
// arr = arr2
// console.log(arr)

// 26. Создайте новый массив, сопоставив существующий массив с массивом логических значений, используя метод forEach.
// let arr = [1, 2, 3, 4, 5 ,6 ,7];
// let arr1 = [true, false, true, false, true, false, true];
// let result = [];
// arr.forEach((el, ind) => {
//     if(arr1[ind] === true) {
//         result.push(el);
//     }
// });
// console.log(result);

// 27. Найдите первый элемент в массиве, который соответствует определенному критерию, используя метод forEach.

// let arr = [34, -8, 5, 78, 579, 42, 8, -73, 98, 7, 3]
// let arr2;
// arr.forEach(el => {
//     if(arr2 === undefined && el > 40) {
//         arr2 = el;
//     }
// });
// console.log(arr2);

// 28. Создайте новый массив, отфильтровав существующий массив на основе свойства его объектов, используя метод forEach.

// let cartItems = [
//           { name: "Apple", price: 120, quantity: 3 },
//           { name: "Banana", price: 50, quantity: 5 },
//           { name: "Orange", price: 6, quantity: 2 },
//           { name: "PineApple", price: 2, quantity: 2 },
//           { name: "Coconut", price: 90, quantity: 2 },
//           { name: "Peach", price: 45, quantity: 2 },
//         ];
//         let cartItems1 = [];
//         cartItems.forEach(el => {
//             if ( el.price >= 45) {
//                 cartItems1.push(el)
//             }
//         });
//         console.log(cartItems1);
    

// 29. Обновите массив на месте, удалив определенные элементы, соответствующие определенным критериям, с помощью метода forEach.

// let num = [34, -8, 5, 78, 42, 8, -73, 98, 7, 3];

// num.forEach((el, ind) => {
//     if(el > 45 ) {
//     num.splice(ind, 1);
// }
// });
// console.log(num);

// 30. Измените массив объектов, сопоставив каждый объект с новым объектом с добавленным свойством, используя метод forEach.

// let cartItems = [
//       { name: "Apple", price: 120, quantity: 3 },
//       { name: "Banana", price: 50, quantity: 5 },
//       { name: "Orange", price: 6, quantity: 2 },
//       { name: "PineApple", price: 2, quantity: 2 },
//       { name: "Coconut", price: 90, quantity: 2 },
//       { name: "Peach", price: 45, quantity: 2 },
//     ];
//     cartItems.forEach(el => {
//         el.totalPrice = el.price * el.quantity
//     });
//     console.log(cartItems);



// 31. Сгруппируйте объекты в массиве по определенному свойству, используя метод forEach.

// я устала переводить с китайского)))

// 32. Создайте новый массив объектов, отфильтровав существующий массив объектов на основе свойства с помощью метода forEach.

// 33. Вычислить произведение всех чисел в массиве с помощью метода forEach.

// 34. Найдите первый индекс элемента в массиве, используя метод forEach.

// 35. Создайте новый массив, объединив два существующих массива с помощью метода forEach.

// 36. Найдите сумму всех четных чисел в массиве, используя метод forEach.

// 37. Удалите все ложные значения из массива, используя метод forEach.

// 38. Создайте новый массив, сопоставив существующий массив с массивом объектов, используя метод forEach.

// 39. Найдите индекс последнего элемента в массиве, который соответствует определенному критерию, используя метод forEach.

// 40. Обновите объект в массиве объектов на основе определенных критериев, используя метод forEach.
