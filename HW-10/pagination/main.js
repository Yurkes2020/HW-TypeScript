// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const arr = Array.from({length: 100}, (_, i) => ({
	id: i + 1, name: `Name ${i + 1}`, age: i
}));


let div = document.getElementsByTagName('div')[0]
let [prev, next] = document.getElementsByTagName('button')

let countStart = parseInt(localStorage.getItem('countStart')) || 0;
let countEnd = parseInt(localStorage.getItem('countEnd')) || 10;

let displayItems = () => {
	div.innerHTML = '';
	for (let i = countStart; i < countEnd && i < arr.length; i++) {
		let p = document.createElement("p");
		p.textContent = `${arr[i].name}, Age: ${arr[i].age}`;
		div.appendChild(p);
	}

	localStorage.setItem('countStart', countStart);
	localStorage.setItem('countEnd', countEnd);
}

displayItems();

next.addEventListener('click', () => {
	if (countEnd < arr.length) {
		countStart += 10;
		countEnd += 10;
		displayItems();
	}
});

prev.addEventListener('click', () => {
	if (countStart > 0) {
		countStart -= 10;
		countEnd -= 10;
		displayItems();
	}
});



