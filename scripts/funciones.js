import {
    body,
    nav,
    link,
    card,
    logoSQL,
    iconoLuna,
    iconoSol,
    espacioSpinner,
    esconder,
    html
} from "./selectores.js";

export function cambiarModo(){
    body.classList.toggle("dark-mode");
    body.classList.toggle("scrollbar-oscuro");
    body.classList.toggle("text-light");
    nav.classList.toggle("navbar-light");
    nav.classList.toggle("bg-light"); 
    nav.classList.toggle("dark-mode");
    nav.classList.toggle("navbar-dark");
    link.classList.toggle("text-light");
    
    card.forEach( c => c.classList.toggle("dark-mode") );

    iconoSol.classList.toggle("d-none");
    iconoLuna.classList.toggle("d-none");

    // Guardar el modo en Local Storage
    if(body.classList.contains("dark-mode")){
        localStorage.setItem("dark-mode", "true");
    }else{
        localStorage.setItem("dark-mode", "false");
    }

    cambiarLogoSQL();
};

export function mostrarSpinner(){
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinner.innerHTML = `
        <div class="spinner"></div>
    `;

    espacioSpinner.appendChild(spinner);
    body.classList.add("sacar-scroll"); // Cuando el spinner se muestra: SACO el scroll 
    esconder.classList.add("d-none"); // Cuando el spinner se muestra: agrego d-none para que TODO el contenido se esconda
    setTimeout(() => {
        body.classList.remove("sacar-scroll"); // Despues de 600ms, el spinner se va y vuelve el scroll
        esconder.classList.remove("d-none"); // Despues de 600ms, el spinner se va y borro la clase d-none para que TODO vuelva a aparecer
        
        limpiarHTML();
    }, 600);
}

export function limpiarHTML(){
    while(espacioSpinner.firstChild){
        espacioSpinner.removeChild(espacioSpinner.firstChild);
    }
}

export function cambiarLogoSQL(){
    if(!(body.classList.contains("dark-mode"))){
        logoSQL.setAttribute("src", "/img/sql.png");
    }

    if(body.classList.contains("dark-mode")){
        logoSQL.setAttribute("src", "/img/sql2.png");
    }
}

export function pantallaCargaDegrade(){
    if(body.classList.contains("dark-mode")){
        espacioSpinner.classList.remove("carga-clara");
        espacioSpinner.classList.add("carga-oscura");
        html.classList.remove("carga-clara");
        html.classList.add("carga-oscura");

        setTimeout(() => {
            html.classList.remove("carga-oscura");
        }, 610);
    }

    if(!(body.classList.contains("dark-mode"))){
        espacioSpinner.classList.remove("carga-oscura");
        espacioSpinner.classList.add("carga-clara");
        html.classList.remove("carga-oscura");
        html.classList.add("carga-clara");

        setTimeout(() => {
            html.classList.remove("carga-clara");
        }, 610);
    }
}
