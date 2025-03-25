// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

class User1 {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string,
        public phone: string
    ) {
    }
}

const users1: User1[] = [
    new User1(1, "Олександр", "Петренко", "opetrenko@example.com", "+380671234567"),
    new User1(2, "Марія", "Іваненко", "mivanenko@example.com", "+380931234567"),
    new User1(3, "Іван", "Сидорчук", "isidorchuk@example.com", "+380501234567"),
    new User1(4, "Анна", "Коваленко", "akovalenko@example.com", "+380631234567"),
    new User1(5, "Петро", "Мельник", "pmelnyk@example.com", "+380671112233"),
    new User1(6, "Ольга", "Шевченко", "oshevchenko@example.com", "+380991122334"),
    new User1(7, "Андрій", "Кравченко", "akravchenko@example.com", "+380671234890"),
    new User1(8, "Катерина", "Бондаренко", "kbondarenko@example.com", "+380931234890"),
    new User1(9, "Василь", "Гончар", "vgonchar@example.com", "+380501234890"),
    new User1(10, "Наталія", "Дмитренко", "ndmytrenko@example.com", "+380631234890"),
];

console.log(users1)


// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filteredUsers1: User1[] = users1.filter(user => user.id % 2 === 0)

console.log(filteredUsers1)

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortedUsers: User1[] = users1.toSorted((a, b) => a.id - b.id)

console.log(sortedUsers)

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string,
        public phone: string,
        public order: string[]
    ) {
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

const sortedClients: Client[] = clients.toSorted((a, b) => a.order.length - b.order.length);

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм
// двигуна. додати в об'єкт функції: -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину` -- info () - яка
// виводить всю інформацію про автомобіль в форматі `назва поля - значення поля` -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної
// швидкості на значення newSpeed -- changeYear (newValue) - змінює рік випуску на значення newValue -- addDriver (driver) - приймає об'єкт який
// "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car {
    constructor(
        public model: string,
        public manufacturer: string,
        public release: number,
        public speed: number,
        public engine: string,
        public driver?: string
    ) {
    }

    drive(): string {
        return `We are driving at a speed of ${this.speed} km per hour`;
    }

    info(): string {
        return `Model: ${this.model}, Manufacturer: ${this.manufacturer}, Release: ${this.release}, Speed: ${this.speed}, Engine: ${this.engine}`;
    }

    increaseMaxSpeed(newSpeed: number): void {
        this.speed += newSpeed;
    }

    changeYear(newValue: number): void {
        this.release = newValue;
    }

    addDriver(driver: string): void {
        this.driver = driver;
    }
}

let cars: Car[] = [
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

    constructor(public model: string,
                public manufacturer: string,
                public release: number,
                public speed: number,
                public engine: string,
                public driver?: string) {
    }

    drive(): string {
        return `We are driving at a speed of ${this.speed} per hour`
    }

    info(): string {
        return `model: ${this.model}, manufacturer: ${this.manufacturer}, release: ${this.release}, speed: ${this.speed}, engine: ${this.engine}`;
    }

    increaseMaxSpeed(newSpeed: number): void {
        this.speed += newSpeed;
    };

    changeYear(newValue: number): void {
        this.release = newValue;
    };

    addDriver(driver: string): void {
        this.driver = driver;
    };

}

let cars1: Car1[] = [
    new Car1("Toyota Corolla", "Toyota", 2020, 180, "1.8L"),
    new Car1("Ford Mustang", "Ford", 2021, 250, "5.0L"),
    new Car1("BMW M3", "BMW", 2022, 280, "3.0L"),
    new Car1("Audi A4", "Audi", 2019, 240, "2.0L"),
    new Car1("Honda Civic", "Honda", 2021, 220, "2.0L"),
    new Car1("Mercedes-Benz C-Class", "Mercedes-Benz", 2020, 250, "2.0L"),
    new Car1("Chevrolet Camaro", "Chevrolet", 2022, 260, "6.2L"),
    new Car1("Porsche 911", "Porsche", 2021, 310, "3.0L"),
    new Car1("Nissan GT-R", "Nissan", 2020, 320, "3.8L"),
    new Car1("Tesla Model S", "Tesla", 2021, 250, "Electric")
];

console.log(cars1)


// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// 	За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// 	Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(public name: string, public age: number, public sizeLeg: number) {

    }
}

const cinderellas: Cinderella[] = [
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

class Prince {
    constructor(public name: string, public age: number, public findSlipper: number) {
    }


    findCinderella(cinderellas: Cinderella[]): Cinderella | string {
        for (const cinderella of cinderellas) {
            if (cinderella.sizeLeg === this.findSlipper) {
                return cinderella
            }

        }
        return "Didn't find Cinderella"
    };

    findCinderella2(cinderellas: Cinderella[]): Cinderella | undefined {
        return cinderellas.find(item => item.sizeLeg === this.findSlipper);
    }
}

let prince = new Prince("Prince", 25, 36);

const foundCinderella = prince.findCinderella(cinderellas);
const foundCinderella2 = prince.findCinderella2(cinderellas);

console.log(foundCinderella);
console.log(foundCinderella2);


// Через Array.prototype. створити власний foreach, filter

declare global {
    interface Array<T> {
        myForEach(callback: (item: T, index: number, array: T[]) => void): void;
    }
}

declare global {
    interface Array<T> {
        myFilter(callback: (item: T, index: number, array: T[]) => void): void;
    }
}


Array.prototype.myForEach = function (callback:Function):void {
    for (let i:number = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}



Array.prototype.myFilter = function (callback:Function):number[] {
    let arr:number[] = []
    for (let i:number = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) arr.push(this[i])

    }
    return arr;
}


export {}






