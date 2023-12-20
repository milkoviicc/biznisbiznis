let mobileMenuBtn = document.querySelector('.mobile-menu-btn');
let mobileMenu = document.querySelector('.mobile-menu');


document.addEventListener('DOMContentLoaded', () => {
    let mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    let mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
    });
});
