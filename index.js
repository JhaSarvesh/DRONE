const navSearch = document.getElementById('nav-search')
const searchIcon = document.getElementById('search-icon')
searchIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    navSearch.classList.toggle('active')

});
document.addEventListener('click', (e) => {
    if (!navSearch.contains(e.target)) {
        navSearch.classList.remove('active')
    }
})
window.addEventListener('scroll', () => {

    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled')
    }
    else {
        navbar.classList.remove('scrolled')
    }
});
document.querySelector('#to-top').addEventListener('click', () => {
    let TopInterval = setInterval(() => {
        let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;
        if (ArrowTop.scrollTop > 0) {
            ArrowTop.scrollTop = ArrowTop.scrollTop - 50;
        }
        if (ArrowTop.scrollTop < 1) {
            clearInterval(TopInterval);
        }
    }, 10)
}, false);
function showscroll() {
    let TopButton = document.getElementById('to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        TopButton.classList.add('show')
    }
    else {
        TopButton.classList.remove('show')
    }
}
window.onscroll = () => {
    showscroll();
}
let burger = document.querySelector('.burger')
let NavbarItems = document.querySelector('.navbar-items')
let nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    NavbarItems.classList.toggle('v-class')
    nav.classList.toggle('h-class')
});
ScrollReveal().reveal('.icons i', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
    interval: 200,
    reset: true
});
ScrollReveal().reveal('.A_img img ', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px',
    interval: 200,
    reset: true
});
ScrollReveal().reveal('.About_box', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    interval: 200,
    reset: true
});
ScrollReveal().reveal('.b_box', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px', interval: 200,
    reset: true
});
ScrollReveal().reveal('.box', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    interval: 500,
    reset: true

});
ScrollReveal().reveal('.col', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px', interval: 200,
    reset: true
});