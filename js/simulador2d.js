const areaReferencia = 10000
const valuarObra2d = document.querySelector("#valuarObra2d")
valuarObra2d.addEventListener("submit", capturarDatos)
const fuenteSelectMaterial = document.querySelector("#materiales")
const fuenteSelectConserv = document.querySelector("#conservacion")
const fuenteSelectSalon = document.querySelector("#seleccion")
const fuenteSelectExpo = document.querySelector("#expo")
const fuenteSelectMedios = document.querySelector("#medios") 


//CAPTURAR LOS VALORES DEL FORMULARIO PARA OBTENER EL PRECIO Y GUARDAR EN LOCAL STORAGE INFO PARA REUTILIZAR EN LA ETAPA DE MOSTRAR AL USUARIO
function capturarDatos(e){
    e.preventDefault()
    const datos = obtenerDatos()
    const {titulo, anio, tecnica, alto, ancho, precioArea, materiales, conservacion, seleccion, exposicion, medios} = datos
    
     //REALIZAR CALCULO DE PRECIO
    const areaObra =  parseFloat(alto) * parseFloat(ancho)
    let precioSimple2d = (parseFloat(precioArea) * parseFloat(areaObra))/ areaReferencia
    const precioFinal2d = ((precioSimple2d * parseFloat(materiales)) * (parseFloat(conservacion) * parseFloat(seleccion)) * (parseFloat(exposicion) * parseFloat(medios))).toFixed(2) 

    //ENVIAR DATA IMPORTANTE A LOCAL STORAGE
    setStorage(titulo, anio, tecnica, precioFinal2d)
    
    //ABRIR NUEVA PANTALLA PARA MOSTRAR LOS RESULTADOS
    window.location="mostrarResultado.html"

    //ELIMINAR INFO DEL FORMULARIO POR SI EL USUARIO VUELVE HACIA ATRÁS
    valuarObra2d.reset()
}

const obtenerDatos = () =>{
    return{
        "titulo" : document.querySelector("#titulo").value,
        "anio" : document.querySelector("#anio").value,
        "tecnica" : document.querySelector("#tecnica").value,
        "alto" : document.querySelector("#alto").value,
        "ancho" : document.querySelector("#ancho").value,
        "precioArea" : document.querySelector("#precioArea").value, 
        "materiales" : fuenteSelectMaterial.value,
        "conservacion" : fuenteSelectConserv.value,
        "seleccion" : fuenteSelectSalon.value,
        "exposicion" : fuenteSelectExpo.value,
        "medios" : fuenteSelectMedios.value,
    }
}

const setStorage = (titulo, anio, tecnica, precioFinal2d)=>{
localStorage.setItem("titulo", JSON.stringify(titulo))
localStorage.setItem("anio", JSON.stringify(anio))
localStorage.setItem("tecnica", JSON.stringify(tecnica))
localStorage.setItem("precio", JSON.stringify(precioFinal2d))
}