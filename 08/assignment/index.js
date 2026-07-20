// Part 1
// Q1
const FirstName = "Alex"
const LastName = "Zendra"
console.log(FirstName + LastName);

// q2
const age = 19;
console.log(age, "Type: ", typeof(age))
// q3
const str = "string";
const num = 18;
const bool = true;
const undefinedVar = undefined;
const nullVar = null;

console.log("string: ", typeof(str))
console.log("number: ", typeof(num))
console.log("boolean: ", typeof(bool))
console.log("undefinedVar: ", typeof(undefinedVar))
console.log("nullVar: ", typeof(nullVar))

// q5
const price = 99.99
console.log(typeof(price))

// q6
// type of null -> object
// type of undefined -> undefined


// part 2:
// q1
const a  = 10
const b  = 0
console.log(a == b)
console.log(a === b)
console.log(a != b)
console.log(a !== b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

// q2
// 10 == '10' -> true
// 10 === '10' -> false

// q3
// null == undefined -> true 
// null === undefined -> false

// q4
const p1  = 20
const p2 = 50

console.log(p1 > p2 ? "p1 is older then p2" : "p2 is older then p1")

// part 3:

// q1
const num = -10;

if (num < 0) console.log("number is negative");
else if (num > 0) console.log("number is positive");
else console.log("neutral");

// q2

const mark = 35;

console.log(mark > 40 ? "pass" : "fail")

// q3

const num1 = 10
const num2 = 20

if(num1 > num2) console.log("num1 is greater");
else if (num2 > num1) console.log("num2 is greater");
else console.log("both equal");

// q4
const num1 = 10
const num2 = 30
const num3 = 40

if (num1 > num2 && num1 > num3) console.log("num1 is greater");
else if (num2 > num1 && num2 > num3) console.log("num2 is greater");
else if (num3 > num2 && num3 > num1) console.log("num3 is greater");
else console.log("equal");

// q5
const n = 10

console.log(n % 2 == 0? "even" : "odd")


// challenge

// q1
let arr = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr[i] = 'JS';
    }
}

// q2
const name = "alex";
const age = 89;
const city = "delhi";
console.log(`Hello, I'm ${name} a ${age} YO,  from ${city}`)

// q3



