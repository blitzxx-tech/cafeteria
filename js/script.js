// Menú móvil
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('active');
}));

// Envío del formulario (simulado)
const form = document.getElementById('form-contacto');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    respuesta.textContent = '¡Mensaje enviado con éxito!';
    respuesta.style.color = '#28a745';
    form.reset();
});