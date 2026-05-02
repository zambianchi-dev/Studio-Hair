document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileClose = document.getElementById('mobileClose');
    const mobileLinks = mobileNav.querySelectorAll('.mobile-link, .btn');

    hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
    mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileLinks.forEach(link => link.addEventListener('click', () => mobileNav.classList.remove('open')));
});