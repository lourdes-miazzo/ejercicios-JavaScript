let valuarObraHoras = document.querySelector("#valuarObraHoras")
valuarObraHoras.addEventListener("submit", capturarDatos)
const fuenteSelectConserv = document.querySelector("#conservacion")
const fuenteSelectSalon = document.querySelector("#seleccion")
const fuenteSelectExpo = document.querySelector("#expo")
const fuenteSelectMedios = document.querySelector("#medios")

//CAPTURAR LOS VALORES DEL FORMULARIO PARA OBTENER EL PRECIO Y GUARDAR EN LOCAL STORAGE INFO PARA REUTILIZAR EN LA ETAPA DE MOSTRAR AL USUARIO
function capturarDatos(e){
    e.preventDefault()
    const datos = obtenerDatos()
    const {titulo, anio, tecnica, horaReferencia, horasTrabajadas, conservacion, seleccion, exposicion, medios} = datos
     //REALIZAR CALCULO DE PRECIO
    const obraHoras =  parseFloat(horaReferencia) * parseFloat(horasTrabajadas)
    const precioFinalHoras = ((obraHoras) * (parseFloat(conservacion) * parseFloat(seleccion)) * (parseFloat(exposicion) * parseFloat(medios)) ).toFixed(2) 
    //ENVIAR DATA IMPORTANTE A LOCAL STORAGE
    setStorage(titulo, anio, tecnica, precioFinalHoras)
    //ABRIR NUEVA PANTALLA PARA MOSTRAR LOS RESULTADOS
    window.location = "mostrarResultado.html"
    //ELIMINAR INFO DEL FORMULARIO POR SI EL USUARIO VUELVE HACIA ATRÁS
    valuarObraHoras.reset()
}

const obtenerDatos = ()=>{
    return{
    "titulo" : document.querySelector("#titulo").value,
    "anio" : document.querySelector("#anio").value,
    "tecnica" : document.querySelector("#tecnica").value,
    "horaReferencia" : document.querySelector("#horaReferencia").value,
    "horasTrabajadas" : document.querySelector("#horasTrabajadas").value,
    "conservacion" : fuenteSelectConserv.value,
    "seleccion" : fuenteSelectSalon.value,
    "exposicion" : fuenteSelectExpo.value,
    "medios" : fuenteSelectMedios.value,
    }
}

const setStorage = (titulo, anio, tecnica, precioFinalHoras)=>{
    localStorage.setItem("titulo", JSON.stringify(titulo))
    localStorage.setItem("anio", JSON.stringify(anio))
    localStorage.setItem("tecnica", JSON.stringify(tecnica))
    localStorage.setItem("precio", JSON.stringify(precioFinalHoras))
}