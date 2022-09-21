//INTERACTUAR CON HTML
const elemH1 = document.createElement("h1")
elemH1.innerHTML = "<h1>Guía para valuar tus trabajos artísticos</h1>"
elemH1.className = "titulo"
const div1 = document.querySelector(".contenedorTit")
div1.appendChild(elemH1)
const pPrincipal = document.createElement("p")
pPrincipal.innerHTML = "<p>El mundo del arte puede ser un campo muy difícil de entender, con esta pequeña guía pretendemos brindarte algunos conceptos que te ayudarán a valorar tus obras de manera adecuada.</p>"
pPrincipal.className = "parrafGral"
elemH1.appendChild(pPrincipal)
const listaInfo = document.querySelector(".informDeObras")
const listaDescObras = document.querySelector(".informDesc")
const listaInteresObras = document.querySelector(".informInteres") 


//EVENTOS

const inputAll = document.querySelectorAll("input")
inputAll.forEach(input => {
    input.addEventListener("focus", ()=> input.className = "focusActivo")
    input.addEventListener("blur", ()=> input.className = "")
})


const formulario = document.querySelector("form")
formulario.addEventListener("submit", objObra())







