// // створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calculateAreaRectangle(a, b) {
	return a * b
}

console.log(calculateAreaRectangle(5, 4));

// //створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;

function calculateAreaCircle(r) {
	return PI * r * r
}

console.log(calculateAreaCircle(10));

// //створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calculateAreaCylinder(r, h) {
	return 2 * PI * r * r + 2 * PI * h;
}

console.log(calculateAreaCylinder(16, 10));

// //створити функцію яка приймає масив та виводить кожен його елемент

function showItemArr(arr) {
	for (const arrElement of arr) {
		console.log(arrElement);
	}
}

showItemArr([2, 3, 4, 5, 6]);

// //створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function writeMsg(msg) {
	document.write(`<h1>${msg}</h1>`);
}

writeMsg('Hello, world!');

// //створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
//
function writeTag(text) {
	document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

writeTag('Hello, Okten');

// //створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є // числовим (тут використовувати цикл) та виводить його через document.write

function writeList(text, count) {
	document.write(`<ul>`);
	for (let i = 0; i < count; i++) {
		document.write(`<li>${text}</li>`);
	}
	document.write(`</ul>`);
}

writeList("star", 2);

// //створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через
// // document.write

function writeListOfArr(arr) {
	document.write(`<ul>`);
	for (let arrElement of arr) {
		document.write(`<li>${arrElement}</li>`);
	}
	document.write(`</ul>`);
}

writeListOfArr([1, 2, 'hello', 'world', true, false]);

// //створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function writeDiv(arr) {
	for (let arrElement of arr) {
		document.write(`<div>`);
		for (let objKey in arrElement) {
			document.write(`${objKey}: ${arrElement[objKey]}, `);
		}
		document.write(`</div>`);
	}
}

writeDiv([{id: 1, name: 'Alex', age: 34}, {id: 2, name: 'Alona', age: 34}, {id: 3, name: 'Anya', age: 34}, {id: 4, name: 'Vanya', age: 34}])

// //створити функцію яка повертає найменьше число з масиву

function findMin(arr) {
	let min = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i]
	}
	return min;
}

console.log(findMin([10, 7, 10, 77, 2, 50, 3, 23]));

// //створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function calculateSum(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

console.log(calculateSum([1, 2, 3, 4, 5, 10]));

// //створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах


function swap(arr, index1, index2) {

	let value = arr[index1];
	arr[index1] = arr[index2]
	arr[index2] = value
	return arr;
}

console.log(swap([1, 2, 3, 4, 5], 0, 4));

//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {

	for (let currencyValue of currencyValues) {

			if (currencyValue.currency === exchangeCurrency) {
				return (sumUAH / currencyValue.value).toFixed(2)
			}
	}

}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'))