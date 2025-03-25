"use strict";
// 1. Створити пустий масив та :
// 	a. заповнити його 50 парними числами за допомоги циклу.
// 	b. заповнити його 50 непарними числами за допомоги циклу.
// 	c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr1 = [];
for (let i = 0; i < 200; i++) {
    if (i % 2 === 0) {
        arr1.push(i);
    }
}
for (let i = 0; i < 200; i++) {
    if (i % 2 !== 0) {
        arr1.push(i);
    }
}
for (let i = 0; i < 20; i++) {
    arr1.push(Math.floor(Math.random() * 100));
}
for (let i = 0; i < 20; i++) {
    arr1.push(Math.floor(Math.random() * (732 - 7)) + 8);
}
for (let i = 2; i < arr1.length; i += 3) {
    console.log(arr1[i]);
}
for (let i = 2; i < arr1.length; i += 3) {
    if (arr1[i] % 2 === 0)
        console.log(arr1[i]);
}
let newArr = [];
for (let i = 2; i < arr.length; i += 3) {
    if (arr1[i] % 2 === 0)
        newArr.push(arr1[i]);
}
for (let i = 1; i < arr.length; i++) {
    if (arr1[i] % 2 === 0)
        console.log(arr1[i - 1]);
}
console.log(arr1);
console.log(newArr);
let arr2 = [100, 250, 50, 168, 120, 345, 188];
let average = arr2.reduce((acc, cur) => acc + cur, 0) / arr2.length;
console.log(average);
let newArr2 = arr2.map(item => item * 5);
console.log(newArr2);
let array = [1, null, 2, 0, 3, 4, 5, 'a', 'b', 'c', false, false, true, {}, [], undefined, NaN];
let newArr1 = array.filter(item => typeof item === 'number' && Number.isFinite(item));
console.log(newArr1);
