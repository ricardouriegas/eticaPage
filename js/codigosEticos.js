let botonProfesional = document.getElementById("button-profesional");
let botonOrganizacional = document.getElementById("button-organizacional");
let botonMedioAmbiente = document.getElementById("button-medioAmbiente");

function mostrarImagen(ruta) {
    var imagen = document.getElementById("imagenCodigos");
    imagen.src = ruta;
    imagen.removeAttribute("hidden");
    imagen.classList.add("mostrar");
}

botonProfesional.addEventListener("click", function(){
    mostrarImagen("");
})

botonOrganizacional.addEventListener("click", function(){
    mostrarImagen("");
})

botonMedioAmbiente.addEventListener("click", function(){
    mostrarImagen("");
})

