document.getElementById("sorteioSilicone").addEventListener('submit', function (event) {
    event.preventDefault(); // impedir o envio do form

    const nome = document.sorteioSilicone.nome.value;
    const telefone = document.sorteioSilicone.telefone.value;
    const cpf = document.sorteioSilicone.cpf.value;
    const senha = document.sorteioSilicone.senha.value;

    if (nome === "" || telefone === "" || cpf === "" || senha === "") {
        document.getElementById("mensagemSaida").textContent = "Preencha todos os campos!";
        document.getElementById("mensagemSaida").style.color = "black";
    } else {
        // Exibir mensagem de sucesso com os dados preenchidos
        document.getElementById("mensagemSaida").textContent = "Você está inscrito no sorteio!";
        document.getElementById("mensagemSaida").style.color = "black";

        // Limpar o formulário
        document.getElementById("sorteioSilicone").reset();
    }
});