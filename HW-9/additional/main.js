// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості
// modules зробити список з елементами Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом ------------------
// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.

let coursesArray = [
	{
		title: 'JavaScript Complex',
		monthDuration: 5,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
	}, {
		title: 'Java Complex', monthDuration: 6, hourDuration: 909, modules: [
			'html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced'
		]
	}, {
		title: 'Python Complex', monthDuration: 6, hourDuration: 909, modules: [
			'html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced'
		]
	}, {
		title: 'QA Complex', monthDuration: 4, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
	}, {
		title: 'FullStack', monthDuration: 7, hourDuration: 909, modules: [
			'html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java'
		]
	}, {
		title: 'Frontend',
		monthDuration: 4,
		hourDuration: 909,
		modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
	}
];

let createHTML = (arr) => {
	document.body.style.display = 'flex'
	document.body.style.gap = '20px'

	for (let arrElement of arr) {
		let div = document.createElement('div');
		document.body.appendChild(div);


		let h1 = document.createElement('h1');
		h1.innerText = arrElement.title;

		let p = document.createElement('p');
		p.innerText = arrElement.monthDuration + ' mounths';

		let span = document.createElement('span');
		span.innerText = arrElement.hourDuration + ' hours';
		span.style.paddingLeft = '10px';

		let ul = document.createElement('ul');

		div.append(h1, p, ul);
		p.appendChild(span);

		for (let item of arrElement.modules) {
			let li = document.createElement('li');
			li.innerText = item;
			ul.appendChild(li);
		}

	}
}

createHTML(coursesArray);