// Simulación de falta de stock (hipotético)
const tieneStock = false;

// Función para verificar y mostrar el mensaje de no disponible si no hay stock
function verificarDisponibilidad() {
    const tarjetaProducto = document.querySelector('.product-card');
    const mensajeNoDisponible = tarjetaProducto.querySelector('.not-available');

    if (!tieneStock) {
        mensajeNoDisponible.style.display = 'block'; // Mostrar mensaje de no disponible
    } else {
        mensajeNoDisponible.style.display = 'none'; // Ocultar mensaje si hay stock
    }
}

// Llamada inicial para verificar la disponibilidad al cargar la página
verificarDisponibilidad();
