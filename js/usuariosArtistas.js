const contenedor = document.querySelector(".contenedor")
const URL = "../JSON/artistas.json"
let artistas = []
let escribirHTML = ""

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

cargarUsuarios()
