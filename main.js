const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById('nav-menu');
const closeNav = document.getElementById('close-nav');





hamburger.addEventListener('click', () =>{

    navMenu.classList.remove('hidden');

})


// close nav manu
closeNav.addEventListener('click', () =>{

    navMenu.classList.add("hidden")
    
})