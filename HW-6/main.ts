// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const findLength = (string: string): number => string.length

console.log(findLength('hello world'))
console.log(findLength('lorem ipsum'))
console.log(findLength('javascript is cool'))

//Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

const doUppercase = (string: string): string => string.toUpperCase()

console.log(doUppercase('hello world'))
console.log(doUppercase('lorem ipsum'))
console.log(doUppercase('javascript is cool'))

//Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const doLowercase = (string: string): string => string.toLowerCase()

console.log(doLowercase('HELLO WORLD'))
console.log(doLowercase('LOREM IPSUM'))
console.log(doLowercase('JAVASCRIPT IS COOL'))

//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

const trim = (string: string): string => string.trim()
console.log(trim(' dirty string   '))

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = (str: string): string[] => str.split(' ')

console.log(stringToArray('Ревуть воли як ясла повні'))

//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const valueToString = (str: number[]): string[] => str.map(item => item.toString())

console.log(valueToString([
    10, 8, -7, 55, 987, -1011, 0, 1050, 0
]))

//створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення
// аргументу direction. let nums = [11,21,3]; sortNums(nums,'ascending') // [3,11,21] sortNums(nums,'descending') // [21,11,3]

const sortNums = (array: number[], direction: string): number[] | undefined => {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a)
    }
}

console.log(sortNums([
    11, 21, 3
], 'descending'))

//є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray1: Cours[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

type Cours = {
    title: string,
    monthDuration: number
}

type CoursWithId = Cours & { id: number };

const sortValue = (array: Cours[]): Cours[] => array.sort((a: Cours, b: Cours) => a.monthDuration - b.monthDuration)

console.log(sortValue(coursesAndDurationArray1))

const filterValue = (array: Cours[]): Cours[] => array.filter(item => item.monthDuration > 5)

console.log(filterValue(coursesAndDurationArray1))

const changeArr = (array: Cours[]): CoursWithId[] => array.map((item, index) => {
    return {
        id: index + 1, ...item
    }
})

console.log(changeArr(coursesAndDurationArray1))


// описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

type Suit = {
    name: string,
    color: string,
}

type Deck = {
    value: string,
    suit: string,
    color: string,
}

const createDeckCards = (): Deck[] => {
    const suits: Suit[] = [
        {name: "spades", color: "black"}, {name: "diamonds", color: "red"}, {
            name: "hearts",
            color: "red"
        }, {name: "clubs", color: "black"}
    ];
    const values: string[] = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    const deck: Deck[] = [];

    for (const suit of suits) {
        for (const value of values) {
            deck.push({value, suit: suit.name, color: suit.color});
        }
    }

    return deck;
}

const deck: Deck[] = createDeckCards();
console.log(deck);


const findSuitAndValue = (array: Deck[], value: string, suit: string): Deck | undefined => array.find(item => item.suit === suit && item.value === value);

const findCardValues = (array: Deck[], value: string): Deck[] => array.filter(item => item.value === value);

const findCardsColor = (array: Deck[], color: string): Deck[] => array.filter(item => item.color === color);

const findCardsSuite = (array: Deck[], suit: string): Deck[] => array.filter(item => item.suit === suit);

const filterSuitAndValues = (array: Deck[], suit: string, value: string): Deck[] => array.filter(item => item.suit === suit && item.value >= value);


const filterDesk = (array: Deck[], callback: Function, ...args: string[]): Function => callback(array, ...args);


console.log(filterDesk(deck, findSuitAndValue, 'ace', 'spades'));
console.log(filterDesk(deck, findCardValues, '6'));
console.log(filterDesk(deck, findCardsColor, 'red'))
console.log(filterDesk(deck, findCardsSuite, 'diamonds'))
console.log(filterDesk(deck, filterSuitAndValues, 'clubs', '9'))

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

type Coloda = {
    spades: Deck[],
    diamonds: Deck[],
    hearts: Deck[],
    clubs: Deck[],
}

const reduceArr = (array: Deck[]): Coloda => array.reduce((acc: Coloda, item: Deck) => {

    switch (item.suit) {
        case 'spades':
            acc.spades.push(item);
            break;
        case 'diamonds':
            acc.diamonds.push(item);
            break;
        case 'clubs':
            acc.clubs.push(item);
            break;
        case 'hearts':
            acc.hearts.push(item);
            break;
        default:
            console.log('Wrong card')
            break;
    }

    return acc
}, {
    spades: [], diamonds: [], hearts: [], clubs: []
});

console.log(reduceArr(deck));

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

type MyCours = {
    title: string,
    monthDuration: number
    hourDuration: number,
    modules: string[],
}

let coursesArray: MyCours[] = [
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
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
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

const findValue = (array: MyCours[], value:string):MyCours[] => array.filter(item => item.modules.includes(value));

console.log(findValue(coursesArray, 'sass'));
console.log(findValue(coursesArray, 'docker'));





