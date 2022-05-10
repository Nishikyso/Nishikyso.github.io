import { 
    cambiarModo, 
    mostrarSpinner, 
    limpiarHTML, 
    pantallaCargaDegrade,
    validarForm
} from "./funciones.js";

import { 
    btnSwitch
} from "./selectores.js";

eventListeners();
function eventListeners(){
    document.addEventListener("DOMContentLoaded", iniciarApp);

    btnSwitch.addEventListener("click", () => {
        limpiarHTML();
        mostrarSpinner();
        setTimeout(() => {
            cambiarModo();
        },600);
        pantallaCargaDegrade();
    });


}

function iniciarApp(){
    // Obtener modo actual
    if(localStorage.getItem("dark-mode") === "true"){
        cambiarModo();
    }
    
    validarForm();
}
