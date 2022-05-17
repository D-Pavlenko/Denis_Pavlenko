const navBtn = document.querySelector('.nav_button');
const mobileNav = document.querySelector('.mobile_nav');
const body = document.body;
const navLink = document.querySelectorAll('.mobile_nav__link')

navBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMobileNav()
})

window.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav()
    }
})

mobileNav.addEventListener('click', (event) => {
    event.stopPropagation();
})

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    mobileNav.classList.remove('mobile_nav__active');
    navBtn.classList.remove('nav_button__close');
    body.classList.remove('no-scroll');

}

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile_nav__active');
    navBtn.classList.toggle('nav_button__close');
    body.classList.toggle('no-scroll');
}

//Swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.slider-btn-next',
        prevEl: '.slider-btn-prev',
    },

    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    }
});


AOS.init({
    disable: 'phone',
    disable: 'tablet',
    disable: 'mobile',
});






