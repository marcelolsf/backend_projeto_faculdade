function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

document.querySelectorAll(".modal-button").forEach(button => {
    button.addEventListener("click", function () {
        const modalId = button.getAttribute("data-modal");
        openModal(modalId);
    });
});

document.getElementById("sair").addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    closeModal(modalId);
});

window.addEventListener("click", function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            const modalId = modal.id;
            closeModal(modalId);
        }
    });
});

document.querySelectorAll(".close-button").forEach(closeButton => {
    closeButton.addEventListener("click", function () {
        const modalId = closeButton.getAttribute("data-modal");
        closeModal(modalId);
    });
});



