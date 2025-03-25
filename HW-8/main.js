"use strict";
// а допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let coursesAndDurationArray2 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let newCoursesAndDurationArray = coursesAndDurationArray2.map((item, index) => {
    return {
        id: index + 1, ...item
    };
});
console.log(newCoursesAndDurationArray);
//Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
let deepCopy = (object) => {
    if (object === null || object === undefined || Number.isNaN(object))
        return object;
    if (typeof object === "object") {
        const clonedObj = {};
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                clonedObj[key] = deepCopy(object[key]);
            }
        }
        return clonedObj;
    }
    if (Array.isArray(object)) {
        return object.map(deepCopy);
    }
    return object;
};
const original = {
    a: 10,
    b: NaN,
    c: undefined,
    d: null,
    e: [1, 2, { x: 3 }],
    f: function () {
        return "Hello!";
    }, g: {
        nested: {
            value: 42,
        },
    },
};
const copy = deepCopy(original);
console.log(copy);
console.log(copy.f());
console.log(isNaN(copy.b));
console.log(typeof copy.c);
console.log(copy.d === null);
