const body = document.body;

console.log(body.childNodes)
console.log(body.children)

// nodeist (chilNodes)- point - tree - node
// html collection - only elements

// nodelist -> ye sabhi cheezo ko node me count karta hai sabhi cheeze jesse - block space, white space,line brekes  (text node)

const h1 = document.querySelector("h1")
console.log(h1)

h1.textContent = "hey man"
h1.innerText = "hey good man"

// textContent -> only change or update text
//innerText
//innerHTML

h1.innerHTML = `<i>hello</i>`

console.log(body.innerHTML)
console.log(body.innerText)

h1.style.backgroundColor = "RED"
h1.style.fontSize = "50px"
h1.style.padding = " 15px 20px"
h1.style.borderRadius = "20px"
h1.style.color = "green"

//classes
// 1> classList.add()  -> add kardo class to the element
// 2> classlist.remove() -> delete karna
// 3> classlist.comtain() -> true and false
// 4> classlist.toggel() -> change karnan
// 5> classlist.replace() -> replace with new class

// is my h1 have some class

const h2 = document.querySelector("h2")


// is my h2 have some class
const isClass = h2.classList.contains('heading')

console.log(isClass)


// i have to change or replace my class

h2.classList.replace("heading", "newhead") 

// toggel

h1.classList.toggle("heading")


// add
const div = document.querySelector("#div")

div.classList.add("hello")
