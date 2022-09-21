const guardarInfo = {}
const tomarDecision = document.querySelector("#tomarDecision")
tomarDecision.addEventListener("submit", elegirForm)



function elegirForm(e){
    e.preventDefault()
    const tipoObra = document.querySelector("#tipoObra")
    const tipo = tipoObra.value
    const formaValuar = document.querySelector("#formaValuar")
    const opcion = formaValuar.value
    guardarInfo.tipo = tipo
    guardarInfo.opcion = opcion
    redirigirAOpcion()
}

function redirigirAOpcion(){
    if (guardarInfo.tipo === "2d" && guardarInfo.opcion === "areaVolumen"){
        window.location.href = "http://127.0.0.1:5500/repoEjercicios/html/valuar2d.html"
    }else if(guardarInfo.tipo === "3d" && guardarInfo.opcion === "areaVolumen"){
        window.location.href = "http://127.0.0.1:5500/repoEjercicios/html/valuar3d.html"
    }else if((guardarInfo.tipo === "2d" || guardarInfo.tipo === "3d") && guardarInfo.opcion === "horasTrab" ){
        window.location.href = "http://127.0.0.1:5500/repoEjercicios/html/valuarHoras.html"
    }
    primerReset()
}

function primerReset(){
    document.querySelector("#tomarDecision").reset()
}
