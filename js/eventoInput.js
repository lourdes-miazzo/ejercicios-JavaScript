//EVENTOS EN EL INPUT
const inputAll = document.querySelectorAll("input")
inputAll.forEach(input => {
    input.addEventListener("focus", ()=> input.className = "focusActivo")
    input.addEventListener("blur", ()=> input.className = "")
})




