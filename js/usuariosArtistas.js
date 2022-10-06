const contenedor = document.querySelector(".contenedor")
const URL = "../JSON/artistas.json"
let artistas = []
let escribirHTML = ""

//CARGAR USUARIOS DESDE JSON USANDO FETCH
const cargarUsuarios = async ()=>{
    try {
        const response = await fetch(URL)
        const datos = await response.json()
        const usuariosArtistas = datos
        usuariosArtistas.forEach(artista => {
            escribirHTML += cargarArtistas(artista)
        });
    } catch (error) {
        escribirHTML = cargarError()
    }finally{
        contenedor.innerHTML = escribirHTML
    }  
}

//USO DE SETTIMEOUT PARA SIMULAR CONEXION CON BACKEND Y PARA VER LA ANIMACION DE CARGA :)
setTimeout(() => {
    cargarUsuarios()
}, 2500);

setTimeout()