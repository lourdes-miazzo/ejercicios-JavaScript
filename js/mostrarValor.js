//CONSTANTES NECESARIAS PARA OBTENER RESULTADOS Y COMPILAR LA INFORMACION
const objObra = {}
const infoObra = [] 
const desc = 0.9
const desc20 = 0.8
const cuotas3 = 1.0406
const cuotas6 = 1.0781
const cuotas12 = 1.1473
// ACCESO AL DOM PARA IMPRIMIR RESULTADOS EN PANTALLA
const listaInfo = document.querySelector("#informDeObras")    
const listaDescObras = document.querySelector("#informDesc")
const listaInteresObras = document.querySelector("#informInteres") 

//OBTENER LOS DATOS EN CADENA DE LOS FORMULARIOS Y TRANSFORMARLOS PARA PROCESARLOS
obtenerDato()
function  obtenerDato(){
    titulo = JSON.parse(localStorage.getItem("titulo"))
    anio = JSON.parse(localStorage.getItem("anio"))
    tecnica = JSON.parse(localStorage.getItem("tecnica"))
    precio = JSON.parse(localStorage.getItem("precio"))
    objObra.titulo = titulo
    objObra.anio = anio
    objObra.tecnica = tecnica
    objObra.precio = precio
    infoObra.push(objObra)
    compilarFunc()
}

//FUNCION QUE LLAMA A OTRAS FUNCIONES ÁRA MAPEAR Y OBTENER RESULTADOS DE INFO BÁSICA, DESCUENTOS E INTERESES
function compilarFunc(){
    procesarInfoUsuario()
    descuento()
    interes()
    mostrarResultado()
}

function procesarInfoUsuario(){
    infoUsuario = infoObra.map((info) =>{
                                        return{
                                            titulo: info.titulo,
                                            año: info.anio,
                                            tecnica: info.tecnica,
                                            precio: info.precio
                                        }
    })
}


function descuento(){
    infoDescuento = infoUsuario.map((descuento) =>{
                                return{
                                    precio: descuento.precio,
                                    descuento10PorCiento: (descuento.precio * desc).toFixed(2),
                                    descuento20PorCiento: (descuento.precio * desc20).toFixed(2)
                                }
    })
}

function interes(){
    infoInteres = infoUsuario.map ((interes)=>{
                                return{
                                    precio: interes.precio,
                                    precio3Cuotas: (interes.precio * cuotas3).toFixed(2),
                                    precio6cuotas: (interes.precio * cuotas6).toFixed(2),
                                    precio12Cuotas: (interes.precio * cuotas12).toFixed(2)
                                }
    })
} 

//FUNCION QUE COMPILA A LAS FUNCIONES QUE MUESTRAN EL RESULTADO AL USUARIO
function mostrarResultado(){
    crearListaInfo()
    crearListaDesc()
    crearListaInteres()
}

function crearListaInfo(){ 
    let lista = ""
    infoUsuario.forEach(elem => {
        lista = `<h2 class="infoObra tituloInfo">Información de la obra</h2>
                    <ul>  
                        <li class="cuerpoInfo">Titulo de la obra:  ${elem.titulo}</li>
                        <li class="cuerpoInfo">Año de creación: ${elem.año}</li>
                        <li class="cuerpoInfo">Técnica: ${elem.tecnica}</li>
                        <li class="cuerpoInfo">Precio Final: ${elem.precio}</li>
                    </ul>
                <br>`
    listaInfo.innerHTML += lista
    })
} 

function crearListaDesc(){ 
    let listaDesc = ""
    infoDescuento.forEach(elem => {
        listaDesc = `<h2 class="tituloInfo">Información descuentos</h2>
                        <ul>
                            <li class="cuerpoInfo">Precio Final: ${elem.precio}</li>
                            <li class="cuerpoInfo">Precio con 10% de descuento: ${elem.descuento10PorCiento}</li>
                            <li class="cuerpoInfo">Precio con 20% de descuento: ${elem.descuento20PorCiento}</li>
                        </ul>
                    <br>`
    listaDescObras.innerHTML += listaDesc
    })

}

function crearListaInteres(){ 
    let listaInt = ""
    infoInteres.forEach(elem => {
        listaInt = `<h2 class="tituloInfo">Información intereses</h2>
                        <ul>
                            <li class="cuerpoInfo">Precio Final: ${elem.precio}</li>
                            <li class="cuerpoInfo">Precio total venta en 3 cuotas: ${elem.precio3Cuotas}</li>
                            <li class="cuerpoInfo">Precio total venta en 6 cuotas: ${elem.precio6cuotas}</li>
                            <li class="cuerpoInfo">Precio total venta en 12 cuotas: ${elem.precio12Cuotas}</li>
                        </ul>
                <br>`
        listaInteresObras.innerHTML += listaInt
    })
    reset()
} 

//RESETEO DE CADA FORMULARIO
function reset(){
    if(document.querySelector("#valuarObra2d")){
        document.querySelector("#valuarObra2d").reset()
    }else if(document.querySelector("#valuarObra3d")){
        document.querySelector("#valuarObra3d").reset()
    }else if(document.querySelector("#valuarObraHoras")){
        document.querySelector("#valuarObraHoras").reset()
    }
}