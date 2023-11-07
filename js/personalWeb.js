window.addEventListener('load', function() {
    window.location.href = 'personalWeb.html#home';
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