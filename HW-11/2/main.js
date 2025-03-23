// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.


const getRecipes = async () => {
	try {
		const res = await fetch('https://dummyjson.com/recipes');
		if (!res.ok) {
			console.error(`Помилка: ${res.status}`);
			return null; // Просто повертаємо null без throw
		}
		const {recipes} = await res.json();
		return recipes;
	} catch (err) {
		console.error('Помилка при отриманні даних:', err);
		return null;
	}
};


const renderRecipes = async () => {
	let recipes = await getRecipes();

	if (!recipes) {
		document.body.innerHTML = '<p style="color: red;">Не вдалося завантажити кошики. Спробуйте ще раз.</p>';
		return;
	}

	recipes.forEach(recipe => {
		let wrap = document.createElement('div');
		let h2 = document.createElement('h2');
		let div = document.createElement('div');
		let img = document.createElement('img');
		let ul = document.createElement('ul');
		let ol = document.createElement('ol');

		wrap.className = 'list';

		h2.innerText = recipe.name;
		img.setAttribute('src', recipe.image);

		document.body.appendChild(wrap)
		wrap.append(h2, div, ul)
		div.append(img, ol)
		let {ingredients, instructions} = recipe;

		ingredients.forEach(ingredient => {

			let liUL = document.createElement('li');

			liUL.innerText = ingredient;
			ul.appendChild(liUL);


		})

		instructions.forEach(instruction => {
			let liOL = document.createElement('li');
			liOL.innerText = instruction;
			ol.appendChild(liOL);
		})
	})
}

renderRecipes()

