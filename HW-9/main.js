// - створити блок,
// 	- додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let createDiv = () => {
	let block = document.createElement("div");
	block.classList.add("wrap", "collapse", "alpha", "beta");
	block.style.cssText += 'background-color: red; color: blue; font-size: 12px; width: 200px; height: 200px; margin-bottom: 10px';
	document.body.appendChild(block);
}

createDiv()
createDiv()

//- Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main', 'Products', 'About us', 'Contacts']

let createList = (arr) => {
	let ul = document.createElement('ul')

	document.body.appendChild(ul);
	for (let arrElement of arr) {
		let li = document.createElement('li');
		li.innerText = arrElement;
		ul.appendChild(li)
	}

}

createList(arr)

//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
	{title: 'JavaScript Complex', monthDuration: 5},
	{title: 'Java Complex', monthDuration: 6},
	{title: 'Python Complex', monthDuration: 6},
	{title: 'QA Complex', monthDuration: 4},
	{title: 'FullStack', monthDuration: 7},
	{title: 'Frontend', monthDuration: 4}
];

let createDivFromArr = (arr) => {

	for (let item of arr) {
		let div = document.createElement('div');
		div.innerText = item.title + ': ' + item.monthDuration + ' months';
		document.body.appendChild(div);
	}
}

createDivFromArr(coursesAndDurationArray)

//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p
// class='description'> з monthDuration елементу. Завдання робити через цикли.

let createListDiv = (arr) => {

	for (let item of arr) {
		let div = document.createElement('div');
		div.classList.add('item');

		let h1 = document.createElement('h1');
		h1.classList.add('heading');

		let p = document.createElement('p');
		p.classList.add('description');

		h1.innerText = item.title;
		p.innerText = item.monthDuration;

		document.body.appendChild(div);
		div.append(h1, p);
	}
}

createListDiv(coursesAndDurationArray)