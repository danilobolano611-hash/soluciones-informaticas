const botonMenu = document.getElementById("btnAccesibilidad");
const menu = document.getElementById("menuAccesibilidad");
const aumentar = document.getElementById("aumentar");
const restablecer = document.getElementById("restablecer");

let tamaño = localStorage.getItem("tamañoTexto") || "16px";

document.documentElement.style.fontSize = tamaño;

botonMenu.addEventListener("click", function() {
    menu.classList.toggle("activo");
});

aumentar.addEventListener("click", function() {
    tamaño = "20px";

    document.documentElement.style.fontSize = tamaño;

    localStorage.setItem("tamañoTexto", tamaño);
});

restablecer.addEventListener("click", function() {
    tamaño = "16px";

    document.documentElement.style.fontSize = tamaño;

    localStorage.setItem("tamañoTexto", tamaño);
});
