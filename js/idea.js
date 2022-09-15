
if(tipo.value === "2d" && accion.value === "areaVolumen"){
    const valuarArea = document.createElement("form")
    valuarArea.innerHTML =`<form action="">
    <p class="parraf">Por área</p>
    <br>
    <input type="text" placeholder="  título de la obra">
    <br>
    <input type="number"  placeholder="  año de ejecución">
    <br>
    <input type="text" placeholder="  técnica">
    <br>
    <input type="number"  placeholder="  alto">
    <br>
    <input type="number"  placeholder="  ancho">
    <br>
    <input type="number" placeholder="  precio de obra con área 100 por 100cms">
    <br>
    <br>
    <label for="conservacion"></label>
    <select id="conservacion">
        <option value="">Es posible conservar fácilmente la obra?</option>
        <option value="conservSi">Si</option>
        <option value="conservNo">No</option>
    </select>
    <br>
    <label for="Seleccion"></label>
    <select id="seleccion">
        <option value="">Selección en Concurso</option>
        <option value="internacional">Salón Internacional</option>
        <option value="nacional">Salón Nacional</option>
        <option value="provincial">Salón Provincial</option>
        <option value="ningunSalon">No fue seleccionada</option>
    </select>
    <button type="submit">Enviar</button>
    </form>`
    const divArea = document.querySelector("#crearForm")
    divArea.appendChild(valuarArea)
}