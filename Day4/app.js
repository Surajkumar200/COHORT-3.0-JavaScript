//  **** Functions

//  *** types of function

// function declaration
abc() //****  hoisting possible
function abc() {
    console.log("hello");
}


// function greet(parameters) {  call parameter here
//     console.log(parameters)
// }
// greet(arguments) call arguments here


// first class function or function expression
let greet = function () {
    console.log("hello")
}
greet()  //****   hoisting not  possible

// fat Arrow function or Arrow functiom 
let c1 = () => {
    console.log("hello");
}

// one liner function or single line 
let c2 = () => console.log("hello");

let c3 = (a, b) => console.log(a + b);
let c5 = () => { return "hello" } // drawback
let c6 = () => "hello"  // drawback but u can do without it {}


let c4 = a => console.log(a)

    //**  IIFE - Immidiately Invoked Function Expression
 // ***also annynomous function - without name  
(function () {
    console.log("hello i'm call Immidiately");
})()

(() => console.log("hello"))

//  retrun 
function hi() {
    return "hello"
}

// ***  pure v/s impure 

function sqrt(a) {
    return a*a
}

console.log(sqrt(5))
console.log(sqrt(11))

// impure - change somthing outside of function and output change in evry call

let x = 10 
function abc() {
    x++
    return x
}

console.log(abc()); //11
console.log(abc()); //12

function multiple(a=5,b=6) {
    return a * b
}

multiple(undefined,5)


function dada() {
    console.log("i'm dada");

    function papa() {
        console.log("i'm papa");

        function beta() {
            console.log("i'm child");
        }
        return beta
    }
    return papa
}

dada()()()
