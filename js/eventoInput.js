//EVENTOS AL ESCRIBIR SOBRE LOS INPUTS DEL FORMULARIO
const inputAll = document.querySelectorAll("input")
inputAll.forEach(input => {
    input.addEventListener("focus", ()=> input.className = "focusActivo")
    input.addEventListener("blur", ()=> input.className = "")
})




