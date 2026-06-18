//***  type Coercion
// - implicit - "change automatticaly the value like a='10' b=20 a+b=30 "
// - explicit - "change by any method like a=Number('10') b=20 a+b=30 "

// **** Binary operators

    // - Arthemetic operators   -> +,-,*,/,%,**
    // - Assignment operators   -> =
    // - Coparision operators   -> ==, ==="strick", != ,!== 
    // - Increment & Decrement operators  -> ++, -- .+=, -=
        // a = a + 5 or a += 5
    // - Logical operators ->   && ,|| 

    
    //  **** Conditonals 
    // **ifelse 
//         if (true) {
//                 "code chalega!"
//         } else {
//               "false hua to ye chalega!"
//         }

// let m = Number(prompt("enter m"))
// let p = Number(prompt("enter p"))
// let c = Number(prompt("enter c"))

// let avg = (m + p + c) / 3
// console.log(avg)

// if (avg > 85) {
//     console.log("A++")
// } else if (avg > 75) {
//     console.log("b")
// }
//  else if (avg > 65) {
//     console.log("c")
// }
// else if (avg > 55) {
//     console.log("d")
// }
// else {
//     console.log("fail")
// }


// laxim bhandar 

// var age = Number(prompt("Emter your age"))
// var gender = prompt("Emter gender(M/F)")

// if (gender == "F" || gender=="f") {
//     if (age >= 18 && age <=60) {
//         console.log("you are eligibal")
//     } else {
//         console.log("your not eligibal")
//     }
// } else {
//     console.log("you can apply for bekar bhata")
// }


//  ****** Truthy and Falsy 
// false, 0, "", null, undefined, NaN only 6 value are falsy

// *** Turnary Operator
// condition ? "true" : "false"
//  10==10 ? "yes" : "no"

// **** Switch 


// let day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Start of the week");
//         break;
//     case "Friday":
//         console.log("Weekend coming!");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's the weekend!");
//         break;
//     default:
//         console.log("Midweek day");
// }