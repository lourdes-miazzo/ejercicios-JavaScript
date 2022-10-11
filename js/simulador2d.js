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
    const precio = ((precioSimple2d * parseFloat(materiales)) * (parseFloat(conservacion) * parseFloat(seleccion)) * (parseFloat(exposicion) * parseFloat(medios))).toFixed(2) 
    //ARMAR OBJETO CON LA DATA IMPORTANTE
    class DataObra{
        constructor(titulo, anio, tecnica, precio){
            this.titulo = titulo,
            this.anio = anio,
            this.tecnica = tecnica,
            this.precio = precio
        }
    }
    let objObra = new DataObra (titulo, anio, tecnica, precio)
    //ENVIAR DATA IMPORTANTE A LOCAL STORAGE
    setStorage(objObra)
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

const setStorage = (objObra)=>{
localStorage.setItem("objObra", JSON.stringify(objObra))
}