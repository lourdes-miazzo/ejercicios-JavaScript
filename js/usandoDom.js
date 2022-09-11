
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

function crearListaInfo(){ 
    let lista = ""
    infoUsuario.forEach(elem => {
        lista = `<li>Tipo de obra: ${elem.tipo}</li>
                <li>Titulo de la obra:  ${elem.titulo}</li>
                <li>Año de creación: ${elem.año}</li>
                <li>Técnica: ${elem.tecnica}</li>
                <li>Precio Final: ${elem.precio}</li>
                <br>`
        listaInfo.innerHTML += lista
    })
} 

function crearListaDesc(){ 
    let listaDesc = ""
    infoDescuento.forEach(elem => {
        listaDesc = `<li>Titulo de la obra: ${elem.titulo}</li>
                    <li>Precio Final: ${elem.precio}</li>
                    <li>Precio con 10% de descuento: ${elem.descuento10PorCiento}</li>
                    <li>Precio con 20% de descuento: ${elem.descuento20PorCiento}</li>
                    <br>`
        listaDescObras.innerHTML += listaDesc
    })
}

function crearListaInteres(){ 
    let listaInt = ""
    infoInteres.forEach(elem => {
        listaInt = `<li>Titulo de la obra: ${elem.titulo}</li>
                    <li>Precio Final:${elem.precio}</li>
                    <li>${elem.precio3Cuotas}</li>
                    <li>${elem.precio6Cuotas}</li>
                    <li>${elem.precio12Cuotas}</li>
                <br>`
        listaInteresObras.innerHTML += listaInt
    })
} 



crearListaInfo()
crearListaDesc()
crearListaInteres()