const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

// ------------------------------
// Hamburger menu toggle
// ------------------------------
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const headerTitle = document.querySelector('header h1');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // mostrar/ocultar menú
    headerTitle.classList.toggle('hidden'); // ocultar/mostrar título

    // Cambiar icono del botón
    hamburger.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});