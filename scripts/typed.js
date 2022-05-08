// primer parámetro: la clase que le puse
// segundo parámetro: un objeto para configurarlo
const typed = new Typed(".typed", {
    stringsElement: "#cadenas-texto", 
    smartBackspace: true, 
    typeSpeed: 75, 
    startDelay: 350,
    backSpeed: 75, 
    shuffle: false,
    backDelay: 2500, 
    loop: true, 
    loopCount: false, 
    showCursor: true, 
    cursorChar: "|", 
    contentType: "html" 
});
