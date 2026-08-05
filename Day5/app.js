// **** ARRAY ********//

var arr1 = [10, 20, 30, 50]

var arr2 = ["raja", "ritik", "suraj", "vinod"]
console.log(arr2);
arr2[0] = "shaw"
console.log(arr2);

var arr3 = ["suraj", 25, "kokata", true] // mixed anyting
console.log(arr3.length);
console.log(arr3);
console.log(arr3.length-1); // last index
console.log(arr3[arr3.length - 1]); // last index vlaue


// puse() -  end me elemenet add karta hai
// pop -     end me elemenet remove karta hai
// unshift()-starting me elemenet add karta hai
// shift -   starting  me elemenet remove karta hai

// puse and pop  are faster then unshift and shift

// arr1.splice(startindex,deletecount,newadd)
// splice(start, deleteCount, item1, item2...)
arr1.splice(1,0,22,55)
console.log(arr1);
arr2.reverse()

let arr4 = [6, 85, 78, 101, 1]
let aer = arr4.sort((a,b) => a-b)
// let aer1 = arr4.sort((a,b) => b-a)    // revers 
console.log(aer);
console.log(arr4) 

// let arr5 = [11, 64, [[2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15]],
//     [[21, 22, 23], [, 24, 26, "hello"], [], []],
//     "all"
// ]

// console.log(arr5[2])

// *** loops or ittration

var arr6 = [10, 20, 30, 40, "hello", 50, 60]

// ***for loop
// for (let i = 0; i < arr6.length; i++){
//     console.log(arr6[i])
// }

// ** for of
// for(a of arr6){
//     console.log(a)
// }

let arr7 = []
// for (let i = 0; i < 15; i++){
//     arr7.push(i+1)
// }
// console.log(arr7)


for (let i = 0; i < 10; i++){
    arr7.push("*" * 2)
}
console.log(arr7)