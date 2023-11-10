window.addEventListener('load', function() {
    // Verificar si ya se ha ejecutado
    if (!localStorage.getItem('hasRunBefore')) {
        // Si no se ha ejecutado, redirigir y marcar como ejecutado
        window.location.href = 'personalWeb.html#home';
        localStorage.setItem('hasRunBefore', true);
    }
});


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