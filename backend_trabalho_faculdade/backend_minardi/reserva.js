document.addEventListener("DOMContentLoaded", function () {
    const motoristasList = document.getElementById("motoristasList");
    const passageirosList = document.getElementById("passageirosList");

    function reservarVaga(event) {
        const motorista = event.target.closest("li");
        const motoristaInfo = motorista.querySelector(".motorista-info").textContent;
        const li = document.createElement("li");
        li.textContent = motoristaInfo;
        passageirosList.appendChild(li);
        motoristasList.removeChild(motorista);
    }

    function cancelarReserva(event) {
        const reserva = event.target.closest("li");
        const idReserva = reserva.getAttribute("data-id");
        passageirosList.removeChild(reserva);
    }

    const reservarBtns = document.querySelectorAll(".reservarBtn");
    const cancelarBtns = document.querySelectorAll(".cancelarBtn");

    reservarBtns.forEach(function (btn) {
        btn.addEventListener("click", reservarVaga);
    });

    cancelarBtns.forEach(function (btn) {
        btn.addEventListener("click", cancelarReserva);
    });
});
