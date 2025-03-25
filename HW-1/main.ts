// --------------------------------------------

let a: string = 'hello';
console.log(a)

let b: string = 'owu';
console.log(b)

let c: string = 'com';
console.log(c)

let d: string = 'ua';
console.log(d)

let e: number = 1;
console.log(e)

let f: number = 10;
console.log(f)

let g: number = -999;
console.log(g)

let j: number = 123;
console.log(j)

let h: number = 3.14;
console.log(h)

let k: number = 16;
console.log(k)

let l: boolean = true;
console.log(l)

let p: boolean = false;
console.log(p)

// --------------------------------------------

let firstName: string = 'Yurii';
let middleName: string = 'Mykolayovych';
let lastName: string = 'Shulha';
let person: string = firstName + ' ' + middleName + ' ' + lastName;
console.log(person)

// --------------------------------------------

let number: number = 100;
let string : string= '100';
let boolean: boolean = true;
console.log(typeof string, typeof number, typeof boolean);

// --------------------------------------------

let nameUser: string | null = prompt('What is your name?');
let nameMiddle:string | null = prompt('What is your middle name?');
let age:string | null = prompt('What is your age number?');
console.log(`${nameUser} ${nameMiddle} - ${age} years old`);


