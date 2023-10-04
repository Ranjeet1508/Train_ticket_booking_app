const navbar = document.querySelector('.navbar');
const mobile_nav = document.querySelector('.mobile-nav');



mobile_nav.addEventListener('click', () => toggleNavbar());


const toggleNavbar = () => {
    navbar.classList.toggle('active');
}

