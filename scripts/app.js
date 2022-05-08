import { cambiarModo, mostrarSpinner, limpiarHTML, pantallaCargaDegrade } from "./funciones.js";
import { btnSwitch } from "./selectores.js";

window.addEventListener("load", () => {
    
    btnSwitch.addEventListener("click", () => {
        limpiarHTML();
        mostrarSpinner();
        setTimeout(() => {
            cambiarModo();
        },600);
        pantallaCargaDegrade();
    });
    
    // Obtener modo actual
    if(localStorage.getItem("dark-mode") === "true"){
        cambiarModo();
    }

});
