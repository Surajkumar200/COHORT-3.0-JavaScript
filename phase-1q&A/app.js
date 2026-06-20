// ***Console & Basics

console.log("Hello JavaScript");
console.log(`my name is Suraj ,i'm 25years old, i'm from Kolkata`);
console.warn("this is warning");
console.error("this is an error msg");
console.table(["suraj", "puja", "sonu", "shaw", "singh"])

// ***Variables
var studentName = "suraj"
var age = 25
console.log(`the studentName is ${studentName},and his age is ${age}`)

let a = 20
let b = 25
let c 
c = a 
a = b
b = c
console.log(a, b)

const PI = 3.14
console.log(PI)

let x;
console.log(x)

let score = 0;
console.log(score + 10)

let firstNmae = "suraj"
let lastName = "shaw"
let fullName = firstNmae + lastName
console.log(fullName)


// ***Data Types
let string = "string"
let num = 25
let bool = true
let nul = null
let undifin = undefined

console.log(typeof(string));
console.log(typeof (num));
console.log(typeof(bool));
console.log(typeof(nul));
console.log(typeof (undifin));

let phoneNumber = 7003086831
console.log(typeof (phoneNumber))


// ***Type Conversion & Coercion
let num1 = "50"
Number(num1)
let num2 = 100
String(100)
let boole = "true"
Boolean(bool)
console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof (bool));
console.log("5"+2);
console.log("5" - 2);
console.log(true + 1);

var num3 = "123abc"
let a1= Number(num3)
console.log(typeof(a1))
let num4 = "500px"
let a2 = parseInt(num4)
console.log(typeof (a2))

// **Operators
let num5 = 45 
let num6 = 55
let add = num5 + num6
console.log(add)
console.log(25 % 4)
console.log(21 ** 2);
num5++
num6--
console.log(num5,num6)
num5 += 20
console.log(num5)
console.log(num5<num6)
console.log(num5>num6)
console.log(num5<=num6)
console.log(num5>=num6)

let num7 = 25
let str = "25"
console.log(num7+str)
console.log(num7 == str);
console.log(num7 === str);
if (num7 <= str && num7 == str) {
    console.log("&& work")
}
if (num7 <= str || num7 === str) {
    console.log("|| work")
}

let str1 = "suraj"
console.log(str1.length)
let x1 = str1.toUpperCase()
console.log(x1)
console.log(str1.toLocaleLowerCase())
console.log(str.includes(a));
let str2 = "Hello World"
console.log(str2.slice(5, 11))
console.log(str2.replace("World", "Suraj"))
let str3 = "        g    Hello   g        "
console.log(str3.trim())
console.log(str1.repeat(5))
console.log(str1.charAt(0))
console.log(str1[0])


// *Numbers & Math

console.log(Math.round(4.7));
console.log(Math.sqrt(81))
console.log(Math.max(10, 20, 5, 99));
console.log(Math.floor(Math.random() * 11));

let str4 = 3.141592
console.log(str4.toFixed(2));

// ***** Conditionals
let a4 = -5
if (a4 <= 0) {
    console.log("Negativ")
} else {
    console.log("positiv");
}

if (Math.abs(a4) % 2 == 1) {
    console.log("odd")

} else {
    console.log("even");
}


let vote = 20
if (18 <= vote) {
    console.log("yes vote");
} else {
    console.log("no vote");
}

if (a4 < vote) {
    console.log(vote + "its big");
} else
{
    console.log(a4+ "its big");
}

let x4, x2, x3;
x4 = 50
x2 = 60 
x3 = 30

if (x4 < x2) {
    if (x2 < x3) {
        console.log(x3 + " x3 is big");
    } else {
        console.log(x2 + " x2 is big");
    }
}
else {
    console.log(x4 + " x4 is big");
}


let year = 1200
if ((year % 4 == 0 && year % 100 != 0) || year%400 == 0) {
    console.log("yes leap year");
} else {
    console.log("no leap year");
}

let num8 = 30
if (num8 % 3 == 0 && num8 % 5 == 0) {
    console.log("yes by 3 and 5 ");
} else {
    console.log("no");
}

let gread = 76

switch (true) {
    case gread >= 90:
        console.log("A");
        break;
    case gread >= 75:
        console.log("B");
        break;
    case gread >= 50:
        console.log("C");
        break;
    case gread < 50:
        console.log("Fail");
    
}

let vowel = "i"

if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    console.log(vowel + " is vowel");
}
else {
    console.log(vowel +" is consonet");
}


// let calnum1 = Number(prompt("enter First Number"))
// let calnum2 = Number(prompt("enter second Number"))
// let operator = prompt("enter operator + , -,/, * ")

// switch (operator) {
//     case "+":
//         console.log(calnum1 + calnum2);
//         break;
//     case "-":
//         console.log(calnum1 - calnum2);
//         break;
//     case "/":
//         console.log(calnum1 / calnum2);
//         break;
//     case "*":
//         console.log(calnum1 * calnum2);
//         break;
//     default:
//         console.log("Invalid operator!");
// }


let number = 4

switch (number) {
    case 1:
        console.log("S");
        break;
    case 2:
        console.log("M");
        break;
    case 3:
        console.log("T");
        break;
    case 4:
        console.log("W");
        break;
    case 5:
        console.log("TH");
        break;
    case 6:
        console.log("F");
        break;
    case 7:
        console.log("S");
        break;
    default: console.log("wrong input");
}



// *******Truthy & Falsy
let TF = [] // "" , 0 ,[] , 
if (TF) {
    console.log("its truthy")
} else {
    console.log("it's falsy");
}

// ******  Mixed Practice Questions
//  1.> Create a mini biodata program using variables and template literals.

let userName, userAge, userGender, userLocation, userEmail

// userName = prompt("Enter your name")
// userAge = Number(prompt("Enter your age"))
// userGender = prompt("Enter your Gender M/F/O")
// userLocation = prompt("Enter your Location")
// userEmail = prompt("Enter your mail")

console.log(
    `
UserName=${userName} 
UserAge=${userAge} 
UserGender=${userGender} 
UserLocation=${userLocation} 
userEmail=${userEmail} 
    `
)

//2.> Calculate the area of a rectangle.
let Length , Width
// Length =Number(prompt("Enter Length"))
// Width = Number(prompt("Enter Width"))

console.log(`area of reactangale ${Length*Width}`);

// 3.>Calculate the simple interest.

let principal, rate, time 
// principal = Number(prompt("Enter principal"))
// rate = Number(prompt("Enter rate of interest"))
// time = Number(prompt("Enter time"))

console.log(`Simple interest is ${(principal * rate * time) / 100}`);


// 4.>Convert temperature from Celsius to Fahrenheit.
let celsius
// celsius = Number(prompt("Enter celsius"))
console.log(`${celsius} = Fahrenheit is ${(celsius * 9 / 5) + 32}`)

// 5.Convert kilometers into meters.
let kilometers
    // kilometers= Number(prompt("enter Kilometer"))

console.log(` your meter is ${kilometers* 1000}`)

// 6. Calculate total marks and percentage of 5 subjects.
let M, P, C, L, E 
// M = Number(prompt("Enter your msrks"))
// P = Number(prompt("Enter your msrks"))
// C = Number(prompt("Enter your msrks"))
// L = Number(prompt("Enter your msrks"))
// E = Number(prompt("Enter your msrks"))
let avg = (M + P + C + L + E)
console.log(`total marks ${avg} and avg is ${avg / 5}% `);


// 7. Calculate electricity bill based on units consumed.

// 8. Create a username generator using first name and birth year.
// 9. Check whether a string starts with a specific letter.
// 10. Count the total characters in a sentence excluding spaces.

let sentence;
// sentence = prompt("Enter what ever you want!")

// console.log(sentence.length);

// *** Logical Thinking Questions
// 1. Take two numbers and print which one is greater.
let numb1, numb2
    // numb1 = Number(prompt("enter number num1"))
    // numb2 = Number(prompt("enter number num2"))
if (numb1 < numb2) {
    console.log("num2 is big ");
} else {
    console.log("numb1 is big");
}


// 2. Check whether a number lies between 10 and 50.
let numb3 
// numb3 = Number(prompt("enter number num3"))
if (10 < numb3 && numb3 < 50) {
    console.log(`${numb3} is lies between 10 and 50`);
} else {
    console.log(`${numb3} is not lies between 10 and 50`);
}

// 3. Check whether a password length is greater than 8.
let password
// password = prompt("enter number password ")
// if (password.length >= 8) {
//     console.log(`strong  password`);
// } else {
//     console.log(`weak password`);
// }


// 4. Check if a person can drive:
// - age > 18
//     - has license = true
// let age2 , license
// age = Number(prompt("enter number age"))
// license = prompt("enter yes or no")
// if (18 <= age) {
//     if (license == "yes" || license == "YES"){
//         console.log("you can drive");
//     }else {
//         console.log("abe phele license bana");
//      }
// } else {
//     console.log("tu chotta hai bacche ");
// }


// 1. Check whether a number is divisible by 2, 3, or both.
let numb5 
// numb5 = Number(prompt("enter number"))
// if (numb5 % 2 == 0 && numb5 % 3 == 0) {
//     console.log(`${numb5} is divisible by both`);
// }
// else if (numb5 % 2 == 0 || numb5 % 3 == 0) {
//     if (numb5 % 2 == 0) {
//         console.log(`${numb5} is divisible by 2`);
//     } else {
//         console.log(`${numb5} is divisible by 3`);
//     }
  
// } else {
//     console.log(`${numb5} is not divisible`);
// }


// 2. Print`"Good Morning"`, `"Good Afternoon"`, or`"Good Evening"` based on time.
// ***use switch

// 3. Find whether a number is a multiple of 10.
// ** (number%10 == 0)
// 4. Create a simple discount calculator.
// *** switch
// 5. Check whether a product is in stock.
// *** in your  list its ablebale or not
// 6. Calculate final bill after GST.
// ***add total vlaues and * by 18% then add


// ******* ## Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.
let otp = Math.floor(1000 + Math.random() * 9000) 
console.log(otp) ;

// 2. Reverse a 3 - letter string manually.
// let letter = "sur"
// let stor =""
//  stor = letter.split("").reverse().join("")
// console.log(stor);
// ************for (let i = letter.length - 1; i >= 0; i--){
//     stor += letter[i]
//     console.log(stor);
// }


// 3. Find the last character of a string.
let str5 
str5 = "hello i'm suraj"
console.log(str5.charAt(str5.length-1));
// 4. Convert a full name into uppercase initials.
// ** use toUpperCase()
// 5. Check whether two strings are equal ignoring case sensitivity.
// *** == only not ===
// 6. Create a simple login validation system.
// use prompt colletd data and send alert with data use loged in
// 7. Find whether a number is a 2 - digit or 3 - digit number.
//  use .length
// 8. Create a mini ATM balance checker.
// pin is correct using promp then show balence with alert
// 9. Simulate a traffic light system using`switch`.
// light  with switch
// 10. Build a small marksheet generator using variables and conditionals.
// collect number an dprint all and with numbers each

// ******* complete ******* //