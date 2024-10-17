
function reduzirValor(valor, porcentagem) {
    return valor * (1 - porcentagem / 100);
}


function adicionarTaxa(valor, porcentagem) {
    return valor * (1 + porcentagem / 100);
}


function calcularValorFinal(valorInicial, desconto, taxa) {
    let valorComDesconto = reduzirValor(valorInicial, desconto);
    let valorFinal = adicionarTaxa(valorComDesconto, taxa);
    return valorFinal;
}


let precoOriginal = parseFloat(prompt("Informe o valor do produto:"));
let descontoAplicado = parseFloat(prompt("Informe a porcentagem de desconto:"));
let taxaICMS = parseFloat(prompt("Informe a porcentagem da taxa:"));

let resultadoFinal = calcularValorFinal(precoOriginal, descontoAplicado, taxaICMS);
console.log("O valor total a pagar é: R$" + resultadoFinal.toFixed(2));
