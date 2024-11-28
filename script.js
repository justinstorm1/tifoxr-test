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