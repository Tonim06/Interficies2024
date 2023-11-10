window.addEventListener('load', function() {
    // Verificar si ya estamos en la página de destino
    if (window.location.hash !== '#home') {
        // Si no estamos en la página de destino, redirigir
        window.location.href = 'personalweb.html#home';
    }
});

//window.addEventListener('load', function() {
//    window.location.href = 'personalWeb.html#home';
//});


const navLinks = document.querySelectorAll(".nav li a");
navLinks.forEach(link => {
    navLinks[0].classList.add("active");
    link.addEventListener('click', () =>{
        navLinks.forEach(link2 => {
            link2.classList.remove("active");
        });
       link.classList.toggle("active"); 
    })
    
});