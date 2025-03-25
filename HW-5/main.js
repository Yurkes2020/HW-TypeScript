"use strict";
// // створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const calculateAreaRectangle1 = (a, b) => {
    return a * b;
};
console.log(calculateAreaRectangle1(5, 4));
// //створити функцію яка обчислює та повертає площу кола з радіусом r
const PI1 = 3.14;
const calculateAreaCircle1 = (r) => {
    return PI1 * r * r;
};
console.log(calculateAreaCircle1(10));
// //створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const calculateAreaCylinder1 = (r, h) => {
    return 2 * PI * r * r + 2 * PI * h;
};
console.log(calculateAreaCylinder1(16, 10));
// //створити функцію яка приймає масив та виводить кожен його елемент
const showItemArr1 = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
showItemArr1([2, 3, 4, 5, 6]);
// //створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
const writeMsg1 = (msg) => {
    document.write(`<h1>${msg}</h1>`);
};
writeMsg1('Hello, world!');
// //створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
//
const writeTag1 = (text) => {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
};
writeTag1('Hello, Okten');
// //створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є // числовим (тут використовувати цикл) та виводить його через document.write
const writeList1 = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
writeList1("star", 2);
// //створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через
// // document.write
const writeListOfArr1 = (arr) => {
    document.write(`<ul>`);
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
};
writeListOfArr1([1, 2, 'hello', 'world', true, false]);
const writeDiv1 = (arr) => {
    for (let arrElement of arr) {
        document.write(`<div>`);
        for (let objKey in arrElement) {
            document.write(`${objKey}: ${arrElement[objKey]}, `);
        }
        document.write(`</div>`);
    }
};
writeDiv1([{ id: 1, name: 'Alex', age: 34 }, { id: 2, name: 'Alona', age: 34 }, { id: 3, name: 'Anya', age: 34 }, {
        id: 4,
        name: 'Vanya',
        age: 34
    }]);
// //створити функцію яка повертає найменьше число з масиву
const findMin1 = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
};
console.log(findMin1([10, 7, 10, 77, 2, 50, 3, 23]));
// //створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const calculateSum1 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(calculateSum1([1, 2, 3, 4, 5, 10]));
// //створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
const swap1 = (arr, index1, index2) => {
    let value = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = value;
    return arr;
};
console.log(swap1([1, 2, 3, 4, 5], 0, 4));
const exchange1 = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return (sumUAH / currencyValue.value).toFixed(2);
        }
    }
};
console.log(exchange1(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
