// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


const getCarts = async () => {
	try {
		const res = await fetch('https://dummyjson.com/carts');
		if (!res.ok) {
			console.error(`Помилка: ${res.status}`);
			return null; // Повертаємо null без throw
		}
		const {carts} = await res.json();
		return carts;
	} catch (err) {
		console.error('Помилка при отриманні даних:', err);
		return null;
	}
};


const renderCarts = async () => {
	let carts = await getCarts();
	if (!carts) {
		document.body.innerHTML = '<p style="color: red;">Не вдалося завантажити кошики. Спробуйте ще раз.</p>';
		return;
	}

	carts.forEach(({products}) => {
		products.forEach(product => {

			let div = document.createElement('div');
			let title = document.createElement('h2');
			let text = document.createElement('p');
			let img = document.createElement('img');

			title.innerText = product.title;
			text.innerText = `${product.price} $`;
			img.setAttribute('src', product.thumbnail);

			document.body.appendChild(div);
			div.append(title, img, text);
		})
	})
}

renderCarts()