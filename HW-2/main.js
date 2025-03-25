"use strict";
// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен
// елемент в консоль
let arr = [
    1, 2, 4, true, false, 'niko', 5, { name: 'alex' }, [2, 3], ['aba', 'ima']
];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount,
// genre.
let objKing = {
    title: 'King', pageCount: 200, genre: 'historical'
};
let objAfrica = {
    title: 'Africa', pageCount: 350, genre: 'drama'
};
let objButterfly = {
    title: 'Butterfly', pageCount: 298, genre: 'mystery'
};
let objQueen = {
    title: 'Queen',
    pageCount: 200,
    genre: 'historical',
    authors: [
        { name: 'Paramon Grizli', age: 42 },
        { name: 'Igor Pristavay', age: 56 }
    ]
};
let objCanada = {
    title: 'Canada', pageCount: 220, genre: 'drama', authors: [
        {
            name: 'Jhorah Mormont', age: 40
        }, {
            name: 'Igor Pristavay', age: 40
        }
    ]
};
let objWolf = {
    title: 'Wolf', pageCount: 345, genre: 'mystery', authors: [
        {
            name: 'Alex Dotson', age: 33
        }, {
            name: 'Michelley McCarti', age: 38
        }
    ]
};
let arrUsers = [
    {
        name: "Alice Morgan", username: "shadow_seeker", password: "pass1234"
    }, {
        name: "Benjamin Carter", username: "void_walker", password: "qwerty5678"
    }, {
        name: "Clara Thompson", username: "whispering_soul", password: "mystic007"
    }, {
        name: "Daniel Reynolds", username: "phantom_raven", password: "daniel2024"
    }, {
        name: "Eleanor Smith", username: "moonlight_veil", password: "secret4321"
    }, {
        name: "Frederick Brown", username: "arcane_keeper", password: "keeperPass"
    }, {
        name: "Grace Anderson", username: "silent_omen", password: "omen998"
    }, {
        name: "Henry White", username: "cryptic_echo", password: "echoSuper"
    }, {
        name: "Isabella Johnson", username: "twilight_mage", password: "mage123"
    }, {
        name: "Jack Wilson", username: "ethereal_specter", password: "specter2025"
    }
];
for (let arrUser of arrUsers) {
    console.log(arrUser.password);
}
let temperatura = [
    {
        monday: {
            morning: '10dg', afternoon: '12dg', evening: '9dg'
        }
    }, {
        tuesday: {
            morning: '11dg', afternoon: '15dg', evening: '10dg'
        }
    }, {
        wednesday: {
            morning: '12dg', afternoon: '20dg', evening: '21dg'
        }
    }, {
        thursday: {
            morning: '13dg', afternoon: '20dg', evening: '15dg'
        }
    }, {
        friday: {
            morning: '20dg', afternoon: '25dg', evening: '20dg'
        }
    }, {
        saturday: {
            morning: '20dg', afternoon: '26dg', evening: '21dg'
        }
    }, {
        sunday: {
            morning: '19dg', afternoon: '22dg', evening: '19dg'
        }
    }
];
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
console.log(x !== 0 ? 'True' : 'False');
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 44;
if (time >= 0 && time < 15) {
    console.log("1st quarter");
}
else if (time >= 15 && time < 30) {
    console.log("2nd quarter");
}
else if (time >= 30 && time < 45) {
    console.log("3rd quarter");
}
else if (time >= 45 && time < 60) {
    console.log("4th quarter");
}
else {
    console.log("Wrong value");
}
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 9;
console.log(day >= 1 && day <= 10 ? '1st decade' : day >= 11 && day <= 20 ? '2nd decade' : day >= 21 && day <= 31 ? '3rd decade' : 'Wrong value');
let weeklyPlans = [
    {
        day: "Monday", plan: "Go to the gym", tasks: ["Workout", "Buy groceries", "Call mom"]
    }, {
        day: "Tuesday", plan: "Work on project", tasks: ["Finish coding", "Write documentation", "Meeting with team"]
    }, {
        day: "Wednesday",
        plan: "Attend conference",
        tasks: ["Prepare presentation", "Network with participants", "Take notes"]
    }, {
        day: "Thursday", plan: "Study new topic", tasks: ["Read articles", "Take notes", "Practice exercises"]
    }, {
        day: "Friday", plan: "Relax and unwind", tasks: ["Watch a movie", "Go for a walk", "Catch up on hobbies"]
    }, {
        day: "Saturday",
        plan: "Spend time with friends",
        tasks: ["Have lunch together", "Go to the park", "Play board games"]
    }, {
        day: "Sunday", plan: "Prepare for the week ahead", tasks: ["Organize schedule", "Meal prep", "Do laundry"]
    }
];
let enterNumber = 0;
switch (enterNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        console.log(weeklyPlans[enterNumber - 1]);
        break;
    default:
        console.log('Wrong value');
}
// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let firstNumber = 11;
let secondNumber = 20;
console.log(firstNumber > secondNumber ? 'first greater' : firstNumber < secondNumber ? 'second greater' : 'the numbers are equal');
// змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до
// false, а це 0 null undefined і тд).
let xxx = undefined;
if (!!xxx === false) {
    console.log('default');
}
else {
    console.log('Another value');
}
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 }, {
        title: 'Java Complex',
        monthDuration: 6
    }, { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 }, { title: 'FullStack', monthDuration: 7 }, {
        title: 'Frontend',
        monthDuration: 4
    }
];
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    if (coursesAndDurationArrayElement.monthDuration > 5)
        console.log(coursesAndDurationArrayElement.title + ' Super');
}
