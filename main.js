document.addEventListener('DOMContentLoaded', () => {
    let mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    let mobileMenu = document.querySelector('.mobile-menu');
    let projectsBtn = document.querySelector('#projects-btn');
    let projects = document.querySelector('#projects');
    let width;

    function handleResize() {
        width = window.innerWidth;
        console.log(width);

        if (width <= 996) {
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', () => {
                    if (mobileMenu) {
                        mobileMenu.classList.toggle('hidden');
                        mobileMenu.classList.toggle('show');
                    }
                });
            }
        } else {
            if (mobileMenu) {
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('hidden');
            }
        }
    }

    // Initial setup on DOMContentLoaded
    handleResize();

    // Update on window resize
    window.addEventListener('resize', () => {
        handleResize();
    });

    projectsBtn.addEventListener('click', () => {
        projects.classList.remove('projects-hidden');
    });
    
});
