//********  attribute and properties
// - setAttribute ,getAttribute  ,removeAttribute  ,hasAttribute
// - wiith data -* name
// input.value (property, current state ) vs inp.getAttribute('value')



// Attribute = predefined kyeWords in html

// id, class , src, type , placeholder - > static

// properties = a value of Attribute

// const h3 = document.querySelector("#id1")

// let res = h3.getAttribute("class")
// console.log(res)

// h3.setAttribute("width", "200px")
// console.log(h3.getAttribute("width"))

// h3.removeAttribute("class")
// let res1 = h3.getAttribute("class")
// console.log(res1)

// setAttribute (Attribute name , value) = sets the attributr on element
// getAttribute (Attribute name ) = get value of that attribute
// removeAttribute (Attribute name ) = remove the attribute
// hasAttribute(Attribute name ) = booleam ,is it = true , is not =false


// const userCard = document.querySelector("#user_card");

// console.log(userCard.getAttribute("data-user-id"));

// userCard.dataset.userId = "678"

// console.log(userCard.getAttribute("data-user-id"));



// input.value vs input.getAttribute('value' )

// const inp = document.querySelector("input")
// const btn = document.querySelector("button")



// btn.addEventListener("click", () => {
//     console.log(inp.value)
//     console.log(inp.getAttribute('value'))
// })



//***** creating  inserting and removing element from dom

// 1.createElement

// insertion-- -
//     appendChild = old, apend one child at a time
//     append  = new , add many childs at a time

// **Old API (still runs everywhere):**

// - `appendChild()` / `insertBefore()` / `removeChild()`

// **Modern API (know both):**

// - `append()` — multiple nodes + strings in one call
// - `prepend()` / `before()` / `after()` / `replaceWith()`


// const footer = document.createElement("footer")
// const span = document.createElement("span")

// const main = document.querySelector("main")
// footer.innerHTML = `<b>im footer </b>`
// span.innerHTML = `<i>i'm span</i>`

// main.appendChild(footer)
// main.appendChild(span)
// or
// main.append(footer, span)

// main.removeChild(span)

// main.insertBefore()

// insertBefore -----------

const div = document.querySelector(".main")

const box1 = document.createElement("div")
const box3 = document.createElement("div")
const box2 = document.createElement("div")

box2.style.backgroundColor = "yellow";
box3.style.backgroundColor = "blue";

// div.insertBefore(box2, box1) = elements se phele 

box1.classList.add("box")
box2.classList.add("box")
box3.classList.add("box")

div.append(box1, box2)
div.prepend(box3);
div.before(box2)
// div.after(box1)

box2.replaceWith(box3) 




