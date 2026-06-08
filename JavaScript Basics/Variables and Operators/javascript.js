console.log("External .js");

let firstName = "Jhon";
let lastName = "Doe";
console.log(firstName);
console.log(lastName);

let age = 11;
console.log(age);

age = 54;
console.log(age);

const pi = 3.14;
/*
  ! Throw an error.
  pi = 10;
  */
console.log(pi);

let math = 3 + 2 - 76 * (1 + 1);
console.log(math);

console.log(23 + 97);

console.log(23 + 34 + 45 + 56 + 67 + 78);

console.log((4 + 6 + 9) / 77);

let a0 = 10;
console.log(a0);
a0 = 20;
console.log(a0);
let b0 = 7 * a0;
console.log(b0);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

let price = 25;
const maxPrice = price * 2;
price = 50;
console.log(maxPrice);

let message;
message = "Hello";
console.log(3 + message + 3);

/*
 * javascript.info/variables tasks
 */

// 1. Working with variables
let admin, name;
name = "Jhon";
admin = name;
console.log(admin);

// 2. Giving the right name
let ourPlanetName = "Earth";
let currentUserName = "Name";

// 3. Uppercase const?
let BIRTHDAY = "18.04.1982";
//age = someCode(BIRTHDAY);

/*
 * javascript.info/Operators tasks
 */

// 1. The postfix and refix forms
let a = 1, //2
  b = 1; //2

let c = ++a; //2
let d = b++; //1

// 2. Assignment result
let a1 = 2;
let x = 1 + (a1 *= 2); // a = 4, x = 5

// 3. Tye conversions
"" + 1 + 0; //"10"
"" - 1 + 0; //-1
true + false; //1
6 / "3"; //2
"2" * "3"; //6
4 + 5 + "px"; //"9px"
"$" + 4 + 5; //"$45"
"4" - 2; //2
"4px" - 2; // NaN
"  -9  " + 5; //" -9 5"
"  -9  " - 5; //-14
null + 1; //1
undefined + 1; //NaN
" \t \n" - 2; //-2

// 4. Fix the addition
let a2 = (prompt("First number?"), 1);
let b2 = (prompt("Second number?"), 2);

alert(+a2 + +b2); // 12
