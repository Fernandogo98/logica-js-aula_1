alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(`Valor do Numero Secreto: ${numeroSecreto}`);
let chute = prompt('Escolha um número entre 1 e 10');
console.log(`Valor do chute: ${chute}`); //mostra o valor do chute inserido no prompt

//se o chute for = ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) {
        alert(`O numero secreto é menor que: ${chute}`);
    } else {
        alert(`O numero secreto é maior que: ${chute}`);
    }

}