
const nomeElement = document.getElementById("nome");
const descricaoElement = document.getElementById("descricao");
const editarPerfilButton = document.getElementById("editarPerfil");

const idadeElement = document.getElementById("idade");
const localizacaoElement = document.getElementById("localizacao");
const emailElement = document.getElementById("email");
const editarDetalhesButton = document.getElementById("editarDetalhes");

function editarPerfil() {
    const novoNome = prompt("Digite seu novo nome:");
    const novaDescricao = prompt("Digite sua nova descrição:");

    if (novoNome !== null && novaDescricao !== null) {
        nomeElement.textContent = novoNome;
        descricaoElement.textContent = novaDescricao;
    }
}

function editarDetalhes() {
    const novaIdade = prompt("Digite sua nova idade:");
    const novaLocalizacao = prompt("Digite sua nova localização:");
    const novoEmail = prompt("Digite seu novo email:");

    if (novaIdade !== null && novaLocalizacao !== null && novoEmail !== null) {
        idadeElement.textContent = novaIdade;
        localizacaoElement.textContent = novaLocalizacao;
        emailElement.textContent = novoEmail;
    }
}

editarPerfilButton.addEventListener("click", editarPerfil);
editarDetalhesButton.addEventListener("click", editarDetalhes);
document.getElementById("uploadFoto").addEventListener("change", function(e) {
    const file = e.target.files[0];

    if (file) {
        const imgElement = document.querySelector(".profile img");
        const reader = new FileReader();

        reader.onload = function(event) {
            imgElement.src = event.target.result;
        };

        reader.readAsDataURL(file);
    }
});
