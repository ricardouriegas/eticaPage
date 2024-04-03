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
    mostrarImagen("../images/codigoEticaProfesional.png");
})

botonOrganizacional.addEventListener("click", function(){
    mostrarImagen("../images/codigoEticaOrganizacional.png");
})

botonMedioAmbiente.addEventListener("click", function(){
    mostrarImagen("../images/codigoAmbiental.png");
})

