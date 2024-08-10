function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const resume = document.querySelector('.resume');
    navLinks.classList.toggle('active');
    resume.classList.toggle('active');
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
