const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');
const sidebarUnder = document.querySelector('.sidebar-under');
const navbarToggler = document.querySelector('.navbar .container button');

function sidebarToggle() {
    sidebar.classList.toggle('show');
    sidebarUnder.classList.toggle('show');
}

function navbarTogglerToggle() {
    navbarToggler.classList.toggle('clicked');
}

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const cards = document.querySelector(".cards");
const cardsCopy = cards.cloneNode(true);
document.querySelector(".card-container").appendChild(cardsCopy);