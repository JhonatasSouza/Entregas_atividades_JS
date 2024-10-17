function emprestimoSimples() {
    let valor = parseFloat(prompt("Informe o valor do empréstimo:"));
    let parcelas = parseInt(prompt("Informe o número de parcelas:"));
    let valorParcela = valor / parcelas;

    for (let i = 1; i <= parcelas; i++) {
        console.log(`Parcela ${i}: R$${valorParcela.toFixed(2)}`);
    }
}

function emprestimoDecrescente() {
    let valor = parseFloat(prompt("Informe o valor do empréstimo:"));
    let parcelas = parseInt(prompt("Informe o número de parcelas:"));
    let amortizacao = valor / parcelas;

    for (let i = 1; i <= parcelas; i++) {
        let juros = valor * 0.02;
        let parcela = amortizacao + juros;
        console.log(`Parcela ${i}: R$${parcela.toFixed(2)} (Juros: R$${juros.toFixed(2)})`);
        valor -= amortizacao;
    }
}

function entradasAteSair() {
    let entrada;
    while ((entrada = prompt("Digite um valor ou 'sair' para encerrar:")) !== "sair") {
        console.log(`Você digitou: ${entrada}`);
    }
}

function somaEMedia() {
    let soma = 0, quantidade = 0, valor;

    while ((valor = prompt("Insira um valor ou 'sair' para encerrar:")) !== "sair") {
        valor = parseFloat(valor);
        if (!isNaN(valor)) {
            soma += valor;
            quantidade++;
            console.log(`Soma: R$${soma.toFixed(2)}, Média: R$${(soma / quantidade).toFixed(2)}`);
        }
    }
}

function menu() {
    let opcao;

    while ((opcao = prompt("Escolha: 1-Parcelas Simples, 2-Parcelas Decrescentes, 3-Entradas até sair, 4-Soma e Média, 5-Sair")) !== "5") {
        if (opcao === "1") emprestimoSimples();
        else if (opcao === "2") emprestimoDecrescente();
        else if (opcao === "3") entradasAteSair();
        else if (opcao === "4") somaEMedia();
        else console.log("Opção inválida.");
    }

    console.log("Encerrando...");
}

menu();
