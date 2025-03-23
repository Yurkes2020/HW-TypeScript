// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.phone = phone;
}

let users = []

users.push(new User(1, "Олександр", "Петренко", "opetrenko@example.com", "+380671234567"))
users.push(new User(2, "Марія", "Іваненко", "mivanenko@example.com", "+380931234567"))
users.push(new User(3, "Іван", "Сидорчук", "isidorchuk@example.com", "+380501234567"))
users.push(new User(4, "Анна", "Коваленко", "akovalenko@example.com", "+380631234567"))
users.push(new User(5, "Петро", "Мельник", "pmelnyk@example.com", "+380671112233"))
users.push(new User(6, "Ольга", "Шевченко", "oshevchenko@example.com", "+380991122334"))
users.push(new User(7, "Андрій", "Кравченко", "akravchenko@example.com", "+380671234890"))
users.push(new User(8, "Катерина", "Бондаренко", "kbondarenko@example.com", "+380931234890"))
users.push(new User(9, "Василь", "Гончар", "vgonchar@example.com", "+380501234890"))
users.push(new User(10, "Наталія", "Дмитренко", "ndmytrenko@example.com", "+380631234890"))

console.log(users)


// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filteredUsers = users.filter(user => user.id % 2 === 0)

console.log(filteredUsers)

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortedUsers = users.toSorted((a, b) => a.id - b.id)

console.log(sortedUsers)

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

	constructor(id, name, surname, email, phone, order) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phone = phone;
		this.order = order;

	}
}

let clients = [
	new Client(1, "Oleksandr", "Petrenko", "opetrenko@example.com", "+380671234567", ["Bread", "Milk", "Eggs"]),
	new Client(2, "Maria", "Ivanenko", "mivanenko@example.com", "+380931234567", ["Coffee", "Sugar"]),
	new Client(3, "Ivan", "Sydorchuk", "isidorchuk@example.com", "+380501234567", ["Tea", "Cookies"]),
	new Client(4, "Anna", "Kovalenko", "akovalenko@example.com", "+380631234567", ["Cheese", "Sausage", "Yogurt"]),
	new Client(5, "Petro", "Melnyk", "pmelnyk@example.com", "+380671112233", []),
	new Client(6, "Olha", "Shevchenko", "oshevchenko@example.com", "+380991122334", ["Fruits", "Vegetables"]),
	new Client(7, "Andrii", "Kravchenko", "akravchenko@example.com", "+380671234890", ["Fish", "Meat"]),
	new Client(8, "Kateryna", "Bondarenko", "kbondarenko@example.com", "+380931234890", []),
	new Client(9, "Vasyl", "Honchar", "vgonchar@example.com", "+380501234890", ["Pasta", "Oil", "Grains"]),
	new Client(10, "Nataliia", "Dmytrenko", "ndmytrenko@example.com", "+380631234890", ["Chocolate"]),
];

console.log(clients)

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortedClients = clients.toSorted((a, b) => a.order.length - b.order.length);

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм
// двигуна. додати в об'єкт функції: -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину` -- info () - яка
// виводить всю інформацію про автомобіль в форматі `назва поля - значення поля` -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної
// швидкості на значення newSpeed -- changeYear (newValue) - змінює рік випуску на значення newValue -- addDriver (driver) - приймає об'єкт який
// "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, release, speed, engine) {
	this.model = model;
	this.manufacturer = manufacturer;
	this.release = release;
	this.speed = speed;
	this.engine = engine;

	this.drive = function () {
		return `We are driving at a speed of ${speed} per hour`
	}

	this.info = function () {
		return `model: ${this.model}, manufacturer: ${this.manufacturer}, release: ${this.release}, speed: ${this.speed}, engine: ${this.engine}`;
	}

	this.increaseMaxSpeed = function (newSpeed) {
		return this.speed += newSpeed;
	};

	this.changeYear = function (newValue) {
		return this.release = newValue;
	};

	this.addDriver = function (driver) {
		return this.driver = driver;
	};

}

let cars = [
	new Car("Toyota Corolla", "Toyota", 2020, 180, "1.8L"),
	new Car("Ford Mustang", "Ford", 2021, 250, "5.0L"),
	new Car("BMW M3", "BMW", 2022, 280, "3.0L"),
	new Car("Audi A4", "Audi", 2019, 240, "2.0L"),
	new Car("Honda Civic", "Honda", 2021, 220, "2.0L"),
	new Car("Mercedes-Benz C-Class", "Mercedes-Benz", 2020, 250, "2.0L"),
	new Car("Chevrolet Camaro", "Chevrolet", 2022, 260, "6.2L"),
	new Car("Porsche 911", "Porsche", 2021, 310, "3.0L"),
	new Car("Nissan GT-R", "Nissan", 2020, 320, "3.8L"),
	new Car("Tesla Model S", "Tesla", 2021, 250, "Electric")
];

console.log(cars)
console.log(cars[8].info())
console.log(cars[9].addDriver('Zuzi'))


// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в
// об'єкт функції: -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину` -- info () - яка виводить всю
// інформацію про автомобіль в форматі `назва поля - значення поля` -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на
// значення newSpeed -- changeYear (newValue) - змінює рік випуску на значення newValue -- addDriver (driver) - приймає об'єкт який "водій" з
// довільним набором полів, і додає його в поточний об'єкт car

class Car1 {

	constructor(model, manufacturer, release, speed, engine) {
		this.model = model;
		this.manufacturer = manufacturer;
		this.release = release;
		this.speed = speed;
		this.engine = engine;
	}

	drive() {
		return `We are driving at a speed of ${speed} per hour`
	}

	info() {
		return `model: ${this.model.name}, manufacturer: ${this.manufacturer}, release: ${this.release}, speed: ${this.speed}, engine: ${this.engine}`;
	}

	increaseMaxSpeed(newSpeed) {
		return this.speed += newSpeed;
	};

	changeYear(newValue) {
		return this.release = newValue;
	};

	addDriver(driver) {
		return this.driver = driver;
	};

}

let cars1 = [
	new Car("Toyota Corolla", "Toyota", 2020, 180, "1.8L"),
	new Car("Ford Mustang", "Ford", 2021, 250, "5.0L"),
	new Car("BMW M3", "BMW", 2022, 280, "3.0L"),
	new Car("Audi A4", "Audi", 2019, 240, "2.0L"),
	new Car("Honda Civic", "Honda", 2021, 220, "2.0L"),
	new Car("Mercedes-Benz C-Class", "Mercedes-Benz", 2020, 250, "2.0L"),
	new Car("Chevrolet Camaro", "Chevrolet", 2022, 260, "6.2L"),
	new Car("Porsche 911", "Porsche", 2021, 310, "3.0L"),
	new Car("Nissan GT-R", "Nissan", 2020, 320, "3.8L"),
	new Car("Tesla Model S", "Tesla", 2021, 250, "Electric")
];

console.log(cars1)


// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// 	За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// 	Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Cinderella(name, age, sizeLeg) {
	this.name = name;
	this.age = age;
	this.sizeLeg = sizeLeg;
}

const cinderellas = [
	new Cinderella('Cirila', 18, 35),
	new Cinderella('Anastasia', 19, 36),
	new Cinderella('Bella', 20, 37),
	new Cinderella('Diana', 21, 38),
	new Cinderella('Elena', 22, 39),
	new Cinderella('Fiona', 18, 35),
	new Cinderella('Gabriella', 23, 40),
	new Cinderella('Hanna', 24, 41),
	new Cinderella('Isabella', 25, 36),
	new Cinderella('Julia', 26, 37)
]

console.log(cinderellas)

function Prince(name, age, findSlipper) {
	this.name = name;
	this.age = age;
	this.findSlipper = findSlipper;

	this.findCinderella = function (cinderellas) {
		for (const cinderella of cinderellas) {
			if (cinderella.sizeLeg === this.findSlipper) {
				return cinderella
			}

		}
		return "Didn't find Cinderella"
	};

	this.findCinderella2 = function (cinderellas) {
		return cinderellas.find(item => item.sizeLeg === this.findSlipper);
	}
}

let prince = new Prince("Prince", 25, 36);

const foundCinderella = prince.findCinderella(cinderellas);
const foundCinderella2 = prince.findCinderella2(cinderellas);

console.log(foundCinderella);
console.log(foundCinderella2);


// Через Array.prototype. створити власний foreach, filter


Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
}

cinderellas.myForEach(i => console.log(i));

Array.prototype.myFilter = function (callback) {
	let arr = []
	for (let i = 0; i < this.length; i++) {

		if (callback(this[i], i, this)) arr.push(this[i])

	}
	return arr;
}

console.log(cinderellas.myFilter(i => i.sizeLeg === 35));







