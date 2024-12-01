// Abrir el modal
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "flex";
}

// Cerrar el modal
function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
