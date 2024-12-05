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

window.addEventListener('resize', () => {
    if (this.window.innerWidth > 767) {
        sidebar.classList.remove('show');
        sidebarUnder.classList.remove('show');
        navbarToggler.classList.remove('clicked')
    }
});

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const cards = document.querySelector(".cards");
const cardContainer = document.querySelector('.card-container');
const cardsBefore = cards.cloneNode(true);
const cardsAfter = cards.cloneNode(true);

cardContainer.insertBefore(cardsBefore, cards);
cardContainer.appendChild(cardsAfter);

const scrollWidth = cards.scrollWidth;
cardContainer.scrollLeft = scrollWidth;

cardContainer.addEventListener('scroll', () => {
    if (cardContainer.scrollLeft < scrollWidth / 2) {
        cardContainer.scrollLeft += scrollWidth;
    } else if (cardContainer.scrollLeft >= scrollWidth * 1.5) {
        cardContainer.scrollLeft -= scrollWidth;
    }
});