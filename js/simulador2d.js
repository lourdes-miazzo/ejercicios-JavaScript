const areaReferencia = 10000
const valuarObra2d = document.querySelector("#valuarObra2d")
valuarObra2d.addEventListener("submit", capturarDatos)


function capturarDatos(e){
    e.preventDefault()
    const titulo = document.querySelector("#titulo").value
    const anio = document.querySelector("#anio").value
    const tecnica = document.querySelector("#tecnica").value
    const alto = document.querySelector("#alto").value
    const ancho = document.querySelector("#ancho").value
    const precioArea = document.querySelector("#precioArea").value
    const fuenteSelectMaterial = document.querySelector("#materiales")
    const materiales = fuenteSelectMaterial.value
    const fuenteSelectConserv = document.querySelector("#conservacion")
    const conservacion = fuenteSelectConserv.value
    const fuenteSelectSalon = document.querySelector("#seleccion")
    const seleccion = fuenteSelectSalon.value
    const fuenteSelectExpo = document.querySelector("#expo")
    const exposicion = fuenteSelectExpo.value
    const fuenteSelectMedios = document.querySelector("#medios")
    const medios = fuenteSelectMedios.value

    const areaObra =  parseFloat(alto) * parseFloat(ancho)
    let precioSimple2d = (parseFloat(precioArea) * parseFloat(areaObra))/ areaReferencia
    const precioFinal2d = ((precioSimple2d * parseFloat(materiales)) * (parseFloat(conservacion) * parseFloat(seleccion)) * (parseFloat(exposicion) * parseFloat(medios))).toFixed(2) 

    localStorage.setItem("titulo", JSON.stringify(titulo))
    localStorage.setItem("anio", JSON.stringify(anio))
    localStorage.setItem("tecnica", JSON.stringify(tecnica))
    localStorage.setItem("precio", JSON.stringify(precioFinal2d))
    window.location.href="http://127.0.0.1:5500/repoEjercicios/html/mostrarResultado.html"
    }

