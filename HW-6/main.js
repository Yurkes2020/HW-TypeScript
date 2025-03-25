"use strict";
// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const findLength = (string) => string.length;
console.log(findLength('hello world'));
console.log(findLength('lorem ipsum'));
console.log(findLength('javascript is cool'));
//Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
const doUppercase = (string) => string.toUpperCase();
console.log(doUppercase('hello world'));
console.log(doUppercase('lorem ipsum'));
console.log(doUppercase('javascript is cool'));
//Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const doLowercase = (string) => string.toLowerCase();
console.log(doLowercase('HELLO WORLD'));
console.log(doLowercase('LOREM IPSUM'));
console.log(doLowercase('JAVASCRIPT IS COOL'));
//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
const trim = (string) => string.trim();
console.log(trim(' dirty string   '));
//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = (str) => str.split(' ');
console.log(stringToArray('Ревуть воли як ясла повні'));
//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const valueToString = (str) => str.map(item => item.toString());
console.log(valueToString([
    10, 8, -7, 55, 987, -1011, 0, 1050, 0
]));
//створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення
// аргументу direction. let nums = [11,21,3]; sortNums(nums,'ascending') // [3,11,21] sortNums(nums,'descending') // [21,11,3]
const sortNums = (array, direction) => {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    }
    else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
};
console.log(sortNums([
    11, 21, 3
], 'descending'));
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
let coursesAndDurationArray1 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const sortValue = (array) => array.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(sortValue(coursesAndDurationArray1));
const filterValue = (array) => array.filter(item => item.monthDuration > 5);
console.log(filterValue(coursesAndDurationArray1));
const changeArr = (array) => array.map((item, index) => {
    return {
        id: index + 1, ...item
    };
});
console.log(changeArr(coursesAndDurationArray1));
const createDeckCards = () => {
    const suits = [
        { name: "spades", color: "black" }, { name: "diamonds", color: "red" }, {
            name: "hearts",
            color: "red"
        }, { name: "clubs", color: "black" }
    ];
    const values = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    const deck = [];
    for (const suit of suits) {
        for (const value of values) {
            deck.push({ value, suit: suit.name, color: suit.color });
        }
    }
    return deck;
};
const deck = createDeckCards();
console.log(deck);
const findSuitAndValue = (array, value, suit) => array.find(item => item.suit === suit && item.value === value);
const findCardValues = (array, value) => array.filter(item => item.value === value);
const findCardsColor = (array, color) => array.filter(item => item.color === color);
const findCardsSuite = (array, suit) => array.filter(item => item.suit === suit);
const filterSuitAndValues = (array, suit, value) => array.filter(item => item.suit === suit && item.value >= value);
const filterDesk = (array, callback, ...args) => callback(array, ...args);
console.log(filterDesk(deck, findSuitAndValue, 'ace', 'spades'));
console.log(filterDesk(deck, findCardValues, '6'));
console.log(filterDesk(deck, findCardsColor, 'red'));
console.log(filterDesk(deck, findCardsSuite, 'diamonds'));
console.log(filterDesk(deck, filterSuitAndValues, 'clubs', '9'));
const reduceArr = (array) => array.reduce((acc, item) => {
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
            console.log('Wrong card');
            break;
    }
    return acc;
}, {
    spades: [], diamonds: [], hearts: [], clubs: []
});
console.log(reduceArr(deck));
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
const findValue = (array, value) => array.filter(item => item.modules.includes(value));
console.log(findValue(coursesArray, 'sass'));
console.log(findValue(coursesArray, 'docker'));
