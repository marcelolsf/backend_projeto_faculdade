document.addEventListener("DOMContentLoaded", function () {
    const avaliacaoForm = document.getElementById("avaliacaoForm");
    const avaliacoesList = document.getElementById("avaliacoesList");
    const mediaAvaliacoes = document.getElementById("mediaAvaliacoes");

    let avaliacoes = [];

    function calcularMediaAvaliacoes() {
        if (avaliacoes.length === 0) {
            return 0;
        }

        const totalAvaliacoes = avaliacoes.reduce((total, avaliacao) => total + avaliacao.avaliacao, 0);
        return (totalAvaliacoes / avaliacoes.length).toFixed(2);
    }

    function exibirAvaliacoes() {
        avaliacoesList.innerHTML = "";
        mediaAvaliacoes.textContent = `Média de Avaliações: ${calcularMediaAvaliacoes()}`;

        avaliacoes.forEach((avaliacao, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${avaliacao.usuario}</strong> avaliou como ${avaliacao.avaliacao}/5:<br>${avaliacao.comentario}`;
            
            const botaoExcluir = document.createElement("button");
            botaoExcluir.className = "excluir";
            botaoExcluir.textContent = "Excluir";
            botaoExcluir.addEventListener("click", () => excluirAvaliacao(index));

            li.appendChild(botaoExcluir);
            
            avaliacoesList.appendChild(li);
        });
    }

    function excluirAvaliacao(index) {
        avaliacoes.splice(index, 1);
        exibirAvaliacoes();
    }

    function validarFormulario() {
        const usuario = document.getElementById("usuario").value.trim();
        const avaliacao = parseInt(document.getElementById("avaliacao").value);
        const comentario = document.getElementById("comentario").value.trim();

        const erroMensagem = document.getElementById("erroMensagem");

        if (usuario === "" || isNaN(avaliacao) || avaliacao < 1 || avaliacao > 5 || comentario === "") {
            erroMensagem.textContent = "Preencha todos os campos corretamente.";
            return false;
        }

        erroMensagem.textContent = "";
        return true;
    }

    avaliacaoForm.addEventListener("submit", function (e) {
        // e.preventDefault();

        if (validarFormulario()) {
            const usuario = document.getElementById("usuario").value;
            const avaliacao = parseInt(document.getElementById("avaliacao").value);
            const comentario = document.getElementById("comentario").value;

            const novaAvaliacao = {
                usuario,
                avaliacao,
                comentario,
            };

            avaliacoes.push(novaAvaliacao);

            avaliacaoForm.reset();

            exibirAvaliacoes();
        }
    });
});
s


