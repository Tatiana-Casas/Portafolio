const logosTecnologia = document.querySelectorAll('.logo-tecnologia');

document.addEventListener('DOMContentLoaded', () => {
    logosTecnologia.forEach((logo, index) => {
        setTimeout(() => {
            logo.classList.add('logo-cargado');
        }, 400 * (index + 1)); // Retraso escalonado para que aparezcan uno a uno
    });
});