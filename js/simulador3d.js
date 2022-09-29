const volumenReferencia = 1000000
let valuar3d = document.getElementById("valuarObra3d")
valuar3d.addEventListener("submit", capturarDatos)
const fuenteSelectConserv = document.querySelector("#conservacion")
const fuenteSelectSalon = document.querySelector("#seleccion")
const fuenteSelectExpo = document.querySelector("#expo")
const fuenteSelectMedios = document.querySelector("#medios")

//CAPTURAR LOS VALORES DEL FORMULARIO PARA OBTENER EL PRECIO Y GUARDAR EN LOCAL STORAGE INFO PARA REUTILIZAR EN LA ETAPA DE MOSTRAR AL USUARIO
function capturarDatos(e){
    e.preventDefault()
    const datos = obtenerDatos()
    const {titulo, anio, tecnica, alto, ancho, profundidad, precioVolumen, conservacion, seleccion, exposicion, medios} = datos
     //REALIZAR CALCULO DE PRECIO
    let volObra = parseFloat(alto) * parseFloat(ancho) * parseFloat(profundidad)
    let precioSimple3d = (volObra * parseFloat(precioVolumen)) / volumenReferencia
    let precioFinal3d = ((precioSimple3d * parseFloat(conservacion)) * parseFloat(seleccion) * (parseFloat(exposicion) * parseFloat(medios))).toFixed(2)

    //ENVIAR DATA IMPORTANTE A LOCAL STORAGE
    setStorage(titulo, anio, tecnica, precioFinal3d)

    //ABRIR NUEVA PANTALLA PARA MOSTRAR LOS RESULTADOS
    window.location ="mostrarResultado.html"

    //ELIMINAR INFO DEL FORMULARIO POR SI EL USUARIO VUELVE HACIA ATRÁS
    valuarObra3d.reset()
}

const obtenerDatos = ()=>{
    return{
        "titulo" : document.querySelector("#titulo").value,
        "anio" : document.querySelector("#anio").value,
        "tecnica" : document.querySelector("#tecnica").value,
        "alto" : document.querySelector("#alto").value,
        "ancho" : document.querySelector("#ancho").value,
        "profundidad" : document.querySelector("#profundidad").value,
        "precioVolumen" : document.querySelector("#precioVolumen").value,
        "conservacion" : fuenteSelectConserv.value,
        "seleccion" : fuenteSelectSalon.value,
        "exposicion" : fuenteSelectExpo.value,
        "medios" : fuenteSelectMedios.value,
    }
}

const setStorage = (titulo, anio, tecnica, precioFinal3d) =>{
    localStorage.setItem("titulo", JSON.stringify(titulo))
    localStorage.setItem("anio", JSON.stringify(anio))
    localStorage.setItem("tecnica", JSON.stringify(tecnica))
    localStorage.setItem("precio", JSON.stringify(precioFinal3d)) 
}