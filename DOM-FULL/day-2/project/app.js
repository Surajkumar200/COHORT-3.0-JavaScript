
const div = document.querySelector(".bulb")
const btn = document.querySelector("button")
btn.innerText
console.log(btn.innerText)

btn.addEventListener("click", () => {
    // div.classList.toggle("yello")
    // if (btn.textContent === "On")
    if (div.classList.toggle("yello"))
    {
        btn.textContent = "Off"
    }
    else {
        btn.textContent = "On"
    }
})