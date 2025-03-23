//  Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з
// id="text".

let div = document.getElementById("text");
let button = document.getElementsByClassName("button")[0];


button.addEventListener("click", function (e) {
	div.classList.toggle("hidden");
})

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
// меньше він ніж 18, та повідомити про це користувача

let input = document.getElementsByName("age")[0];
let submit = document.getElementsByClassName("submit")[0];

submit.addEventListener("click", function (e) {
	e.preventDefault();

	let age = Number(input.value);
	console.log(age)
	if (age < 18) {
		console.log('You are not yet an adult')
	} else {
		console.log('You are adult')
	}
	input.value = "";
})

//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.forms[0];
let output = document.getElementsByClassName("output")[0];

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let data = new FormData(this)
	const {name, surename, age} = Object.fromEntries(data.entries());
	output.innerText = `Name: ${name}\nSurname: ${surename}\nAge: ${age}`;
	form.reset()
})

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let counter = document.getElementsByClassName("counter")[0];

let count = localStorage.getItem("counter") ? +localStorage.getItem("counter") : +counter.innerText;
count++
counter.innerText = count;
localStorage.setItem('counter', count)

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час
// відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

window.addEventListener('load', function () {

	let currentDate = new Date();

	let sessionsList = JSON.parse(localStorage.getItem("sessionsList")) || [];

	sessionsList.push(currentDate.toLocaleString());

	localStorage.setItem("sessionsList", JSON.stringify(sessionsList));
})

// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових
// кнопок

let inputKg = document.getElementsByName("kg")[0];
let plb = document.getElementsByClassName("lb")[0];

inputKg.addEventListener('input', function () {
	plb.innerText = (+inputKg.value * 2.20462).toFixed(2)
})

// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

const changeLocalStorage = (arrayName, objToAdd) => {
	let obj = JSON.parse(localStorage.getItem('data')) || {};

	if (!obj[arrayName]) {
		obj[arrayName] = [];
	}

	obj[arrayName].push(objToAdd);

	localStorage.setItem('data', JSON.stringify(obj));
}

// changeLocalStorage('name', {'name': 'sdfs'});


// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let formTable = document.forms[1];

let table = document.createElement('table');

document.body.appendChild(table);

formTable.addEventListener("submit", function (e) {
	e.preventDefault();
	let data = new FormData(this)
	const {row, cell, text} = Object.fromEntries(data.entries());

	for (let i = 0; i < +row; i++) {
		let tr = document.createElement("tr");

		table.appendChild(tr);

		for (let j = 0; j < +cell; j++) {
			let td = document.createElement("td");
			td.innerText = text
			tr.appendChild(td);
		}
	}
	formTable.reset()
})

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


window.addEventListener('load', function () {
	let price = document.getElementById("price");
	let oldDate = +localStorage.getItem('date');
	let currentDate = Math.floor(Date.now() / 1000)
	let priceData = localStorage.getItem("price") ? parseInt(localStorage.getItem("price")) : parseInt(price.innerText);

	if (currentDate - oldDate >= 10) {

		priceData += 10

		localStorage.setItem("price", JSON.stringify(priceData));
		localStorage.setItem('date', currentDate);
	}
	price.innerHTML = `${priceData} UAH`;
})








